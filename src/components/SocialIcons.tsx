import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { UilLinkedin, UilGithub, UilEnvelope } from '@iconscout/react-unicons';
import styles from './SocialIcons.module.css'
import sr, { scrollOption } from '../utils/sr';

const SocialIcons: React.FC<{}> = () => {

  const sideIconRef = React.useRef(null);

  React.useEffect(() => {
    sr.reveal(sideIconRef.current, scrollOption());
  }, []);
  return (
    <div className={styles.socialIcons} ref={sideIconRef}>
      <a href="https://linkedin.com/in/kristine-d-lee" aria-label="linkedin"><UilLinkedin /></a>
      <a href="https://github.com/kristine-lee" aria-label="github"><UilGithub /></a>
      <a href="mailto:kristinesollee@gmail.com" aria-label="email"><UilEnvelope /></a>
     </div>
  )
}

export default SocialIcons;
