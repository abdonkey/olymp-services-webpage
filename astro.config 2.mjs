import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain on GitHub Pages (see public/CNAME).
  site: 'https://olymp.services',
  base: '/',
  // 'static' is the default — the whole site is prerendered at build time,
  // so Contentful is read once during the GitHub Actions build.
  output: 'static',
  integrations: [tailwind(), react()],
});
