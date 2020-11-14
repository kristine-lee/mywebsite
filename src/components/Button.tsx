import React from 'react'
import styles from './Button.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const Button = () => (
  <button className={styles.button}>
    <AniLink swipe top="exit" to='/projects'>Check Out My Projects!</AniLink>
    {/* <Link to='/projects'>Check Out My Projects!</Link> */}
  </button>
)

export default Button

//TODO: clicking the button doesn't take you to a second page for projects, but opens the project page so the website remains one-page.
/*
.buttonOverlay {
    padding: 12px 24px;
    position: relative;
    color: hsl(243, 80%, 62%);
}

.buttonOverlay span {
    position: relative;
    z-index: 1;
}

.buttonOverlay::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 5px;
    right: 5px;
    background-color: hsl(222, 100%, 95%);
    transition: transform .2s ease-in-out;
}

.buttonOverlay::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #474E51;
    transition: transform .2s ease-in-out;
}

.buttonOverlay:hover::before {
    transform: translate(6px, -4px);
}

.buttonOverlay:hover::after {
    transform: translate(-6px, 4px);
}
 */

// .arrowBounce {
//   position: relative;
//   animation: bounce 2s infinite;
// }

// .arrowBounce svg {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   fill: hsl(243, 80%, 62%);
// }

// @keyframes bounce {
//   0%, 20%, 50%, 80%, 100% {
//       transform: translateY(0);
//   }
//   40% {
//       transform: translateY(-30px);
//   }
//   60% {
//       transform: translateY(-15px);
//   }
// }
