import { Router } from 'express'
const router = Router()

// Modularized route imports
// import publicRoutes from '../modules/main/main.route.js'
// import authRoutes from './../modules/auth/auth.route.js'
// import userRoutes from './../modules/user/user.route.js'
import adminRoutes from './../modules/admin/admin.route.js'

// // Public routes
// router.use('/', publicRoutes)

// // Auth routes
// router.use('/auth', authRoutes)

// // User routes
// router.use('/user', userRoutes)

// Admin routes
router.use('/', adminRoutes)

export default router
