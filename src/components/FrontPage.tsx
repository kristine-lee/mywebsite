import React from 'react';
import styles from './FrontPage.module.css';
import FrontText from './FrontText'
import Image from './image'


const FrontPage: React.FC<{}> = () => {
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
        <p><span>A former nonprofit fundraiser, I decided to take the plunge into software engineering after realizing that I wanted to do something with more problem solving. </span></p>
        <p><span>Originally from the South, I now live in NYC. I don't have a regional accent (I think!), but I can make preeeetty good collard greens. </span></p>
        <p><span>In my free time, I enjoy hiking, volunteering, going to used bookstores, and hanging out with my foster cat.</span></p>
        <p><span>Click the arrow to see my projects!</span></p>
      </div>
    </div>
  )
}

export default FrontPage
