import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    dts({
      include: ['src/components/'],
      exclude: ['src/stories/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DevLifeUI',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});