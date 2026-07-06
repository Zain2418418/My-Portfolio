import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure standard absolute root paths for assets
  build: {
    outDir: 'dist', // Sahi folder output lock karne ke liye
  }
})