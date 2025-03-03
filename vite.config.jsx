import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-map-gl', 'mapbox-gl'],
  },
  resolve: {
    alias: {
      'react-map-gl': 'react-map-gl/dist/esm', // Use the ESM build of react-map-gl
      'mapbox-gl': 'mapbox-gl/dist/mapbox-gl', // Ensure mapbox-gl is resolved correctly
    },
  },
});