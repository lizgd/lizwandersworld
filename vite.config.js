import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    writeBundle() {
      const copyDir = (src, dest) => {
        if (!statSync(src).isDirectory()) return
        mkdirSync(dest, { recursive: true })
        const files = readdirSync(src)
        for (const file of files) {
          const srcPath = join(src, file)
          const destPath = join(dest, file)
          if (statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath)
          } else {
            copyFileSync(srcPath, destPath)
          }
        }
      }
      
      copyDir('assets', 'dist/assets')
    }
  }
}

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
  },
  plugins: [copyAssetsPlugin()]
}) 