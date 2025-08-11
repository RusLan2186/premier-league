import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import viteImagemin from 'vite-plugin-imagemin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Рекурсивно ищем все HTML в src
 */
function getHtmlInputs() {
  const srcDir = path.resolve(__dirname, 'src') // ищем во всей src
  const files = []

  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, name)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        walk(fullPath)
      } else if (name.toLowerCase().endsWith('.html')) {
        files.push(fullPath)
      }
    }
  }

  walk(srcDir)

  const input = {}
  files.forEach(f => {
    // Относительный путь от src, заменяем \ на /
    const rel = path.relative(srcDir, f).replace(/\\/g, '/')
    const key = rel.replace(/\.html$/, '')
    input[key] = f
  })

  return input
}

export default defineConfig({
  root: 'src',        // dev сервер работает из src
  base: './',         // относительные пути
  build: {
    outDir: '../dist', // билд в корневую dist
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs()
    }
  },
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ]
})
