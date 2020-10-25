import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
    <div className={styles.footer}>
      <div className={styles.link}><a id="LinkedIn" aria-label="linkedIn link" href="https://www.linkedin.com/in/kristine-d-lee">LinkedIn</a></div>
      <div className={styles.link}><a id="Github" aria-label="GitHub link" href="https://www.github.com/kristine-lee">Github</a></div>
      <div className={styles.link}><a id="contactMe" aria-label="Email Me" href="mailto:kristinesollee@gmail.com">Contact Me</a></div>
      {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </div>
    </footer>
  )
}

export default Footer
