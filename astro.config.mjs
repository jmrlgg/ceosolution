// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yourceosolution.com',
  integrations: [sitemap()],
  // Keep the old GoHighLevel URLs working so existing links and SEO aren't lost.
  redirects: {
    '/home-179197': '/',
    '/about-516730': '/about',
    '/services-new': '/work-with-us',
    '/book-a-consultation': '/contact',
  },
});
