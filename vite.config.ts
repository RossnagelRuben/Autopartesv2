import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const base = (process.env.VITE_BASE_PATH || '/').replace(/\/?$/, '/') || '/';
  return {
    base,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api/sheet.csv': {
          target: 'https://docs.google.com',
          changeOrigin: true,
          secure: true,
          rewrite: () =>
            '/spreadsheets/d/1otmGlvVWK5r3-pEuKFYEEixWvbP7YofeqyEr-08V7Mo/export?format=csv&gid=0',
        },
      },
    },
    preview: {
      proxy: {
        '/api/sheet.csv': {
          target: 'https://docs.google.com',
          changeOrigin: true,
          secure: true,
          rewrite: () =>
            '/spreadsheets/d/1otmGlvVWK5r3-pEuKFYEEixWvbP7YofeqyEr-08V7Mo/export?format=csv&gid=0',
        },
      },
    },
  };
});
