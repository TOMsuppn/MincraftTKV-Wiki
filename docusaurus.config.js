// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MinecraftTKV Wiki',
  tagline: 'MinecraftTKV Beta.1-Preview3 插件文档：战局管理、AI、武器、物资箱与社交系统配置指南',
  favicon: 'img/favicon-minecrafttkv.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tomlol',
  projectName: 'MinecraftTKV-WIKI',

  onBrokenLinks: 'throw',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;900&family=Noto+Serif+SC:wght@400;500;600;700;900&family=Oswald:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap',
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          tags: 'tags.yml',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ['zh', 'en'],
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        docsRouteBasePath: ['/docs'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/gitbook/jc.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'MinecraftTKV',
          src: 'img/minecrafttkv-logo-white-vector.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: '文档',
          },
          {
            to: '/docs/changelog',
            label: '更新日志',
            position: 'left',
          },
          {
            to: '/plan',
            label: '计划',
            position: 'left',
          },
          {
            to: '/plastic',
            label: 'Plastic',
            position: 'left',
            className: 'navbar__plastic-link',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a class="navbar__icon-link github-link" data-tooltip="GitHub" href="https://github.com/TOMsuppn" target="_blank" rel="noopener noreferrer" aria-label="GitHub: TOMsuppn" title="GitHub: TOMsuppn"></a>',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a class="navbar__icon-link bilibili-link" data-tooltip="Bilibili" href="https://space.bilibili.com/454944513" target="_blank" rel="noopener noreferrer" aria-label="Bilibili: TOMsuppn" title="Bilibili: TOMsuppn"></a>',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a class="navbar__icon-link kook-link" data-tooltip="加入 KOOK 频道" href="https://kook.vip/A33qtO" target="_blank" rel="noopener noreferrer" aria-label="加入 KOOK 频道" title="加入 KOOK 频道"></a>',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a class="navbar__icon-link qq-link" data-tooltip="加入 QQ 群" href="https://qm.qq.com/q/7djmYBJiMM" target="_blank" rel="noopener noreferrer" aria-label="加入 QQ 群" title="加入 QQ 群"></a>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '首次使用',
                to: '/docs/intro',
              },
              {
                label: '更新日志',
                to: '/docs/changelog',
              },
            ],
          },
          {
            title: 'Commands',
            items: [
              {
                label: '玩家命令',
                to: '/docs/players/help',
              },
              {
                label: '管理命令',
                to: '/docs/admin-commands/ecoadmin',
              },
            ],
          },
          {
            title: 'Systems',
            items: [
              {
                label: '藏身处',
                to: '/docs/systems/hideout',
              },
              {
                label: '撤离点',
                to: '/docs/systems/extraction-points',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TOMsuppn.`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
