import React from 'react';
import { HomepageBanner, HomepageCallout } from '@fr8/gatsby-workspace';
import HomepageTemplate from '@fr8/gatsby-workspace/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Callout component</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the{' '}
    <a href="https://github.com/freight-trust/gatsby-workspace/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79/packages/example/src/@fr8/gatsby-workspace/templates/Homepage.js">
      pre-shadowed homepage template
    </a>
    . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
    <a
      className={calloutLink}
      href="https://github.com/freight-trust/gatsby-workspace/blob/main/packages/example/src/@fr8/gatsby-workspace/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/freight-trust/gatsby-workspace/blob/main/packages/example/src/@fr8/gatsby-workspace/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>Carbon Gatsby theme</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
