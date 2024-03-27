import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 
  plugins: [react()],
 
  define: {
    'process.env': {
      // eslint-disable-next-line no-undef
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
      // eslint-disable-next-line no-undef
      VITE_BASE_URL: JSON.stringify(process.env.VITE_BASE_URL)
    }
  }
});
