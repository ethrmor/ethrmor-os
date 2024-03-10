import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  image: {
    service: passthroughImageService()
  },
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: cloudflare()
});