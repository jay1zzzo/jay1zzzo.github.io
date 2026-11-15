// Tells Astro what goes in each Markdown file, and checks nothing is missing.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z.object({
    headline: z.string(),
    shortIntro: z.string(),
    longIntro: z.string(),
    beliefs: z.array(z.string()),
    contactButton: z.string(),
    email: z.string(),
    linkedin: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      label: z.string(),                       // shown as [ LABEL ]
      category: z.enum(['marketing', 'tool']), // which list page it appears on
      summary: z.string(),                     // one line on the card
      order: z.number(),                       // 1 = first card
      link: z.string().optional(),             // public link (repo or live site)
      linkText: z.string().optional(),
      // Optional images shown on the project page (click to enlarge).
      // Alt text is required: the site won't build without it.
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            caption: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

// Work gallery: one line per image in src/content/gallery.yaml
const gallery = defineCollection({
  loader: file('src/content/gallery.yaml'),
  schema: z.object({
    image: z.string(),          // file name inside src/assets/gallery/
    what: z.string(),           // what it is
    did: z.string(),            // what I did
    tool: z.string(),           // tool used
    alt: z.string().min(1),     // describes the image for screen readers
  }),
});

// Text-only pages (Marketing intro, About)
const pages = defineCollection({
  loader: glob({ pattern: ['marketing.md', 'about.md'], base: './src/content' }),
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
  }),
});

export const collections = { home, projects, gallery, pages };
