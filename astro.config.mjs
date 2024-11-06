// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";


import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mariafedotova.netlify.app",
  integrations: [tailwind({
    applyBaseStyles: false,
  }), icon(), sitemap(), partytown(), mdx()],
});