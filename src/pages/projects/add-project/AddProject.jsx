import React from "react";
import { FormProject } from "../../components";
import styles from './add.module.css'
export const ProjectAdd = () => {

  return (
    <div className={styles.addContainer}>
      <h1>Crear proyecto</h1>
      <hr />
        <FormProject action="create"/>
    </div>
  );
};
