//container for the text on the front page
import React from 'react';
import styles from './FrontText.module.css';

type FrontTextProps = {
  children: React.ReactNode;
}

const FrontTextContainer: React.FC<FrontTextProps> = props => {
  const { children } = props;

  return (
    <div className={styles.frontText}>
      {children}
    </div>
  )
}

export default FrontTextContainer
