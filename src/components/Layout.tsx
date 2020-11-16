import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
// import { Grid, GridMain } from '../styles';
import Header from './Header';
import Footer from './Footer';

import './Layouut.css';


declare interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

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
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      <Footer />
    </div>
    </>
  )

}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
