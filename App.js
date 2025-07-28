// ==================================================
// Cerdasify - Aplikasi Pembelajaran Interaktif

// ==================================================
//              1. GLOBAL CONFIGURATIONS
// ==================================================
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import methodOverride from 'method-override'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ==================================================
//                   2. MIDDLEWARES
// ==================================================

import router from './src/routes/route.js'
import { locals } from './src/config/local.js'
import connectDB from './src/config/connectDB.js'
import { config } from './src/config/environment.js'
import { sessionConfig } from './src/config/session.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(sessionConfig)
app.use(flash())
app.use(locals)

// ==================================================
//                   3. SETUP VIEWS
// ==================================================
app.use(express.static(path.join(__dirname, 'src', 'public')))
app.use(expressLayouts)
app.set('layout', './layout/main-layout')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))

// ==================================================
//             4. ROUTES CONFIGURATION
// ==================================================
app.use('/', router)

// ==================================================
//           5. START SERVER & CONNECT DB
// ==================================================
;(async () => {
  try {
    await connectDB()
    console.log('✅ MongoDB connected')

    app.listen(config.port, () => {
      console.log(`🚀 Server running at http://localhost:${config.port}`)
    })
  } catch (err) {
    console.error('❌ Gagal konek DB:', err.message)
    process.exit(1)
  }
})()
