import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from './ProjectCard.module.css';

type CardProps = {
  projectTitle: string,
  projectDescription: string,
  imageUrl: string
}

const CardImage = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
      return <Img fluid={image.node.fluid} />
    }}
  />
)

const ProjectCard: React.FC<CardProps> =({ projectTitle, projectDescription, imageUrl }) => {


  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardInside}>
        <div className={styles.cardFront}>
          <CardImage imgName={imageUrl} />
        </div>
        <div className={styles.cardBack}>
          <h2>{ projectTitle }</h2>
          <p>{ projectDescription }</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
