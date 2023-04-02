import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://svg.xhyrom.dev/",
    base: "/",
    trailingSlash: "always",
    output: "static",
    integrations: [
        sitemap(),
        robotsTxt({
            policy: [
                {
                    userAgent: "*",
                },
            ],
            sitemap: true,
        }),
        compress({
            css: true,
            html: true,
            img: false,
            js: true,
            svg: false,
        }),
        ,
        tailwind(),
    ],
});
