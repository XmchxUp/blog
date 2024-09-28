export const siteConfig = {
  name: "Xmchx's Blog",
  url: "https://xmchxup.github.io",
  description: "Technology & Social Life",
  author: "Xmchx",
  links: {
    github: "https://github.com/xmchxup",
    personalSite: "https://xmchxup.github.io",
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
  ],
};

export type SiteConfig = typeof siteConfig;
