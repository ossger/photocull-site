// @ts-check
import { defineConfig } from 'astro/config';

// NOTE: keep this URL in sync with `url` in src/config/site.ts.
const SITE_URL = process.env.SITE_URL || 'https://photocull.infrarg.com';

export default defineConfig({
  site: SITE_URL,
});
