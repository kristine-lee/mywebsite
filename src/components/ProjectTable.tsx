import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styles from './ProjectTable.module.css';
import ProjectCard from './ProjectCard'

const ProjectTable: React.FC<{}> = props => {


  const data = useStaticQuery(graphql`
  query {
    djparty: file(relativePath: { eq: "projects/djparty.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, fit: COVER) {
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
        fluid(maxWidth: 300, fit: COVER) {
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
        fluid(maxWidth: 300, fit: COVER) {
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
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.cell}>
          <ProjectCard imageUrl={data.djparty.childImageSharp.fluid} alt={"djparty"} />
        </div>
        <div className={styles.cell}>
          <ProjectCard imageUrl={data.mtaforeveryone.childImageSharp.fluid} alt={"mtaforeveryone"} />
        </div>
        <div className={styles.cell}>
          <ProjectCard imageUrl={data.zapdos.childImageSharp.fluid} alt={"zapdos shoes"} />
        </div>
      </div>
    </div>
  )
}

export default ProjectTable
