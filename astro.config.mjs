// Astro settings. "site" is the web address the site will live at.
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jay1zzzo.github.io',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});