// @ts-check
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc'
import remarkSlug from 'remark-slug'
import react from '@astrojs/react';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    build: {
        format: "file",
      },
    integrations:[react(), pagefind()],
    markdown: {
        remarkPlugins: [remarkToc],
    }

});
