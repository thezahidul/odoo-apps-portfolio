import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
