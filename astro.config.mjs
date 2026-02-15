// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gista247.github.io',
  base: '/plantoclean',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('nachricht-gesendet'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
