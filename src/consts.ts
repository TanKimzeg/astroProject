// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh"
export const SITE_TAB = "Dalekov";
export const SITE_TITLE = "Dalekov's Blog";
export const SITE_DESCRIPTION = "Dalekov's Blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Tan Kimzeg";
export const USER_SITE = "https://www.tankimzeg.top"; // At the same time, this is also the site retrieved by the i18n configuration.
export const USER_AVATAR = "/myProfile.jpg";

// Server and transition settings
export const SERVER_URL = "https://waline.tankimzeg.top";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Projects",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "archive",
    text: "Archive",
    href: "/archive",
    svg: "material-symbols:archive-outline-rounded",
    target: "_self",
  }, // Archive page
  {
    id: "friend",
    text: "Friends",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  // {
  //   id: "contact",
  //   text: "Contact",
  //   href: "mailto:contact.evesunmaple@outlook.com", // Contact email
  //   target: "_blank", // Open in a new tab
  //   svg: "material-symbols:attach-email-outline-rounded",
  // },
];

// Social media and contact icons
export const socialIcons = [
  // {
  //   href: "https://afdian.net/a/saroprock",
  //   ariaLabel: "Support my work",
  //   title: "Support my work",
  //   svg: "ri:cup-line",
  // },
  {
    href: "https://github.com/TanKimzeg",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://www.zhihu.com/people/dalekov",
    ariaLabel: "Zhihu",
    title: "Zhihu",
    svg: "ri:zhihu-line",
  },
  {
    href: "https://space.bilibili.com/3493121543375815",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
  // {
  //   href: "https://x.com/kimzegtan",
  //   ariaLabel: "X",
  //   title: "X",
  //   svg: "ri:twitter-x-line",
  // },
  // {
  //   href: "/rss.xml",
  //   ariaLabel: "RSS Feed",
  //   title: "RSS Feed",
  //   svg: "ri:rss-line",
  // },
];
