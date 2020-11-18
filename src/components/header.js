import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.css"


const Header = ({ siteTitle }) => (
  <header className={styles.header} >
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
