import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    host: true, // Allow access from network
    // https: true, // Disabled due to SSL compatibility issues
  },
  publicDir: 'public',
  // Serve the file directory as static assets
  build: {
    rollupOptions: {
      // Ensure file directory is copied to dist
    },
  },
})

