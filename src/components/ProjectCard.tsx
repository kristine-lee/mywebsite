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

//TODO: dynamically render project details.
//might be tough bc Gatsby only allows one useStaticQuery per page, meaning I can't make a separate query call in the parent component (ProjectTable) just for the data
//might need to: hardcode information needed to make query calls in the parent component, then make a query call for the data using the passed down props from this component
//Might also be p easy bc I'm only looking to render the project name and maybe a short description right now. They can be easily hardcoded if it comes to that.
