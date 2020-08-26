import React from 'react';
import { FourOhFour } from '@fr8/gatsby-workspace';

const links = [
  { href: '/components/markdown', text: 'Markdown' },
  { href: '/components/Aside', text: 'Aside' },
  { href: '/components/demo', text: 'Demo' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
