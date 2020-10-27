//container for the text on the front page
import React from 'react';
import styles from './FrontText.module.css';
import PropTypes from 'prop-types';

const FrontTextContainer = ({children}) => {
  return (
    <div className={styles.frontText}>
      {children}
    </div>
  )
}

FrontTextContainer.PropTypes = {
  children: PropTypes.string.isRequired
}

export default FrontTextContainer
