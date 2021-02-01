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
        <p><span>I taught myself HTML and CSS for custom MySpace layouts (anyone remember those?) and realized that I really liked coding. </span></p>
        <p><span>Originally from the South, I now live in NYC. I don't have a regional accent (I think!), but I can make preeeetty good collard greens. </span></p>
        <p><span>In my free time, I enjoy hiking, volunteering, going to used bookstores, and hanging out with my foster cat.</span></p>
      </div>
    </div>
  )
}

export default FrontPage
