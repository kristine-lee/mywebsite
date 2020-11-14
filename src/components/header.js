import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import wavesNegative from '../public/static/wavesNegative.svg'

// const StyledHeader = styled.div`
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   background-image: linear-gradient(#ff9d2f, #ff6126)';
//   transform: skewY(-6deg);
//   transform-origin: top left;
// `;

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `pink`,
      marginBottom: `1.45rem`,
      overflow: 'visible',
    }}
  >
    {/* <StyledHeader /> */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
