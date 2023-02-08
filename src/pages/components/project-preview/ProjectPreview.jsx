import React from "react";
import { Link } from "react-router-dom";
import styles from './preview.module.css';
import { LinkForm } from "../links/LinkForm";

export const ProjectPreview = ({icon, name,client, id}) => {
  return (
    <div className={styles.cardProject}>
      <img src={`/icons/${icon}.png`} alt={icon} />
      <div>
        <p>{name}</p>
        <hr />
        <span>{client}</span>
      </div>
      <LinkForm linkTo={`/projects/${id}`} name='Ver proyecto'/>
    </div>
  );
};
