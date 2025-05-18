import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://project-3-thisis-myusername-zaids-projects-9a3247fa.vercel.app/',
        changeOrigin: true,
      },
    },
  },
});