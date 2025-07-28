import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // slug: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   lowercase: true,
    // },
    // thumbnail: {
    //   type: String,
    //   required: true,
    // },
    // publish: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true }
)

const Article = mongoose.model('Article', articleSchema)

export { Article }
