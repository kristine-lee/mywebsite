import React from 'react';
import { Link } from "gatsby";
// import PropTypes from "prop-types";
import styles from "./Header.module.css";

const HeaderComponent = ({ siteTitle }) => {
  return (
    <>
      <header className={styles.header}>
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: '#020826'
          }}
        >
        Hi, I'm  {siteTitle}
        </Link>
      </h1>
      <Link to="#projects">Projects</Link>
      <hr />
  </header>
  </>
  )
}
//TODO: https://www.wcj.io/blog/gatsby-smooth-scrolling//

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default HeaderComponent
