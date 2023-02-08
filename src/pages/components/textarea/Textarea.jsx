import React from 'react'
import styles from './textarea.module.css'

export const Textarea = ({id, hFor, labelName, name, value, setInput}) => {
  return (
    <div className={styles.input_field}>
        <textarea id={id} name={name} className={styles.input} onChange={setInput} value={value} required >{value}</textarea>
        <label htmlFor={hFor}>{labelName}</label>
    </div>
  )
}

