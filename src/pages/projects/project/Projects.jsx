import React from "react";
import { ProjectPreview } from "../../components";
import styles from './project.module.css'
import useProjects from "../../../hooks/useProject";
import { Spinner } from "../../../components";
export const Projects = () => {
  const {projects, isLoading} = useProjects();
  return (
    <div className={styles.bodyProject}>
      <h1>Proyectos</h1>
      <hr />
      <div className={`${styles.projectContainer} ${styles.threeholder}`}>
        {isLoading ? 
        <Spinner message='Cargando...' size='50'/>
        :
        projects.length === 0 
        ? 
        <p>No hay proyectos</p>
        :
        projects.map((project, index)=><ProjectPreview
                      client={project.client}
                      icon={project.icon}
                      id={project._id}
                      name={project.name}
                      key={index}/>)}
      </div>
    </div>
  );
};
