import path from 'path';
import {defineConfig} from 'vite';
import pluginReactSwc from '@vitejs/plugin-react-swc';
import pluginSvgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [pluginReactSwc(), pluginSvgr()],
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        // TODO: Figure out how to make these globally available
        // without requiring an `@import` in every file.
        customMedia: true,
      },
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@pkg': path.resolve(__dirname, './packages'),
    },
  },
});
