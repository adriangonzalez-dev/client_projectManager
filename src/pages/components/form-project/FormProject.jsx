import React, { useState } from "react";
import styles from './form.module.css'
import { Input } from "../inputs/Input";
import { Button } from "../button/Button";
import { Textarea } from "../textarea/Textarea";
import { InputDate } from "../input-date/InputDate";
import { ImageCheckbox } from "../imageCheckbox/ImageCheckbox";
import { useForm } from "../../../hooks";
import useProjects from "../../../hooks/useProject";
import { useParams } from "react-router-dom";

const icons = ['project1', 'project2', 'project3', 'project4',]
export const FormProject = ({project='', action=''}) => {

  const {id} = useParams()
  const {createProject, updateProject, createLoading} = useProjects()

/*   if(project){
    const date = new Date(project.dateExpire); 
    const date2 = date.toLocaleDateString().split('/').reverse().join('-')
  } */

  const {formValues, handleInputChange} = useForm({
    name: project ? project.name : '',
    description: project ? project.description : '',
    client: project ? project.client : '',
    dateExpire:  project ? project.dateExpire.split('T')[0] : ''
  });

  const {name, description, client, dateExpire} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    switch(action){
      case 'create':
        createProject(formValues);
        break;
      case 'update':
        await updateProject(formValues, id);
        break;
      default:
        return
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
    className={styles.form}
    >
      <Input 
      hFor='name' 
      id='name' 
      type='text' 
      labelName='Nombre del Proyecto'
      name='name'
      value={name}
      setInput={handleInputChange}
      />
      <Textarea 
      hFor='description'
      id='description'
      name='description'
      labelName='Descripción'
      value={description}
      setInput={handleInputChange}
      />
      <InputDate 
      name='dateExpire' 
      labelName='Fecha de entrega'
      id='date-expire'
      hFor='date-expire'
      value={dateExpire}
      setInput={handleInputChange}
      />

      <Input
      hFor='client'
      id='client'
      type='text'
      labelName='Nombre del Cliente'
      name='client'
      value={client}
      setInput={handleInputChange}
      />
      {/* <p>Seleccione un icono</p>
      <div className={styles.iconSelect}>
        {
          icons.map((iconName, index)=>{
            return <ImageCheckbox
             name='icon'
             image={iconName}
             key={iconName}
             setInput={handleInputChange}
             hFor={iconName}
             id={iconName}/>
          })
          
        }
      </div> */}
      <Button title='Guardar' type='submit' />
    </form>
  );
};
