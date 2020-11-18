import React from 'react';
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
      <div className={styles.overlay}></div>
      <Img fluid={imageUrl} alt={alt} style={{objectFit: `cover`}} role="img" aria-label="screenshot of my project" />
          <div className={styles.text}>
            This is something that I'd developed
          </div>
    </div>
  )
}

export default ProjectCard

