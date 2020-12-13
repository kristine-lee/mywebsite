//container for the text on the front page
import React from 'react';
import styles from './FrontText.module.css';
import sr, { scrollOption } from '../utils/sr';

// type FrontTextProps = {
//   children: React.ReactNode;
//   content: string
// }

const FrontTextContainer: React.FC<{}> = () => {

  const frontRef = React.useRef(null);

  React.useEffect(() => {
    sr.reveal(frontRef.current, scrollOption());
  }, []);

  return (
    <div className={styles.frontText} ref={frontRef}>
      <h2>Hi, I'm Kristine Lee <br /> A <span className={styles.highlight}>Full Stack Developer</span> Interested In Figuring Out What Makes People Tick</h2>
    </div>
  )
}

export default FrontTextContainer
