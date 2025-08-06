import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        aboutme: 'aboutme.html',
        nutshell: 'nutshell.html',
        whativedone: 'whativedone.html'
      }
    }
  }
}) 