import { clientAxios } from "../config/clientAxios";

export const uploadImageUser = async (file, id) => {

    const token = sessionStorage.getItem('token')
    if(!token){
      return null;
    }

    const fd = new FormData();
    fd.append('avatar', file)

    const config ={
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: token
      },
      body: {
        avatar: file
      }
    }
    try {
      const {data} = await clientAxios.put('/upload/avatar', fd, config);
      console.log(data)
        return data;
    } catch (error) {
      console.log(error)
    }
}