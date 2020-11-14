/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Header from "./header"
import Footer from './Footer'
import "./layout.css"

// declare interface LayoutProps {
//   children: React.ReactNode,
//   style: React.CSSProperties,
//   onChange: React.FormEventHandler<HTMLInputElement>
// }



//TODO: https://csslayout.io/patterns/sidebar change the theme to a sidebar

// const Background = styled.div`
//   background-image: url('../public/static/wavesNegative.svg');
//   background-size: cover;
// `


const Layout = ({ children }) => {
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
    {/* <Background> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* </Background> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
          <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
