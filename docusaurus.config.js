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
                    // routeBasePath লাইনটি এখান থেকে সম্পূর্ণ মুছে দিন
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
            respectPrefersColorScheme: true, // Enables system theme detection and auto switching
        },
        navbar: {
            // ekhane title faka rakha holo jate default link toiri na hoy
            title: '',
            items: [
                // Title ta ke ekhane unlinked plain text (HTML) hisebe add kora holo
                {
                    type: 'html',
                    position: 'left',
                    value: '<span style="font-weight: bold; font-size: 1.2rem; margin-right: 15px;">Zahidul Islam - Odoo Modules</span>',
                },
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
    }
};