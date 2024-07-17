import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    hero: z.string(),
    icons: z.array(z.string()),
    link: z.string(),
  }),
});

export const collections = {
  "projects": projectsCollection,
};
