import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',        // Output modern JS (reduce bundle size for modern browsers)
    minify: 'terser',        // Use Terser to minify more aggressively than esbuild
    terserOptions: {
      compress: {
        drop_console: true,  // Optional: remove console.log in production
        drop_debugger: true,
      },
      format: {
        comments: false,     // Remove comments from the output
      },
    },
    cssCodeSplit: true,      // Split CSS to avoid one large file
    sourcemap: false,        // Don't generate sourcemaps for production (reduce output size)
  },
});