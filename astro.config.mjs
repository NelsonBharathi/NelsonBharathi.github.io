import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://YOUR_USERNAME.github.io", // <-- change once later
  integrations: [tailwind()],
  output: "static",
});
