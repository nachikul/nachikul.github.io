import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.dev',
  output: 'static',
  integrations: [sitemap()],
});
