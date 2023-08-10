import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://cn.vitejs.dev/
export default defineConfig({
  base: "/vue-reader",
  plugins: [
    vue()
  ],
  publicDir: 'public',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  server: {
    port: 8025,
  }
})
