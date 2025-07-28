import { Router } from 'express'
import * as ArticleController from './article.controller.js'
import { articleValidationRules, validate } from '../../middleware/validator.js'
const router = Router()

// ===================================
// 📁 Kelola Artikel Admin
// Base route: /admin/article
// ===================================

// ✅ READ - Halaman kelola artikel
router.get('/', ArticleController.getManageArticlePage)

// ✅ CREATE - Halaman tambah artikel & proses tambah artikel
router.get('/add', ArticleController.getAddArticlePage)
router.post(
  '/add',
  articleValidationRules,
  validate,
  ArticleController.postArticle
)

// ✅ READ - Detail artikel
router.get('/:id', ArticleController.getArticleDetailPage)

// ✅ UPDATE - Halaman update artikel & proses update artikel
router.get('/:id/update', ArticleController.getUpdateArticlePage)
router.put(
  '/:id/update',
  articleValidationRules,
  validate,
  ArticleController.updateArticle
)

// ✅ DELETE - Proses hapus artikel
router.delete('/:id', ArticleController.deleteArticle)

export default router
