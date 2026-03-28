export const siteConfig = {
  name: "Xmchx's Blog",
  url: "https://xmchxup.github.io",
  description: "Technology & Social Life",
  author: "Xmchx",
  gaId: "G-N80PEBXDRQ",
  wakatimeUrl: "https://wakatime.com/@Tesla",
  giscus: {
    repo: "XmchxUp/blog-comment" as const,
    repoId: "R_kgDOG4RW8Q",
    category: "Comments" as const,
    categoryId: "DIC_kwDOG4RW8c4C5YyU",
  },
  specialPostIds: ["about.mdx", "hobby_project.mdx"],
  links: {
    github: "https://github.com/xmchxup",
    personalSite: "https://xmchx.vercel.app/",
    runningPage: "https://xmchxup.github.io/running_page",
    tgArchivePage: "https://xmchxup.github.io/tg_archive_web/",
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/hobby_project", label: "Hobby Projects" },
  ],
};

export type SiteConfig = typeof siteConfig;
