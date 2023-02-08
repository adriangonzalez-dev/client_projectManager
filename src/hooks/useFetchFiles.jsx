import { clientAxios } from "../config/clientAxios";
import {useEffect, useState} from 'react'
export const useFetchFiles = () => {

    const [images, setImages] = useState([])
    const [imageLoading, setImageLoading] = useState(true);

     const getFiles = async (id) => {
      try {
        const token = sessionStorage.getItem('token')
        if(!token){
          return null;
        }
        const config ={
          headers: {
            'content-type': 'application/json',
            Authorization: token
          }
        }
        const {data} = await clientAxios.get(`/upload/${id}`, config);
        setImages(data.images)
      } catch (error) {
        /* console.log(error) */
        setImages([])
      } finally {
        setImageLoading(false)
      }

    }

    return {images, imageLoading, getFiles}

  }