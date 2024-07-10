// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Form Wizard Component",
  tagline: "A React component for building multi-step forms",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://react-form-wizard-component-document.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "React Form Wizard Component",
        logo: {
          alt: "React For Wizard Component Logo",
          src: "img/react-form-wizard-icon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/parsajiravand/react-form-wizard",
            label: "GitHub",
            position: "right",
          },
          {
            label: "Other Packages",
            position: "right",

            items: [
              {
                label: "Vue3 Form Wizard",
                href: "https://github.com/parsajiravand/vue3-form-wizard",
              },
              {
                label: "Vue Client Recaptcha",
                href: "https://github.com/parsajiravand/vue-client-recaptcha",
              },
              {
                label: "Helping Js",
                href: "https://github.com/parsajiravand/helping-js",
              },
              {
                label: "Simple Form Data",
                href: "https://github.com/parsajiravand/simple-form-data",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Props",
                to: "/docs/props",
              },
              {
                label: "Event",
                to: "/docs/event",
              },
              {
                label: "Demos",
                to: "/docs/category/demos",
              },
              {
                label: "Playground",
                to: "/docs/playground",
              },
            ],
          },
          {
            title: "Other Packages",
            items: [
              {
                label: "Vue3 Form Wizard",
                href: "https://github.com/parsajiravand/vue3-form-wizard",
              },
              {
                label: "Vue Client Recaptcha",
                href: "https://github.com/parsajiravand/vue-client-recaptcha",
              },
              {
                label: "Helping Js",
                href: "https://github.com/parsajiravand/helping-js",
              },
              {
                label: "Simple Form Data",
                href: "https://github.com/parsajiravand/simple-form-data",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/parsajiravand/react-form-wizard",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Parsa Jiravand.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
