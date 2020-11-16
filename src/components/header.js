import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.css"


const Header = ({ siteTitle }) => (
  <header className={styles.header} >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
