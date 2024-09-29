export const siteConfig = {
  name: "Xmchx's Blog",
  url: "https://xmchxup.github.io",
  description: "Technology & Social Life",
  author: "Xmchx",
  links: {
    github: "https://github.com/xmchxup",
    personalSite: "https://xmchxup.github.io",
    runningPage: "https://xmchxup.github.io/running_page",
  },
  navItems: [
    { href: "/", label: "Home" },
    {
      href: "/archives",
      label: "Archives",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/hobby_project",
      label: "Hobby Project",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
