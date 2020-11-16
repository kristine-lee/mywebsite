import React from 'react';
import styles from './FrontPage.module.css';
import FrontText from './FrontText'
import Image from './image'

type FrontPageProps = {
  children: React.ReactNode
}

const FrontPage: React.FC<FrontPageProps> = () => {
  return (
    <div className={styles.frontpageContainer}>
      <div className={styles.column}>
        <FrontText />
      </div>
      <div className={styles.column}>
        <Image />
      </div>
      <div className={styles.break} />
      <div className={styles.row}>
        <p>I decided to take the plunge into software engineering after realizing that I loved problem solving. </p>
        <p>Click the Arrow for my Projects</p>
      </div>
    </div>
  )
}

export default FrontPage
