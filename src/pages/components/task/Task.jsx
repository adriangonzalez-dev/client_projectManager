import React, { useState } from "react";
import styles from './task.module.css';
import Swal from "sweetalert2";
import { ButtonTask } from "../buttonTask/ButtonTask";
import styled from "styled-components";
import { deleteMessage } from "../alerts/Alerts";
import useProjects from "../../../hooks/useProject";

export const Task = ({task, setOpen}) => {

  const {deleteTask, changeState} = useProjects()

  const styleTask = task.state ? '#04AA6D' : '#ff9800'

  const openDescription = () => {
    Swal.fire(task.description)
  }

  const destroyTask = () => {
    deleteTask(task._id)
  }

  const changeStateTask = () => {
    changeState(task._id)
  }
 
  return (
    <div className={styles.task}>
      <div className={styles.taskdiv1}>
        <p>{task.name}</p>
        <button onClick={openDescription}>descripción</button>
        <p>{task.dateExpire.split('T')[0]}</p>
        <p>{task.priority}</p>
        <p className={styles.state} style={{color: styleTask}}>
          <i className="material-symbols-outlined">
          {task.state ? 'done' : 'timelapse'}
          </i> {task.state ? 'Completado' : 'Pendiente'} 
        </p>
        </div>

      <div className={styles.taskdiv2}>
        <ButtonTask 
        backgroundColor="#04AA6D"
        icon="material-symbols-outlined"
        iconTitle="edit"
        callback={setOpen}
        />
        <ButtonTask 
        backgroundColor="#2196F3"
        icon="material-symbols-outlined"
        iconTitle="done"
        callback={changeStateTask}
        />
        <ButtonTask 
        backgroundColor="#f4511e"
        icon="material-symbols-outlined"
        iconTitle="delete"
        callback={()=> deleteMessage(destroyTask, 'Eliminar tarea?')}/>
      </div>
    </div>
  );
};
