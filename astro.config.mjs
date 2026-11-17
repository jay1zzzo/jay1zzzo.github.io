// Astro settings. "site" is the web address the site will live at.
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jay1zzzo.github.io',
  integrations: [react()],

  // About and Contact now live on the home page. Old links still land in the right place.
  redirects: {
    '/about': '/#about',
    '/contact': '/#contact',
  },

  // Keep text exactly as written: no automatic "smart" quotes or dashes.
  markdown: {
    smartypants: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});