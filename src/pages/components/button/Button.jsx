import React from 'react'
import styles from './button.module.css'

export const Button = ({type, title, disabledButton, callback}) => {
  return (
    <button 
    className={styles.btn}
    type={type}
    onClick={callback}>{title}</button>
  )
}
