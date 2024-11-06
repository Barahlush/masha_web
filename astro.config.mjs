// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://mariafedotova.com',
  integrations: [tailwind(), icon(), sitemap(), image()]
});