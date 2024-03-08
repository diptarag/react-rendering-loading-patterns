import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleX from 'vite-plugin-stylex';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  build: {
    sourcemap: false,
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          filename: 'reports/bundle-analysis.html'
        })
      ]
    }
  }
})
