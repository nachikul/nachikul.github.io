# nachikul.github.io

Personal portfolio website for **Nachiket Kulkarni** — Senior DevOps / Platform Engineer.
Showcasing the projects and experience.

Built with [Astro](https://astro.build) and deployed to [GitHub Pages](https://pages.github.com/).

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev
# → http://localhost:4321

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
/
├── .github/workflows/deploy.yml  # GitHub Actions — auto-deploys on push to main
├── public/
│   ├── CNAME          # Custom domain (update this)
│   ├── robots.txt
│   └── favicon.svg    # NK initials favicon
├── src/
│   ├── data/
│   │   ├── projects.json    # ← Add/edit projects here
│   │   └── experience.json  # ← Add/edit work history here
│   ├── layouts/
│   │   └── BaseLayout.astro # Shared nav, footer, SEO, theme toggle
│   ├── components/
│   │   └── ThemeToggle.astro
│   └── pages/
│       ├── index.astro       # Home
│       ├── about.astro
│       ├── experience.astro
│       ├── projects.astro
│       ├── contact.astro
│       └── blog/
│           └── index.astro   # Drop .md files here for blog posts
├── astro.config.mjs
└── package.json
```

---

## ✏️ Adding Content

### New Project
Edit `src/data/projects.json` and add an entry:
```json
{
  "name": "MyProject",
  "description": "Short description",
  "tags": ["Python", "Docker"],
  "url": "https://github.com/nachikul/myproject"
}
```

### New Blog Post
Drop a Markdown file in `src/pages/blog/`:
```
src/pages/blog/my-new-post.md
```
Astro will automatically generate a route at `/blog/my-new-post`.

### Update Experience
Edit `src/data/experience.json`.

---

## 🌐 Deploying to GitHub Pages

1. Push to the `main` branch — GitHub Actions will build and deploy automatically.
2. The workflow is at `.github/workflows/deploy.yml`.
3. In your repo settings → **Pages**, set the source to **GitHub Actions**.

---

## 🔗 Custom Domain Setup

1. Update `public/CNAME` with your domain:
   ```
   yourname.dev
   ```
2. Update `site` in `astro.config.mjs`:
   ```js
   site: 'https://yourname.dev',
   ```
3. Update the sitemap URL in `public/robots.txt`.
4. In your DNS provider, add:
   - **CNAME record**: `www` → `nachikul.github.io`
   - Or **A records** (for apex domain) pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
5. In GitHub repo settings → **Pages** → set your custom domain and enable **Enforce HTTPS**.

---

## 🎨 Design

- **Dark mode by default** with a light mode toggle (stored in `localStorage`)
- **Teal accent** (`#0d9488`)
- **Fonts**: Inter (body) + JetBrains Mono (headings/code)
- **No CSS frameworks** — scoped Astro styles, pure CSS Grid/Flexbox
- **Mobile responsive**
