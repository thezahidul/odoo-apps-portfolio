import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug', 'f79'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug/config', 'e38'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug/content', 'f83'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug/globalData', 'e93'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug/metadata', 'ee6'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug/registry', '4f1'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/odoo-apps-portfolio/__docusaurus/debug/routes', '016'),
    exact: true
  },
  {
    path: '/odoo-apps-portfolio/docs',
    component: ComponentCreator('/odoo-apps-portfolio/docs', '892'),
    routes: [
      {
        path: '/odoo-apps-portfolio/docs',
        component: ComponentCreator('/odoo-apps-portfolio/docs', '2b8'),
        routes: [
          {
            path: '/odoo-apps-portfolio/docs',
            component: ComponentCreator('/odoo-apps-portfolio/docs', 'bc2'),
            routes: [
              {
                path: '/odoo-apps-portfolio/docs/',
                component: ComponentCreator('/odoo-apps-portfolio/docs/', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/odoo-apps-portfolio/docs/disciplinary-actions',
                component: ComponentCreator('/odoo-apps-portfolio/docs/disciplinary-actions', '958'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/odoo-apps-portfolio/docs/gratuity-fund',
                component: ComponentCreator('/odoo-apps-portfolio/docs/gratuity-fund', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/odoo-apps-portfolio/',
    component: ComponentCreator('/odoo-apps-portfolio/', '933'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
