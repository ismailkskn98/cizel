import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  pathnames: {
    "/": "/",
    "/about": {
      tr: "/hakkimizda",
      en: "/about",
    },
    "/career": {
      tr: "/kariyer",
      en: "/career",
    },
    "/contact": {
      tr: "/iletisim",
      en: "/contact",
    },
    "/projects": {
      tr: "/projeler",
      en: "/projects",
    },
    "/projects/[cityOrSlug]": {
      tr: "/projeler/[cityOrSlug]",
      en: "/projects/[cityOrSlug]",
    },
    "/projects/[cityOrSlug]/[slug]": {
      tr: "/projeler/[cityOrSlug]/[slug]",
      en: "/projects/[cityOrSlug]/[slug]",
    },
  },
});
