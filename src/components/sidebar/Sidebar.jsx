import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './sidebar.module.css'
import { AnimateButton, Button, LinkForm } from "../../pages/components";
import Swal from "sweetalert2";
import { useAuth, useFetchFiles } from "../../hooks";
import useProjects from "../../hooks/useProject";
import { uploadImage } from "../../helpers/uploadFiles";
import { Spinner } from "../spinner/Spinner";
import { uploadImageUser } from "../../helpers/uploadAvatar";


export const Sidebar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { auth, isLoading } = useAuth();
    const {isLoadingId, project} = useProjects();
    const {images:imagesProject, imageLoading, getFiles} = useFetchFiles()

    const uploadAvatar = async () => {
      const { value: file } = await Swal.fire({
        title: 'Seleccionar foto de perfil',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Subir avatar'
        }
      })
      
      if (file) {
        /* const reader = new FileReader()
        reader.onload = (e) => {
          setImages((prev)=>[...prev, e.target.result]);
          Swal.fire({
            title: 'Your uploaded picture',
            imageUrl: e.target.result,
            imageAlt: 'The uploaded picture'
          })
        } */
        uploadImageUser(file)
        reader.readAsDataURL(file)
      }
    }
    const uploadFiles = async () => {
      const { value: file } = await Swal.fire({
        title: 'Seleccionar archivos',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Subir archivos'
        }
      })
      
      if (file) {
        /* const reader = new FileReader()
        reader.onload = (e) => {
          setImages((prev)=>[...prev, e.target.result]);
          Swal.fire({
            title: 'Your uploaded picture',
            imageUrl: e.target.result,
            imageAlt: 'The uploaded picture'
          })
        } */
        const image = await uploadImage(file, project._id)
        reader.readAsDataURL(file)
      }
    }
    
    const prevImage = (img) => {
      Swal.fire({
        imageUrl: img,
        imageHeight: 300,
        imageAlt: 'A tall image'
      })
    }
    
    const redirectNewProject = () => {
      navigate('/projects/create-project')
    }

    useEffect(()=>{
      if(id){
        getFiles(id);
      }
    },[id])
    return (
      <aside className={styles.aside}>
      <div className={styles.profile}>
        <div className={styles.avatarContainer} onClick={uploadAvatar}>
          {
            isLoading ?
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" />
            :
            <img src={auth.avatar} alt="profile" />
            
          }
          <div><i class="fa-solid fa-camera"></i></div>
        </div>
        <h2>{auth.name}</h2>
      </div>
      {
        !id
        ?
        ''
        :
        <div className={styles.files}>
          <hr />
          <p>Archivos del proyecto</p>
          {
            imageLoading ? 
            <Spinner message='Cargando...' size='100'/>
            :
            <div className={styles.imagesContainer}>
            {
              imagesProject.length > 0 ?
              (
                imagesProject.map((image, index)=><img src={image.secure_url} alt={image} key={index} onClick={()=>prevImage(image)}/>)
              ):
              <p>No hay archivos</p>
            }
          </div>
          }
          <AnimateButton
                backgroundColor="#2196F3"
                icon="material-symbols-outlined"
                iconTitle="cloud_upload"
                title="Subir archivo"
                callback={uploadFiles}
                />
        </div>
      }
      <div className={styles.footer}>
        <hr />
        <AnimateButton
              backgroundColor="#2196F3"
              icon="material-symbols-outlined"
              iconTitle="add"
              title="Nuevo Proyecto"
              callback={redirectNewProject}
              />
      </div>
    </aside>
  );
};
