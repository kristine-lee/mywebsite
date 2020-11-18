import React from 'react';
import Img from "gatsby-image";
import styles from './ProjectCard.module.css';

type CardProps = {
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
            This is a project that I've developed. Details coming!
            Please take a look at my <a href="https://github.com/kristine-lee">Github</a> for the code!
          </div>
    </div>
  )
}

export default ProjectCard

