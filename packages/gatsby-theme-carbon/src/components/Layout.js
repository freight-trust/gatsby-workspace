/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect } from "react";

import LeftNav from "@fr8/gatsby-workspace/src/components/LeftNav";
import Meta from "@fr8/gatsby-workspace/src/components/Meta";
import Header from "@fr8/gatsby-workspace/src/components/Header";
import Switcher from "@fr8/gatsby-workspace/src/components/Switcher";
import Footer from "@fr8/gatsby-workspace/src/components/Footer";
import Container from "@fr8/gatsby-workspace/src/components/Container";

import "@fr8/gatsby-workspace/src/styles/index.scss";

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
  customNavItems,
  noResourceLinks,
}) => {
  const is404 = children.key === null;

  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    const scroll = require("smooth-scroll")('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: "easeInOutCubic",
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  return (
    <>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <Header />
      <Switcher />

      {!homepage && (
        <LeftNav
          homepage={homepage}
          is404Page={is404}
          theme="dark"
          isCustomNav={!!customNavItems}
          customNavItems={customNavItems}
          noResourceLinks={noResourceLinks}
        />
      )}

      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer homepage={homepage} />
      </Container>
    </>
  );
};

export default Layout;
