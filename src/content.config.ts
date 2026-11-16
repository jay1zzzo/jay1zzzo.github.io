// Tells Astro what goes in each Markdown file, and checks nothing is missing.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// A number box, e.g. { value: 179, label: "tests" }. Numbers count up; text (like "A+") doesn't.
const stat = z.object({
  value: z.union([z.number(), z.string()]),
  suffix: z.string().optional(), // e.g. "%"
  label: z.string(),
});

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z.object({
    headline: z.string(),
    intro: z.string().optional(),
    shortIntro: z.string(),
    longLead: z.string().optional(), // a one-line opener shown in bold above the Long intro
    longIntro: z.string(),
    reflectionsTitle: z.string(),
    reflections: z.array(z.object({ title: z.string(), text: z.string() })),
    contactButton: z.string(),
    email: z.string(),
    linkedin: z.string(),
    // Tools & Technologies logo grid on the home page
    toolsTitle: z.string().optional(),
    toolsSubtitle: z.string().optional(),
    tools: z
      .array(z.object({ name: z.string(), logo: z.string().optional(), group: z.string().optional(), chip: z.boolean().optional(), note: z.string().optional() }))
      .optional(),
    // Things I am learning or working on now, shown as tags under Tools & Technologies
    interestsTitle: z.string().optional(), // label for the quiet "Interested in" line under Learning
    interests: z.array(z.string()).optional(),
    qualificationsNote: z.string().optional(), // a short note shown under Education and qualifications
    contactText: z.string().optional(),        // the sentence above the contact buttons
    learningTitle: z.string().optional(),
    homeLearning: z.array(z.object({ name: z.string(), note: z.string().optional() })).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      label: z.string(),                       // shown as [ LABEL ]
      category: z.enum(['marketing', 'tool', 'practice']), // which list page it appears on
      summary: z.string(),                     // one line on the card
      order: z.number(),                       // 1 = first card
      link: z.string().optional(),             // public link (repo or live site)
      linkText: z.string().optional(),
      // Optional images shown on the project page (click to enlarge).
      // Alt text is required: the site won't build without it.
      stats: z.array(stat).optional(),          // number boxes near the top of the page
      imagesTitle: z.string().optional(),       // heading above the images, e.g. "Screenshots"
      imagesNote: z.string().optional(),        // small line under that heading
      imagesLayout: z.enum(['grid', 'wide', 'two']).optional(),
      icon: z.enum(['coffee', 'newspaper', 'brochure', 'swatch', 'megaphone', 'snowflake', 'browser', 'briefcase']).optional(), // line icon on the home page card
      featured: z.boolean().optional(),         // show on the home page under Selected marketing work
      thumb: image().optional(),                // card thumbnail (real work)
      thumbAlt: z.string().optional(), // "wide" = one per row, "two" = two per row
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            caption: z.string().optional(),
            edited: z.boolean().optional(), // true when personal details were replaced for display
          }),
        )
        .optional(),
      closeupsTitle: z.string().optional(),
      closeups: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            caption: z.string().optional(),
            edited: z.boolean().optional(), // true when personal details were replaced for display
          }),
        )
        .optional(),
    }),
});

// Work gallery: one line per image in src/content/gallery.yaml
const gallery = defineCollection({
  loader: file('src/content/gallery.yaml'),
  schema: z.object({
    image: z.string(),          // "gallery/file.png" or "work/file.webp" (a folder inside src/assets/)
    what: z.string(),           // what it is
    did: z.string(),            // what I did
    tool: z.string().optional(), // tool used (leave out if unsure)
    edited: z.boolean().optional(), // true when faces, names or private details were blurred or replaced
    alt: z.string().min(1),     // describes the image for screen readers
  }),
});

// Text-only pages (Marketing intro, About)
const pages = defineCollection({
  loader: glob({ pattern: ['marketing.md', 'about.md'], base: './src/content' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string().optional(),
      statsTitle: z.string().optional(),
      stats: z.array(stat).optional(),
      // About page: photos placed under a paragraph (after = paragraph number)
      photos: z
        .array(z.object({ src: image(), after: z.number(), alt: z.string().min(1), caption: z.string().optional() }))
        .optional(),
      outsideTitle: z.string().optional(),
      outside: z
        .array(z.object({ src: image(), alt: z.string().min(1), caption: z.string().optional() }))
        .optional(),
    }),
});

// Qualifications and certifications: one line each in src/content/certifications.yaml
const certifications = defineCollection({
  loader: file('src/content/certifications.yaml'),
  schema: z.object({
    name: z.string(),
    type: z.enum(['education', 'certification', 'course']).default('education'),
    order: z.number().default(99), // 1 = shown first (newest first)
    featured: z.boolean().optional(),   // show as the large highlighted card
    provider: z.string().optional(),    // e.g. who trained me
    providerLabel: z.string().optional(), // the words before the provider, default "Trained by"
    providerLink: z.string().optional(),
    detail: z.string().optional(), // e.g. "Pass, October 2026"
    link: z.string().optional(),   // public verification link, if there is one
  }),
});

export const collections = { home, projects, gallery, pages, certifications };
