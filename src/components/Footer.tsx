import React from 'react';
import styles from './Footer.module.css';
import { socialdata } from '../data/social';
// import styled from 'styled-components';
import { UilLinkedin, UilGithub, UilEnvelope } from '@iconscout/react-unicons';

// const StyledFooter = styled.footer`
//   transition: all 0.2s ease-in;
//   display: flex;
//   flex-shrink: 0;
//   justify-content: space-between;
//   background-color: var(--lightblue);
//   position: absolute;
//   width: 100%;
//   padding: 1.45rem 1.0875rem;
// }
// @media only screen and (min-width: 768px) {
//   .footer {
//     flex-direction: row;
//   }
// `
// const StyledSocial = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   a {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: var(--black);
//     width: 5rem;
//     height: 5rem;
//     transition: all 0.2s ease-in;
//   } &:hover {
//       transform: translateY(-2px);
//   }
// `

const Footer = () => {
  return (
    <footer>
    <div className={styles.footer}>
      <ul>
        <li><a id="LinkedIn" aria-label="linkedIn link" href="https://www.linkedin.com/in/kristine-d-lee"><UilLinkedin /></a></li>
        <li><a id="Github" aria-label="GitHub link" href="https://www.github.com/kristine-lee"><UilGithub /></a></li>
        <li><a id="contactMe" aria-label="Email Me" href="mailto:kristinesollee@gmail.com"><UilEnvelope /></a></li>
      {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </ul>
      <p>Built by Kristine Lee using Gatsby. <a href="https://www.github.com/kristine-lee/mywebsite">See the source code here </a></p>
    </div>
    </footer>
  )
}

// const Footer = () => {
//   return (
//     <StyledFooter>
//       <StyledSocial>
//         <ul>
//           <li key="github"><a id="Github" aria-label="Github" href="https://www.github.com/kristine-lee"><UilGithub /></a></li>
//           <li key="linkedin"><a id="LinkedIn" aria-label="LinkedIn" href="https://www.linkedin.com/in/kristine-d-lee"><UilLinkedin /></a></li>
//           <li key="email"><a id="Email" aria-label="Email" href="mailto:kristinesollee@gmail.com"><UilEnvelope /></a></li>
//         </ul>
//       </StyledSocial>
//     </StyledFooter>
//   )
// }

export default Footer

//can't render the unicons dynamically b/c Unicons object is weird and doesn't take a string as a param?
