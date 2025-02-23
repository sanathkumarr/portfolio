import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5034-45-249-78-154.ngrok-free.app'], // Replace with your Ngrok URL
  }
})
