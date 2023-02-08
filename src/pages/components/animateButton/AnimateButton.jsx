import React from 'react'
import styles from './animate.module.css'

export const AnimateButton = ({callback, icon, iconTitle, title, backgroundColor}) => {
  return (
    <button 
    className={styles.button} 
    style={{backgroundColor:backgroundColor}}
    onClick={callback} >
      <span>
        <i className={icon}>{iconTitle}</i>
        {title}
      </span>
    </button>
  );
}
