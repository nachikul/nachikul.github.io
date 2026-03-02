import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nachikul.dev',
  output: 'static',
  integrations: [sitemap()],
});
