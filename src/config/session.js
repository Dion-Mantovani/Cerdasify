import session from 'express-session'
import MongoStore from 'connect-mongo'
import { config } from './environment.js'

export const sessionConfig = session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: config.mongoURI,
    collectionName: 'sessions',
    ttl: 1000 * 60 * 60 * 24,
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 hari
    secure: false, // true kalau pakai HTTPS
    sameSite: 'lax', // atau 'strict' untuk keamanan CSRF
  },
})
