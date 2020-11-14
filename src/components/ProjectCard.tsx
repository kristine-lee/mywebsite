import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from './ProjectCard.module.css';

type CardProps = {
  // projectTitle: string,
  // projectDescription: string,
  imageUrl: string;
  alt: string
}


const ProjectCard: React.FC<CardProps> = props => {

  const { imageUrl, alt } = props

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardInside}>
        <div className={styles.cardFront}>
          <Img fluid={imageUrl} alt={alt} objectFit="cover"/>
          {/* <img src={imageUrl} /> */}
        </div>
        <div className={styles.cardBack}>
          {/* <h2>{ projectTitle }</h2>
          <p>{ projectDescription }</p> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

