import { clientAxios } from "../config/clientAxios";

export const uploadImage = async (file, id) => {

    const token = sessionStorage.getItem('token')
    if(!token){
      return null;
    }

    const fd = new FormData();
    fd.append('image', file)

    const config ={
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: token
      },
      body: {
        image: file
      }
    }
    try {
      const {data} = await clientAxios.put(`/upload/${id}`, fd, config);
        return data;
    } catch (error) {
      console.log(error)
    }
}