import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  "projects": projectsCollection,
};
