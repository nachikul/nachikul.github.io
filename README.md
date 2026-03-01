# nachikul.github.io

Personal portfolio website for **Nachiket Kulkarni** — Senior DevOps / Platform Engineer at Autodesk.

Built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

🌐 **Live site:** https://nachikul.github.io

---

## Local Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is placed in `./dist/`. Preview with `npm run preview`.

## Deployment

Deployment is **automatic** via GitHub Actions on every push to `main`.

The workflow (`.github/workflows/deploy.yml`):
1. Checks out the repository
2. Sets up Node 20
3. Runs `npm install` and `npm run build`
4. Uploads `./dist` as a Pages artifact
5. Deploys to GitHub Pages

Make sure **GitHub Pages** is set to use **GitHub Actions** as the source in your repository settings.

## Custom Domain

To use a custom domain:
1. Update the `CNAME` file in the root with your domain (e.g., `yourname.dev`)
2. Point your DNS to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
3. Update `site` in `astro.config.mjs` to match your domain

## Content Management

### Add a Blog Post
Drop a `.md` (or `.astro`) file in `src/pages/blog/`:
```
src/pages/blog/my-post.md
```
Astro will automatically create a route at `/blog/my-post`.

### Add / Edit Projects
Edit `src/data/projects.json`. Each entry:
```json
{
  "name": "Project Name",
  "description": "Short description.",
  "tech": ["Python", "Kubernetes"],
  "github": "https://github.com/nachikul/repo",
  "url": "https://live-demo.com"
}
```

### Update Experience
Edit `src/data/experience.json`. Each entry:
```json
{
  "company": "Company Name",
  "role": "Your Role",
  "period": "Jan 2022 – Present",
  "location": "City, Country",
  "description": "What you did."
}
```

## Tech Stack

- **Framework:** Astro 4
- **Styling:** Inline CSS with CSS custom properties (no framework)
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Dark mode:** Default dark, toggleable via localStorage
- **Deployment:** GitHub Actions → GitHub Pages
- **Sitemap:** `@astrojs/sitemap`
