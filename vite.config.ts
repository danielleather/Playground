import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { pigment } from '@pigment-css/vite-plugin';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['prop-types', 'react-is'],
  },
  plugins: [
    react(),
    pigment({
      theme: {
        colors: {
          'bananaMania': '#fae5b4',
          'newOrleans': '#f1d597',
        }
      }
    }),
    svgr()
  ],
})
