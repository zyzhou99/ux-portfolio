import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zyzhou99.github.io',
  base: '/ux-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});