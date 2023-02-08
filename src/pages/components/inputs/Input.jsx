import React from 'react'
import styles from './input.module.css'

export const Input = ({id, type, hFor, labelName, name, value, setInput}) => {
  return (
    <div className={styles.input_field}>
        <input id={id} type={type} name={name} className={styles.input} value={value} onChange={setInput} required/>
        <label htmlFor={hFor}>{labelName}</label>
    </div>
  )
}

