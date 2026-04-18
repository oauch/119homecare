import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/119homecare/',
  plugins: [react({
    jsxImportSource: '@emotion/react'
  })],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets'
    }
  }
})
