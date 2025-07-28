import * as AdminServices from './admin.services.js'

export const getAdminPage = (req, res) => {
  res.render('pages/admin/dashboard', {
    title: 'Admin Dashboard',
    layout: './layout/main-layout',
  })
}
