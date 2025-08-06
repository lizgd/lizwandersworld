import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'assets',
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