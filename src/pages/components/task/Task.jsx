import React, { useState } from "react";
import styles from './task.module.css';
import Swal from "sweetalert2";
import { ButtonTask } from "../buttonTask/ButtonTask";
import styled from "styled-components";
import { deleteMessage } from "../alerts/Alerts";

const State = styled.p`
    display: flex;
    gap: 5px;
    color: '#04AA6D' //'#ff9800'
  `

export const Task = () => {

  const [state, setState] = useState(false)


  const changeState = () => {
    setState(!state)
  }
  
  const openDescription = () => {
    Swal.fire('lorem ipsum asdaslknlak alkslkasj añlsfjaslkf jasjklf ')
  }
  return (
    <div className={styles.task}>
      <div className={styles.taskdiv1}>
        <p>Nombre de la tarea</p>
        <button onClick={openDescription}>Descripcion</button>
        <p>Fecha de entrega</p>
        <p>Prioridad</p>
        <State className={styles.state}>
          <i className="material-symbols-outlined">
          {state ? 'done' : 'timelapse'}
          </i> {state ? 'Completado' : 'Pendiente'} 
        </State>
        </div>

      <div className={styles.taskdiv2}>
        <ButtonTask 
        backgroundColor="#04AA6D"
        icon="material-symbols-outlined"
        iconTitle="edit"/>
        <ButtonTask 
        backgroundColor="#2196F3"
        icon="material-symbols-outlined"
        iconTitle="done"
        callback={changeState}/>
        <ButtonTask 
        backgroundColor="#f4511e"
        icon="material-symbols-outlined"
        iconTitle="delete"
        callback={()=> deleteMessage(undefined, 'Eliminar tarea?')}/>
      </div>
    </div>
  );
};
