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
    component: ComponentCreator('/odoo-apps-portfolio/docs', '011'),
    routes: [
      {
        path: '/odoo-apps-portfolio/docs',
        component: ComponentCreator('/odoo-apps-portfolio/docs', 'd85'),
        routes: [
          {
            path: '/odoo-apps-portfolio/docs',
            component: ComponentCreator('/odoo-apps-portfolio/docs', 'edd'),
            routes: [
              {
                path: '/odoo-apps-portfolio/docs/',
                component: ComponentCreator('/odoo-apps-portfolio/docs/', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/odoo-apps-portfolio/docs/modules/gratuity',
                component: ComponentCreator('/odoo-apps-portfolio/docs/modules/gratuity', '74b'),
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
