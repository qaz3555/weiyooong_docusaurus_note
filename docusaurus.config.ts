import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Weiyooong\'s Notes',
  tagline: 'Notes and blogs',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://notes.weiyooong.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qaz3555', // Usually your GitHub org/user name.
  projectName: 'weiyooong_docusaurus_note', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/qaz3555/weiyooong_docusaurus_note/edit/develop/',
        },
        blog: {
          blogTitle: 'Blogs',
          blogDescription: 'Fragmented thoughts and occasional writing.',
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/qaz3555/weiyooong_docusaurus_note/edit/develop/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-PB47NHWXCQ',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        min: 640,
        max: 1600,
        steps: 4,
      },
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Weiyooong',
      logo: {
        alt: 'Weiyooong',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'left',
          label: 'Notes',
        },
        {to: '/blog', label: 'Blogs', position: 'left'},
        {
          href: 'https://github.com/qaz3555',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Notes',
              to: '/docs/intro',
            },
            {
              label: 'Blogs',
              to: '/blog',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Weiyooong',
              href: 'https://github.com/qaz3555',
            },
            {
              label: 'Project',
              href: 'https://github.com/qaz3555/weiyooong_docusaurus_note',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Weiyooong.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
