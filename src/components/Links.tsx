import React from 'react'
import styles from './Links.module.css'

const Links = () => {
  return (
    <>
    <a className={styles.a} id="LinkedIn" aria-label="linkedIn link" href="https://www.linkedin.com/in/kristine-d-lee">LinkedIn</a>
    <br />    <br />
    <a className={styles.a} id="Github" aria-label="Github link" href="https://www.github.com/kristine-lee">Github</a>
    </>
  )

}

export default Links
