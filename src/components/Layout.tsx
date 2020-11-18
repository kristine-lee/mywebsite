import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import HeaderComponent from './HeaderComponent';
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
      <HeaderComponent siteTitle={data.site.siteMetadata.title} />
      <div className="waveDivider">
      <main>{children}</main>
</div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.7" d="M0,256L26.7,224C53.3,192,107,128,160,128C213.3,128,267,192,320,192C373.3,192,427,128,480,122.7C533.3,117,587,171,640,181.3C693.3,192,747,160,800,160C853.3,160,907,192,960,176C1013.3,160,1067,96,1120,106.7C1173.3,117,1227,203,1280,218.7C1333.3,235,1387,181,1413,154.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg> */}
      <Footer />
    </div>
    </>
  )

}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
