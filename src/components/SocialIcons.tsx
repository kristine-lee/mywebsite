import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { UilLinkedin, UilGithub } from '@iconscout/react-unicons';

// const SocialIcons: React.FC<{}> = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       socialLinks: file(relativePath: "")
//     }
//   `)
// }

const SocialIcons: React.FC<{}> = () => {
  return (
    <>
    <a href="https://linkedin.com/in/kristine-d-lee" aria-label="linkedin"><UilLinkedin /></a>
    <a href="https://github.com/kristine-lee" aria-label="github"><UilGithub /></a>
    </>
  )
}

export default SocialIcons;
