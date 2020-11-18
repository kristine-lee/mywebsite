import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { UilLinkedin, UilGithub } from '@iconscout/react-unicons';
import styles from './SocialIcons.module.css'

// const SocialIcons: React.FC<{}> = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       socialLinks: file(relativePath: "")
//     }
//   `)
// }

//TODO: add social icons to the right side of the header

const SocialIcons: React.FC<{}> = () => {
  return (
    <div className={styles.socialIcons}>
    <a href="https://linkedin.com/in/kristine-d-lee" aria-label="linkedin"><UilLinkedin /></a>
    <a href="https://github.com/kristine-lee" aria-label="github"><UilGithub /></a>
    </div>
  )
}

export default SocialIcons;
