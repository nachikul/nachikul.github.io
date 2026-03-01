import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nachikul.github.io',
  integrations: [sitemap()],
  output: 'static',
});
