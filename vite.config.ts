import path from 'path';

import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP_',
  plugins: [
    react(),
    {
      ...eslintPlugin({
        cache: true,
        fix: true,
        exclude: 'dist',
       }),
      enforce: 'pre',
    },

  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});
