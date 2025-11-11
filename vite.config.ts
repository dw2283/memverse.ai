import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [vue()],
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})


