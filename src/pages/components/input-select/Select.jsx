import React from 'react'
import styles from './select.module.css'

export const Select = ({name, setInput}) => {
  return (
    <div className={styles.selectContainer}>
        <select name={name} className={styles.selectBox} onChange={setInput}>
            <option value="" selected hidden>Elige la proridad</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
        <div className={styles.iconContainer}>
            <i className='fa-solid fa-caret-down'></i>
        </div>
    </div>
  )
}
