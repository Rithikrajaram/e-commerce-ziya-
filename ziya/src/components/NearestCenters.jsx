import React, { useState } from 'react';
import axios from 'axios';
import { useGeolocated } from 'react-geolocated';
import styles from './NearestCenters.module.css'; // Import the CSS module

const NearestCenters = () => {
  const [location, setLocation] = useState('');
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  const handleFindCenters = async () => {
    setLoading(true);
    setError('');
    try {
      // Use OpenRouteService Geocoding API to convert location to coordinates
      const geocodeResponse = await axios.get(
        `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62489c91f5c472494a3d9e411f38ac853dfd&text=${location || `${coords?.latitude},${coords?.longitude}`}`
      );

      const { features } = geocodeResponse.data;
      if (features.length === 0) {
        setError('Location not found. Please try again.');
        return;
      }

      const [longitude, latitude] = features[0].geometry.coordinates;

      // Use OpenRouteService POIs API to find Ayurvedic centers
      const poisResponse = await axios.get(
        `https://api.openrouteservice.org/pois?api_key=5b3ce3597851110001cf62489c91f5c472494a3d9e411f38ac853dfd&request=pois&geometry=${longitude},${latitude}&radius=5000&size=10&filters=category_ids=health`
      );

      if (poisResponse.data.features.length === 0) {
        setError('No Ayurvedic centers found near this location.');
        return;
      }

      setCenters(poisResponse.data.features);
    } catch (error) {
      console.error('Error fetching centers:', error);
      setError('An error occurred while fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['nearest-centers']}>
      <h2>Find Nearest Ayurvedic Centers</h2>
      <div className={styles['location-input']}>
        <input
          type="text"
          placeholder="Enter your location or use current location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleFindCenters} disabled={loading}>
          {loading ? 'Searching...' : 'Find Centers'}
        </button>
      </div>

      {!isGeolocationAvailable && (
        <p>Geolocation is not supported by your browser.</p>
      )}
      {isGeolocationAvailable && !isGeolocationEnabled && (
        <p>Please enable geolocation to use this feature.</p>
      )}

      {error && <p className={styles.error}>{error}</p>}

      {centers.length > 0 && (
        <div className={styles['centers-list']}>
          <h3>Nearest Ayurvedic Centers:</h3>
          <ul>
            {centers.map((center) => (
              <li key={center.properties.id}>
                <strong>{center.properties.name}</strong> - {center.properties.street}, {center.properties.locality}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NearestCenters;