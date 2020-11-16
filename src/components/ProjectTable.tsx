import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styles from './ProjectTable.module.css';
import ProjectCard from './ProjectCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const ProjectTable: React.FC<{}> = props => {


  const data = useStaticQuery(graphql`
  query {
    djparty: file(relativePath: { eq: "projects/djparty.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 300, fit: COVER) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
    mtaforeveryone: file(relativePath: { eq: "projects/mtaforeveryone.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 300, fit: COVER) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
   zapdos: file(relativePath: { eq: "projects/zapdos.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 300, fit: COVER) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`)

  return (
    // <div className={styles.container}>
      <div className={styles.flexGridContainer}>
        <div className={styles.col}>
          <ProjectCard imageUrl={data.djparty.childImageSharp.fluid} alt={"djparty"} />
         </div>
         <div className={styles.col}>
          <ProjectCard imageUrl={data.mtaforeveryone.childImageSharp.fluid} alt={"mtaforeveryone"} />
          </div>
          <div className={styles.col}>
          <ProjectCard imageUrl={data.zapdos.childImageSharp.fluid} alt={"zapdos shoes"} />
        </div>
    </div>
  )
}

export default ProjectTable
