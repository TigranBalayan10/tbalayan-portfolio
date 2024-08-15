import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
