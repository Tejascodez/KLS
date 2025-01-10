import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes your app accessible on the local network
    port: 3000, // Optional: Change the port if necessary (default is 3000)
  }
})
 