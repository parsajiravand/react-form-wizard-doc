// @ts-check
import { themes as prismThemes } from "prism-react-renderer";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

const GITHUB_REPO = "https://github.com/parsajiravand/react-form-wizard";
const NPM_URL = "https://www.npmjs.com/package/react-form-wizard-component";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Form Wizard",
  tagline:
    "Accessible multi-step forms for React 17, 18 and 19 — zero dependencies, styled or headless",
  favicon: "img/favicon.ico",

  url: "https://react-form-wizard-component-document.netlify.app",
  baseUrl: "/",

  organizationName: "parsajiravand",
  projectName: "react-form-wizard",

  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",

  future: {
    // Opt in to Docusaurus v4 behaviour early so the next major is a no-op.
    v4: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: false,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        // The docs were reorganised into Getting Started / Guides / Examples /
        // API Reference. Every previously published URL still resolves.
        redirects: [
          { from: "/docs/props", to: "/docs/api/form-wizard" },
          { from: "/docs/event", to: "/docs/api/events" },
          { from: "/docs/refrence", to: "/docs/api/methods" },
          { from: "/docs/validation", to: "/docs/guides/validation" },
          { from: "/docs/headless", to: "/docs/guides/headless" },
          { from: "/docs/theming", to: "/docs/guides/theming" },
          { from: "/docs/persistence", to: "/docs/guides/persistence" },
          { from: "/docs/accessibility", to: "/docs/guides/accessibility" },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          remarkPlugins: [
            // Renders npm/yarn/pnpm tabs for ```bash npm2yarn code blocks.
            [npm2yarn, { sync: true, converters: ["yarn", "pnpm"] }],
          ],
          editUrl: `${GITHUB_REPO}-doc/tree/main/`,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [[npm2yarn, { sync: true, converters: ["yarn", "pnpm"] }]],
          editUrl: `${GITHUB_REPO}-doc/tree/main/`,
          blogTitle: "React Form Wizard blog",
          blogDescription: "Release notes and guides for react-form-wizard-component",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Parsa Jiravand`,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/react-form-wizard-icon.png",

      metadata: [
        {
          name: "keywords",
          content:
            "react form wizard, multi-step form react, react stepper, react hook form wizard, zod multi step form, headless wizard react, nextjs multi step form",
        },
      ],

      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },

      docs: {
        sidebar: { hideable: true, autoCollapseCategories: true },
      },

      announcementBar: {
        id: "v1_2_0",
        content:
          '🎉 <b>v1.2.0</b> is out — React 17 &amp; 18 support is back, plus a headless API, Zod adapters and theming. <a href="/blog/react-form-wizard-v1-2-0">Read the release notes</a>',
        backgroundColor: "#0e6f70",
        textColor: "#ffffff",
        isCloseable: true,
      },

      navbar: {
        title: "React Form Wizard",
        logo: {
          alt: "React Form Wizard logo",
          src: "img/react-form-wizard-icon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/docs/examples/checkout", label: "Examples", position: "left" },
          { to: "/docs/api/form-wizard", label: "API", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { href: NPM_URL, label: "npm", position: "right" },
          {
            href: GITHUB_REPO,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              { label: "Introduction", to: "/docs/intro" },
              { label: "Installation", to: "/docs/getting-started/installation" },
              { label: "Your first wizard", to: "/docs/getting-started/first-wizard" },
              { label: "Frameworks", to: "/docs/getting-started/frameworks" },
              { label: "Migration", to: "/docs/migration" },
            ],
          },
          {
            title: "Guides",
            items: [
              { label: "Validation", to: "/docs/guides/validation" },
              { label: "Headless", to: "/docs/guides/headless" },
              { label: "Theming", to: "/docs/guides/theming" },
              { label: "Persistence", to: "/docs/guides/persistence" },
              { label: "Accessibility", to: "/docs/guides/accessibility" },
            ],
          },
          {
            title: "Reference",
            items: [
              { label: "FormWizard props", to: "/docs/api/form-wizard" },
              { label: "Events", to: "/docs/api/events" },
              { label: "Methods & hooks", to: "/docs/api/methods" },
              { label: "Examples", to: "/docs/examples/checkout" },
              { label: "Playground", to: "/docs/playground" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "Blog", to: "/blog" },
              { label: "GitHub", href: GITHUB_REPO },
              { label: "npm", href: NPM_URL },
              { label: "Changelog", href: `${GITHUB_REPO}/blob/master/CHANGELOG.md` },
              { label: "Report an issue", href: `${GITHUB_REPO}/issues` },
            ],
          },
          {
            title: "Other packages",
            items: [
              {
                label: "Vue3 Form Wizard",
                href: "https://github.com/parsajiravand/vue3-form-wizard",
              },
              {
                label: "Vue Client Recaptcha",
                href: "https://github.com/parsajiravand/vue-client-recaptcha",
              },
              { label: "Helping Js", href: "https://github.com/parsajiravand/helping-js" },
              {
                label: "Simple Form Data",
                href: "https://github.com/parsajiravand/simple-form-data",
              },
            ],
          },
        ],
        copyright: `MIT licensed. Copyright © ${new Date().getFullYear()} Parsa Jiravand.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

export default config;
