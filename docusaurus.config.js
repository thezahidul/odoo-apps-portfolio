// docusaurus.config.js
module.exports = {
    title: 'Zahidul Islam - Odoo Modules',
    tagline: 'User Manuals and Technical Documentation',
    url: 'https://your-username.github.io',
    baseUrl: '/your-repo-name/',
    organizationName: 'your-username',
    projectName: 'your-repo-name',
    deploymentBranch: 'gh-pages',
    settings: {
        // ... other standard configs
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/', // Makes docs the root of the site
                },
                blog: false, // Disable blog if not needed
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};

// sidebars.js
module.exports = {
    tutorialSidebar: [
        'index',
        {
            type: 'category',
            label: 'ওডু মডিউল ম্যানুয়াল',
            items: [
                'modules/gratuity',
                // Future modules like kpi, festival bonus will go here
            ],
        },
    ],
};