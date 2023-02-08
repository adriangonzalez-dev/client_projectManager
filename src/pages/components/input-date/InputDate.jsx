import React from 'react'
import styles from './date.module.css'

export const InputDate = ({hFor, labelName, name, id, setInput, value}) => {
  return (
    <div className={styles.input_field}>
        <label htmlFor={hFor}>{labelName}</label>
        <input type="date" name={name} id={id} className={styles.inputDate} onChange={setInput} value={value}/>
    </div>
  )
}
