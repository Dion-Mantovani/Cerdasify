import { body, validationResult } from 'express-validator'
import { formatValidationErrors } from '../helpers/validatorHelper.js'

// Aturan validasi untuk tambah dan update artikel
export const articleValidationRules = [
  body('title')
    .notEmpty()
    .withMessage('Judul artikel tidak boleh kosong')
    .isLength({ min: 5 })
    .withMessage('Judul minimal 5 karakter'),

  body('author')
    .notEmpty()
    .withMessage('Nama penulis wajib diisi')
    .withMessage('Nama penulis hanya boleh huruf'),

  body('category').notEmpty().withMessage('Kategori harus dipilih'),

  body('content')
    .notEmpty()
    .withMessage('Konten artikel tidak boleh kosong')
    .isLength({ min: 20 })
    .withMessage('Konten minimal 20 karakter'),
]

// Middleware to validate the request
export const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((err) => ({ path: err.path, message: err.msg }))
    const formatted = formatValidationErrors(errorMessages)
    req.flash('errorValidator', formatted)
    req.flash('oldValue', req.body)
    return res.redirect(req.get('Referrer')) // Kembali ke form sebelumnya
  }
  next()
}
