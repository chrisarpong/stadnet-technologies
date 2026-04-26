import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async') || id.includes('/react/')) {
            return 'react-core'
          }

          if (id.includes('@emailjs')) {
            return 'emailjs'
          }

          if (id.includes('react-icons')) {
            return 'icon-vendor'
          }

          return 'vendor'
        }
      }
    }
  },
  server: {
    host: true, // Expose to local network
    port: 5173,
  }
})
