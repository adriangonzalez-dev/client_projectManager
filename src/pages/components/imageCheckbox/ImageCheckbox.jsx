import React from 'react'
import styles from './checkbox.module.css'

export const ImageCheckbox = ({name, id, value ,checked, hFor, image}) => {
  return (
    <div className={styles.checkbox}>
        <input type="radio" name={name} id={id}  value={value} checked={checked}/>
        <label htmlFor={hFor}><img src={`/icons/${image}.png`}/></label>
    </div>
  )
}
