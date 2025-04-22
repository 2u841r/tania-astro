// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const notes = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./content" }),
 });
// const blog = defineCollection({ /* ... */ });
// const highlights = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { notes };