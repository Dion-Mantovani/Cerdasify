import * as ArticleServices from './article.services.js'
import { parseUrl } from '../../helpers/urlHelper.js'

// ======================= Halaman kelola artikel =======================
export const getManageArticlePage = async (req, res) => {
  const articles = await ArticleServices.getAllArticles()

  res.render('pages/admin/article', {
    title: 'Kelola Artikel',
    layout: './layout/main-layout',
    articles,
    encode: encodeURIComponent(req.originalUrl),
  })
}

// ======================= Halaman tambah artikel =======================
export const getAddArticlePage = (req, res) => {
  res.render('pages/admin/article/add-article', {
    title: 'Tambah Artikel',
    layout: './layout/main-layout',
    errors: req.flash('errorValidator')[0],
    oldValue: req.flash('oldValue')[0],
    ...parseUrl(req.query.back),
  })
}

// ======================= Proses tambah artikel =======================
export const postArticle = async (req, res) => {
  const { decode } = parseUrl(req.query.back)
  try {
    await ArticleServices.createArticle(req.body)

    req.flash('success', 'Artikel berhasil ditambahkan!')
    res.redirect(decode || '/admin/article')
  } catch (err) {
    req.flash(
      'error',
      err.message || 'Terjadi kesalahan saat menambahkan artikel.'
    )
    res.redirect(decode || '/admin/article')
  }
}

// ======================= Halaman detail artikel =======================
export const getArticleDetailPage = async (req, res) => {
  const url = parseUrl(req.query.back)
  try {
    const article = await ArticleServices.getArticle(req.params.id)

    res.render('pages/admin/article/detail-article', {
      title: 'Detail Artikel',
      layout: './layout/main-layout',
      article: article,
      ...url,
    })
  } catch (err) {
    req.flash(
      'error',
      err.message || 'Terjadi kesalahan saat mengambil detail artikel.'
    )
    res.redirect(url.decode || '/admin/article')
  }
}

// ======================= Halaman update artikel =======================
export const getUpdateArticlePage = async (req, res) => {
  const { encode } = parseUrl(req.query.back)
  try {
    const article = await ArticleServices.getArticle(req.params.id)

    res.render('pages/admin/article/update-article', {
      title: 'Edit Artikel',
      layout: './layout/main-layout',
      errors: req.flash('errorValidator')[0],
      oldValue: req.flash('oldValue')[0],
      article,
      encode,
    })
  } catch (err) {
    req.flash(
      'error',
      err.message || 'Terjadi kesalahan saat mengambil artikel untuk diupdate.'
    )
    res.redirect(`/admin/article/${req.params.id}?back=${encode}`)
  }
}

// ======================= Proses update artikel =======================
export const updateArticle = async (req, res) => {
  const { encode } = parseUrl(req.query.back)
  try {
    await ArticleServices.editArticle(req.params.id, req.body)

    req.flash('success', 'Artikel berhasil diperbarui!')
    res.redirect(`/admin/article/${req.params.id}?back=${encode}`)
  } catch (err) {
    req.flash(
      'error',
      err.message || 'Terjadi kesalahan saat memperbarui artikel.'
    )
    res.redirect(`/admin/article/${req.params.id}/update?back=${encode}`)
  }
}

// ======================= Proses hapus artikel =======================
export const deleteArticle = async (req, res) => {
  try {
    await ArticleServices.removeArticle(req.params.id)

    req.flash('success', 'Artikel berhasil dihapus!')
    res.redirect('/admin/article')
  } catch (err) {
    req.flash(
      'error',
      err.message || 'Terjadi kesalahan saat menghapus artikel.'
    )
    res.redirect('/admin/article')
  }
}
