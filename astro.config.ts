import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import astroD2 from "astro-d2";

export default defineConfig({
  integrations: [mdx(), astroD2()],
});
