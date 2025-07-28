import { Router } from 'express'
const router = Router()

// // GET /
// router.get('/', (req, res) => {
//   res.redirect('/home')
// })

// router.get('/home', (req, res) => {
//   res.render('pages/main/home', {
//     title: 'Beranda',
//     layout: './layout/main-layout',
//   })
// })

// // GET /article/:slug
// router.get('/article/:slug', (req, res) => {
//   res.render('pages/article/read-article', {
//     title: 'Baca Artikel',
//     layout: './layout/main-layout',
//   })
// })

// // POST /article/:slug/like
// router.post('/article/:slug/like', (req, res) => {
//   res.send(`Like artikel: ${req.params.slug}`)
// })

// // POST /article/:slug/comment
// router.post('/article/:slug/comment', (req, res) => {
//   res.send(`Comment artikel: ${req.params.slug}`)
// })

export default router
