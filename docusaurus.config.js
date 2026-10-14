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
};