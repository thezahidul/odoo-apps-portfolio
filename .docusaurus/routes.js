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
    path: '/odoo-apps-portfolio/',
    component: ComponentCreator('/odoo-apps-portfolio/', 'de0'),
    routes: [
      {
        path: '/odoo-apps-portfolio/',
        component: ComponentCreator('/odoo-apps-portfolio/', '62c'),
        routes: [
          {
            path: '/odoo-apps-portfolio/',
            component: ComponentCreator('/odoo-apps-portfolio/', '9e1'),
            routes: [
              {
                path: '/odoo-apps-portfolio/modules/gratuity',
                component: ComponentCreator('/odoo-apps-portfolio/modules/gratuity', 'a57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/odoo-apps-portfolio/',
                component: ComponentCreator('/odoo-apps-portfolio/', '915'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
