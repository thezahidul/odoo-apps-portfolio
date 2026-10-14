module.exports = {
    title: 'Zahidul Islam - Odoo Modules',
    tagline: 'User Manuals and Technical Documentation',
    url: 'https://thezahidul.github.io',
    baseUrl: '/odoo-apps-portfolio/',
    organizationName: 'thezahidul',
    projectName: 'odoo-apps-portfolio',
    deploymentBranch: 'gh-pages',

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Zahidul Islam - Odoo Modules',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    href: 'https://github.com/thezahidul/odoo-apps-portfolio',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Zahidul Islam. Built with Docusaurus.`,
        },
    },
};