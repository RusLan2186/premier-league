import ftp from 'basic-ftp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const localRoot = path.join(__dirname, 'src') // твой билд
const remoteRoot = '/' // корень на сервере

async function deployFTP() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: '147.93.73.200',
      user: 'u859522989.Ruslan',
      password: ':y]NL#vB6^B^EW9K5Sn$uCyCd&Nze7Ig',
      secure: false
    })
    console.log('✅ Connected to FTP')
    await uploadDir(localRoot, remoteRoot, client)
    console.log('✅ Deploy finished')
  } catch (err) {
    console.error('❌ Deploy error', err)
  } finally {
    client.close()
  }
}

// Рекурсивная загрузка папок
async function uploadDir(localDir, remoteDir, client) {
  await client.ensureDir(remoteDir)
  const files = fs.readdirSync(localDir)
  for (const file of files) {
    const localPath = path.join(localDir, file)
    const remotePath = path.posix.join(remoteDir, file)
    const stat = fs.statSync(localPath)
    if (stat.isDirectory()) {
      await uploadDir(localPath, remotePath, client)
    } else {
      await client.uploadFrom(localPath, remotePath)
      console.log(`Uploaded: ${remotePath}`)
    }
  }
}

// Запуск
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  deployFTP()
}
