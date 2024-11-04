import { defineConfig } from "astro/config";
import m from "@astrojs/mdx";
export default defineConfig({ integrations: [m()] });
