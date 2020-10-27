import React from 'react'
import styles from './Button.module.css'
import { Link } from 'gatsby'

const Button = () => (
  <button className={styles.button}>
    <Link to='/projects'>Check Out My Projects!</Link>
  </button>
)

export default Button

//TODO: clicking the button doesn't take you to a second page for projects, but opens the project page so the website remains one-page.
