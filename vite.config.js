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

          if (id.includes('@emailjs')) {
            return 'emailjs'
          }

          if (id.includes('react-icons')) {
            return 'icon-vendor'
          }

          return undefined
        }
      }
    }
  },
  server: {
    host: true, // Expose to local network
    port: 5173,
  }
})
