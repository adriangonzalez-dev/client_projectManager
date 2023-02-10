import React, { useEffect } from 'react'
import styles from './modal.module.css'
import { Input } from '../inputs/Input';
import { Textarea } from '../textarea/Textarea';
import { InputDate } from '../input-date/InputDate';
import { Select } from '../input-select/Select';
import { Button } from '../button/Button';
import { useForm } from '../../../hooks';
import useProjects from '../../../hooks/useProject';
import { useParams } from 'react-router-dom';
import { AnimateButton } from '../animateButton/AnimateButton';

export const Modal = ({setClose, idTask}) => {

  const {id} = useParams()

  const {createTask, getTaskById, loadingTask, task} = useProjects()
  const {formValues, handleInputChange, setFormValues} = useForm({
    name: '',
    description: '',
    dateExpire: '',
    priority: '',
  });

  const {name, description, dateExpire, priority} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask({
      ...formValues,
      idProject: id
    })
    setClose()
  }

  return (
    <div className={styles.modal} >
      {/* <FormTask setClose={setClose} task={task}/> */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          hFor="name"
          id="name"
          type="text"
          labelName="Nombre de la tarea"
          name="name"
          value={name}
          setInput={handleInputChange}
        />
        <Textarea
          hFor="description"
          id="description"
          name="description"
          labelName="Descripción"
          value={description}
          setInput={handleInputChange}
        />
        <InputDate
          name="dateExpire"
          labelName="Fecha de entrega"
          id="date-expire"
          hFor="date-expire"
          value={dateExpire}
          setInput={handleInputChange}
        />

        <Select name="priority" setInput={handleInputChange} />

        <Button title="Guardar" type="submit" />
      </form>
      <AnimateButton 
      callback={setClose} 
      backgroundColor='var(--lightColor1)'
      title='Cancelar'/>
      <button onClick={setClose}>Cerrar</button>
    </div>
  );
}
