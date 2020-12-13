import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
import Loader from './Loader';
import SocialIcons from './SocialIcons';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

import './Layouut.css';

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

declare interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  const [isLoading, setLoading] = React.useState(false);

  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  return (
    <>
    <div className="all">
      <ThemeProvider theme={theme}>
      {isLoading ?
      <Loader /> :
      <>
        <GlobalStyle />
        <HeaderComponent siteTitle={data.site.siteMetadata.title} />
          <div className="waveDivider">
            <SocialIcons />
            <main>{children}</main>
          </div>
       </>
        }
        <Footer />
      </ThemeProvider>
    </div>
    </>
  )

}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
