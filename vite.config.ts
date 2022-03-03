import path from 'path';

import { defineConfig, loadEnv, UserConfigFn } from 'vite';
import type { UserConfig } from 'vite';

import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

const makeConfig: UserConfigFn = ({ mode }): UserConfig => {
  const envPrefix = 'APP_';

  const env = loadEnv(mode, process.cwd(), envPrefix);

  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        ['process.env.' + key]: `"${val}"`,
      };
    },
    {},
  );

  return {
    envPrefix,
    define: envWithProcessPrefix,
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
  };
};

// https://vitejs.dev/config/
export default defineConfig(makeConfig);
