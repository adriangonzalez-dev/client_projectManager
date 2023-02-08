import React from 'react'
import styles from './modal.module.css'
import { FormTask } from '../form-task/FormTask';
export const Modal = ({setClose}) => {
  return (
    <div className={styles.modal}>
        <button onClick={setClose}>Cerrar</button>
        <FormTask/>
    </div>
  );
}
