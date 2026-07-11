import { brotliCompress } from 'zlib'
import { existsSync, readdirSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { resolve, relative, dirname } from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

const brotliCompressAsync = promisify(brotliCompress)

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, 'dist')
const compressedExts = ['.wasm', '.data', '.framework.js']

function collectFiles(dir) {
  let files = []
  if (!existsSync(dir)) return files
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name)
    if (entry.isDirectory()) {
      files = files.concat(collectFiles(fullPath))
    } else if (compressedExts.some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath)
    }
  }
  return files
}

async function main() {
  const files = collectFiles(distDir)
  console.log(`Found ${files.length} file(s) to compress...`)
  const tasks = files.map(async (fullPath) => {
    const outPath = fullPath + '.br'
    if (existsSync(outPath)) return null
    const buf = await readFile(fullPath)
    const compressed = await brotliCompressAsync(buf, {
      params: {
        [1]: 4
      }
    })
    await writeFile(outPath, compressed)
    const saved = ((1 - compressed.length / buf.length) * 100).toFixed(1)
    console.log(`  brotli: ${relative(distDir, fullPath)} (${saved}% saved)`)
    return outPath
  })
  const results = await Promise.all(tasks)
  const count = results.filter(Boolean).length
  console.log(`Compressed ${count} file(s) with Brotli.`)
}

main().catch(console.error)
