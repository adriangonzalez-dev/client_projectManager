import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css'
import { Button, LinkForm } from "../../pages/components";
import { useAuth } from "../../hooks";
export const Header = () => {
  const {logoutUser} = useAuth()
  return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/to-do-list.png" alt="" />
          <h2>Projects Manager</h2>
        </div>

        <form className={styles.search}>
          <input type="text" placeholder="Buscar proyecto..." />
          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <nav>
          <LinkForm linkTo='/projects' name='Proyectos'/>
          <Button title='Cerrar sesión' type='button' callback={logoutUser}/>
        </nav>
      </header>

  );
};
