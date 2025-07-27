# Cerdasify

**Cerdasify** adalah platform berbasis web yang menyajikan artikel edukatif secara terstruktur, dibuat dengan pendekatan **SSR (Server-Side Rendering)** menggunakan Node.js, Express, dan EJS.

---

## 🧩 Tech Stack ---------------------------

- **Backend**: Node.js, Express
- **Frontend (SSR)**: EJS
- **Database**: MongoDB (via Mongoose)
- **Session & Auth**: express-session, bcrypt
- **Security**: rate-limit, captcha, cookie-parser
- **Misc**: multer (upload), slugify, uuid, connect-flash, express-validator, node-cache

---

## 📁 Struktur Folder ---------------------------

```bash
src/
├── config/           # Setup login, session, cookie
├── models/           # Schema dan koneksi DB
├── helpers/          # Global helpers
├── middleware/
├── utils/
├── modules/          # Modular per domain (auth, admin, dll)
│   ├── auth/
│   ├── admin/
│   └── ...
├── routes/
├── public/           # Static file (css, js, upload)
├── views/            # File EJS
│   └── pages/        # pages/main, pages/auth, dll
└── ...
```

## 🚀 Fitur Utama ---------------------------

- Login dan Register user (dengan captcha dan rate-limit)
- Role-based dashboard (user & admin)
- Upload gambar artikel
- Like artikel (tanpa login)
- Pagination, search, dan slug URL
- Flash message
- Middleware proteksi route
- Caching artikel

## 🧪 Endpoint Utama ---------------------------

✅ Public

    - GET /                         – Halaman home
    - GET /article/:slug            – Detail artikel
    - POST /article/:slug/like      – Like artikel
    - POST /article/:slug/comment   – Comment artikel

✅ Auth

    - GET & POST /auth/sign-in
    - GET & POST /auth/sign-up
    - POST /auth/sign-out

✅ User

    - GET /user/dashboard

✅ Admin

    - GET /admin/dashboard
    - GET & POST /admin/article
    - GET /admin/article/:id
    - PUT /admin/article/:id/update
    - DELETE /admin/article/:id

## ⚙️ Cara Menjalankan ---------------------------

```bash
# 1. Clone project
git clone git@github.com:Dion-Mantovani/Cerdasify.git
cd Cerdasify

# 2. Install dependencies
npm install

# 3. Buat file .env
cp .env.example .env

# 4. Jalankan
npm run dev
```

## 🗂️ .env Variables (contoh) ---------------------------

```env
PORT=3000
DB_URI=mongodb://localhost:27017/cerdasify
SESSION_SECRET=somesecret
```

## 📌 Catatan Dev ---------------------------

✅ UI dibangun menggunakan EJS dengan express-ejs-layouts
✅ Semua controller dan logic domain dipecah ke dalam modules/
✅ Sistem validasi menggunakan express-validator
✅ Rate limiting login UX-friendly: tombol login dibekukan sementara (countdown di frontend)

## ✍️ Author

Muhamad Dion Mantovani
https://github.com/Dion-Mantovani
