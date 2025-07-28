import dotenv from 'dotenv'
dotenv.config({ quiet: true })

export const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI,
  sessionSecret: process.env.SESSION_SECRET || 'default_session',
}
