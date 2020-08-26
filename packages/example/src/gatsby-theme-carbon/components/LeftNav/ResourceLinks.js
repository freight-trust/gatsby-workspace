import React from 'react';
import ResourceLinks from '@fr8/gatsby-workspace/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/freight-trust/gatsby-workspace',
  },
  {
    title: 'Carbon',
    href: 'https://www.carbondesignsystem.com',
  },
  {
    title: 'Configuration guide',
    href: '/guides/configuration',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
