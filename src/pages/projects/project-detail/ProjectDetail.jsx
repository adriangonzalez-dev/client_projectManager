
import {  AnimateButton, Collaborator, Modal, Task } from "../../components";
import styles from './detail.module.css'
import { useNavigate, useParams } from "react-router-dom";
import useProjects from "../../../hooks/useProject";
import { useEffect, useState } from "react";
import { Spinner } from "../../../components";
import Swal from "sweetalert2";

export const ProjectDetail = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {getProjectById, project, isLoadingId, addCollab,reload} = useProjects();
  const [show, setShow] = useState(false)

  const setOpen = () => {
    setShow(true);
  }

  const setClose = () => {
    setShow(false)
  }

  useEffect (()=>{
    getProjectById(id)
  },[id, reload])

  const addCollaborator = async () => {
    const { value: email } = await Swal.fire({
      title: 'Ingrese el email',
      input: 'email',
      inputLabel: 'Ingrese el email del colaborador',
      inputPlaceholder: 'Email',
    })
    
    if (email) {
      addCollab(id, email);
    }
  }

  const editProject = () => {
    navigate(`/projects/edit-project/${project._id}`)
  }

  if(isLoadingId){
    return <Spinner message='Cargando...' size='100'/>
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{project.name}</h1>
      <hr />
      {show && <Modal setClose={setClose}/>}
      <div className={styles.taskheader}>
          <p>Tareas del proyecto</p>
          <p>Fecha Limite: {(project.dateExpire.split('T')[0])}</p>
        <div>
          <div>
            <AnimateButton
            backgroundColor="#04AA6D"
            icon="material-symbols-outlined"
            iconTitle="edit"
            title="Editar proyecto "
            callback={editProject}
            />
          </div>
          <div>
            <AnimateButton
            backgroundColor="#2196F3"
            icon="material-symbols-outlined"
            iconTitle="add"
            title="Nueva Tarea "
            callback={setOpen}
            />
          </div>
        </div>
      </div>
      <div className={styles.taskContainer}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
      <hr />
      <div className={styles.collaboratorHeader}>
        <p>Colaboradores</p>
        <AnimateButton
          iconTitle="person_add"
          backgroundColor="#ff9800"
          title="Agregar colaborador "
          icon="material-symbols-outlined"
          callback={addCollaborator}
        />
      </div>
      <div className={styles.collaboratorContainer}>
        {
          project.collaborators.map((collaborator)=>
            <Collaborator
            name={collaborator.name}
            email={collaborator.email}
            idUser={collaborator._id}
            key={collaborator._id}/>
          )
        }
      </div>
    </div>
  );
  };
