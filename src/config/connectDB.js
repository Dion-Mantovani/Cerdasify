// src/config/db.js
import mongoose from 'mongoose'
import { config } from './environment.js'

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (err) {
    throw new Error(err)
  }
}

export default connectDB
