import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import viteImagemin from 'vite-plugin-imagemin'
import postcssPxToRem from 'postcss-pxtorem'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Находим все HTML в папке dev
function getHtmlInputs() {
  const devDir = path.resolve(__dirname, 'dev')
  const files = []

  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, name)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) walk(fullPath)
      else if (name.toLowerCase().endsWith('.html')) files.push(fullPath)
    }
  }

  walk(devDir)

  const input = {}
  files.forEach(f => {
    const rel = path.relative(devDir, f).replace(/\\/g, '/')
    const key = rel.replace(/\.html$/, '')
    input[key] = f
  })

  return input
}

export default defineConfig(({ command }) => ({
  root: 'dev',
  base: './',
  build: {
    outDir: '../src',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(),
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/i.test(name ?? '')) return 'images/[name]-[hash][extname]'
          if (/\.css$/i.test(name ?? '')) return 'css/[name]-[hash][extname]'
          if (/\.(woff2?|ttf|eot|otf)$/i.test(name ?? '')) return 'fonts/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: command === 'build' ? [
        postcssPxToRem({ rootValue: 16, propList: ['*'], replace: true })
      ] : []
    }
  },
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }, { name: 'removeEmptyAttrs', active: false }] }
    })
  ]
}))
