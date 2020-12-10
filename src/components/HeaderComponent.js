import React from 'react';
import { Link } from "gatsby";
// import PropTypes from "prop-types";
import styles from "./Header.module.css";
import SocialIcons from './SocialIcons'

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
      <hr />
  </header>
  <SocialIcons />
  </>
  )
}


// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default HeaderComponent
