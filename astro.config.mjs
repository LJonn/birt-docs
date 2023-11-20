import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Birt Docs",
      customCss: [
        // Path to Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/LJonn/birt-docs",
      },
      sidebar: [
        {
          label: "How-to",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "PostgreSQL in docker container",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
