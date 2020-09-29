module.exports = {
  title: 'Build a Smart Bookmarking Tool with Rust and Rocket',
  tagline: 'Written by Joe Previte',
  url: 'https://caabernathy.github.io/rust-tutorial/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'caabernathy', // Usually your GitHub org/user name.
  projectName: 'rust-tutorial', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Learn Rust',
      logo: {
        alt: 'Learn Rust Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Tutorial',
          position: 'left',
        },
        {
          href: 'https://github.com/caabernathy/rust-tutorial',
          label: 'Sample Project',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Tutorial',
              to: 'docs/',
            },
            {
              label: 'Sample Project',
              href: 'https://github.com/caabernathy/rust-tutorial',
            },
          ],
        },
        {
          title: 'About Me',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/jsjoeio',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/jjprevite',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/jsjoeio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rust Tutorial, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
