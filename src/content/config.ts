import { z, defineCollection } from "astro:content";
import type Biography from "../pages/biography.astro";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    hero: z.string(),
    icons: z.array(z.string()),
    link: z.string(),
    github: z.string(),
  }),
});

const timelineCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    timelineEvents: z.array(
      z.object({
        year: z.number(),
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
      })
    ),
  }),
});

export const collections = {
  "projects": projectsCollection,
  "biography": timelineCollection,
};
