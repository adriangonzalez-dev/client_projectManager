import React, { useEffect } from "react";
import { AnimateButton, FormProject } from "../../components";
import styles from './edit.module.css';
import Swal from "sweetalert2";
import useProjects from "../../../hooks/useProject";
import { useParams } from "react-router-dom";
import { Spinner } from "../../../components";

export const ProjectEdit = () => {

  const {id} = useParams()
  const {project, getProjectById, isLoadingId, deleteProject} = useProjects();

  const destroyProject = async () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Tu proyecto sera eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProject(id)
        Swal.fire(
          'Eliminado!',
          'Tu proyecto fue eliminado',
          'success'
        )
      }
    })
  }

  useEffect(()=>{
    getProjectById(id)
  },[id])

  if(isLoadingId){
    return <Spinner message='Cargando...' size='100'/>
  }
  return (
    <div className={styles.editContainer}>
        <h1>{`Editar proyecto ${project.name}`}</h1>
        <hr />
      <div>
        <FormProject project={project} action="update"/>
      </div>
      <div className={styles.deleteContainer}>
        <AnimateButton 
        backgroundColor='#f4511e'
        icon='material-symbols-outlined'
        title='Eliminar '
        iconTitle='add'
        callback={destroyProject}/>
        </div>
    </div>
  );
};
