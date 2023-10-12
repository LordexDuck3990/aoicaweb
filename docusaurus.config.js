// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AoiCanvas',
  tagline: 'Aoi.canvas docs',
  favicon: 'img/favicon.ico',

  url: 'https://aoicanvas.vercel.app',
  baseUrl: '/',
  organizationName: 'lordex',
  projectName: 'aoicanvas',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      /*announcementBar: {
        id: "support_us",
        content:
          '',
        backgroundColor: "#1976d2",
        textColor: "#ffffff",
        isCloseable: false,
      }, */

      // Replace with your project's social card
      image: 'img/banner.png',
      navbar: {
        title: 'Aoi.Canvas',
        logo: {
          alt: "aoi.canvas logo",
          src: "img/logo.png",
          width: 33,
          height: 35,
        },
        items: [
          {
            to: "docs/",
            label: "Documentation",
            position: "left",
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://npmjs.com/package/aoi.canvas',
            label: 'NPM',
            position: 'right',
          },
          {
            href: 'https://github.com/lordexduck3990/aoi.canvas',
            label: 'GIT',
            position: 'right',
          }
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
