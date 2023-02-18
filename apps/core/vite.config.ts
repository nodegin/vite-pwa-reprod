/// <reference types="vitest" />
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { VitePWA, defaultInjectManifestVitePlugins } from 'vite-plugin-pwa';
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
    react(), // <-- Comment this line and compare the dev behavior
    VitePWA({
      strategies: 'injectManifest',
      srcDir: './src',
      filename: 'sw.ts',
      injectManifest: {
        vitePlugins: defaultInjectManifestVitePlugins.concat(
          'vite-tsconfig-paths'
        ),
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
});
