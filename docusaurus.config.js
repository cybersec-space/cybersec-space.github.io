// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyberSec Space',
  tagline: 'Exploring Security, Code & Ethical Hacking and other Information Technology(IT) domains.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cybersec-space.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cybersec-space', // Usually your GitHub org/user name.
  projectName: 'cybersec-space.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/cybersec-space/cybersec-space.github.io/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/cybersec-space/cybersec-space.github.io/tree/main/blog',
        },

        
        theme: {
          customCss: './src/css/custom.css',
        },

        googleTagManager: {
          containerId: 'GTM-TTBS5KSG',
        },

      }),
    ],
  ],

   plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'projects',                // must be unique
        path: 'projects',              // folder holding your .md files
        routeBasePath: 'projects',     // mounts listing at /projects
        blogTitle: 'Projects',
        blogDescription: 'All of our projects',
        postsPerPage: 10,              // adjust pagination
        blogSidebarCount: 'ALL',       // show all posts in sidebar
        blogSidebarTitle: 'All Projects',
        feedOptions: {
          type: 'all',                 // generate RSS/Atom/JSON feeds
          title: 'Projects Feed',
          description: 'Updates on our projects',
        },
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'cybersec space',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog', 
            position: 'left',
            label: 'Blogs', 
          },
          {
            to: '/projects',  
            label: 'Projects',
            position: 'left',
            activeBasePath: 'project',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'python', 'java'], 
      },
    }),

  };

export default config;
