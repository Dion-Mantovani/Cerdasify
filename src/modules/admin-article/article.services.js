import { Article } from '../../models/schema.js'
import { throwError } from '../../utils/error.js'

// ======================= Read All Articles =======================
export const getAllArticles = async () => {
  const articles = await Article.find().lean()
  if (!articles) throwError('Tidak ada artikel yang ditemukan.')
  return articles
}

// ======================= Create =======================
export const createArticle = async (body) => {
  const newArticle = new Article(body)
  const article = await newArticle.save()
  if (!article) throwError('Gagal menambahkan artikel.')
  return
}

// ======================= Read =======================
export const getArticle = async (id) => {
  const article = await Article.findById(id).lean()
  if (!article) throwError('Artikel tidak ditemukan.')
  return article
}

// ======================= Update =======================
export const editArticle = async (id, articleData) => {
  const article = await Article.findByIdAndUpdate(id, articleData)
  if (!article) throwError('Gagal memperbarui artikel.')
  return
}

// ======================= Delete =======================
export const removeArticle = async (id) => {
  const article = await Article.findByIdAndDelete(id)
  if (!article) throwError('Gagal menghapus artikel.')
  return
}
