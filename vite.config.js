import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import viteImagemin from 'vite-plugin-imagemin'
import postcssPxToRem from 'postcss-pxtorem'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Рекурсивно ищем HTML-файлы в src
function getHtmlInputs() {
  const srcDir = path.resolve(__dirname, 'src')
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
    const rel = path.relative(srcDir, f).replace(/\\/g, '/')
    const key = rel.replace(/\.html$/, '')
    input[key] = f
  })

  return input
}

export default defineConfig(({ command }) => ({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs()
    }
  },
  css: {
    postcss: {
      plugins: command === 'build' ? [
        postcssPxToRem({
          rootValue: 16, // 1rem = 16px
          propList: ['*'], // конвертировать все свойства
          replace: true,
        })
      ] : []
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
}))
