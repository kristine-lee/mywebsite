//container for the text on the front page
import React from 'react';
import styles from './FrontText.module.css';

// type FrontTextProps = {
//   children: React.ReactNode;
//   content: string
// }

const FrontTextContainer: React.FC<{}> = props => {
  // const { children, content } = props;

  return (
    <div className={styles.frontText}>
      <div class="pattern-dots-md gray text-pattern max-w-20pc overflow-visible" />
      <h2>Hi, I'm Kristine Lee<br />A Full Stack Developer Interested In Figuring Out What Makes People Tick</h2>
    </div>
  )
}

export default FrontTextContainer
