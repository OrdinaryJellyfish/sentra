// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sentra",
      social: {
        github: "https://github.com/OrdinaryJellyfish/sentra",
      },
      editLink: {
        baseUrl: "https://github.com/OrdinaryJellyfish/sentra/edit/main/docs/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", slug: "guides/installation" },
            { label: "Creating a Module", slug: "guides/creating-a-module" },
            {
              label: "Creating a Service",
              slug: "guides/creating-a-service",
            },
            {
              label: "Adding Settings to the Frontend",
              slug: "guides/adding-settings",
            },
          ],
        },
      ],
    }),
  ],
});
