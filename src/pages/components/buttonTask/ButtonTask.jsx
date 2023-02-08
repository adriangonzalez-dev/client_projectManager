import React from 'react'
import styles from './animate.module.css'

export const ButtonTask = ({callback, icon, iconTitle, backgroundColor}) => {
  return (
    <button 
    className={styles.button} 
    style={{backgroundColor:backgroundColor}}
    onClick={callback} >
      <span>
        <i className={icon}>{iconTitle}</i>
      </span>
    </button>
  );
}