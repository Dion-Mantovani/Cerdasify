import { Router } from 'express'
import * as AdminController from './admin.controller.js'
import articleRoutes from '../admin-article/article.route.js'
const router = Router()
// ==================================================

// Redirect /admin   ->   /admin/dashboard
router.get('/', (req, res) => {
  res.redirect('/admin/dashboard')
})

// GET : /admin/dashboard
router.get('/admin/dashboard', AdminController.getAdminPage)

// GET : /admin/article
router.use('/admin/article', articleRoutes)

export default router
