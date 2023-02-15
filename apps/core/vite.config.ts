/// <reference types="vitest" />
import { defineConfig } from 'vite';

import { VitePWA } from 'vite-plugin-pwa';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/core',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: './src',
      filename: 'sw.ts',
    }),
  ],
});
