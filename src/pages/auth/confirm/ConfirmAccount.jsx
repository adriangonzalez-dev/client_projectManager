import {useEffect, useState} from "react";
import { FormContainer } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { clientAxios } from "../../../config/clientAxios";
import Swal from "sweetalert2";

export const ConfirmAccount = () => {
  const {token} = useParams();
  const navigate = useNavigate()
  const [alert, setAlert] = useState({});

  const confirmAccount = async () => {
    try {
      const {data} = await clientAxios.get(`/auth/checked?token=${token}`);
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro completado exitosamente!',
        showConfirmButton: false,
        timer: 2000
      }).then((result)=>{
        navigate('/')
      })
      console.log(response)
    } catch (error) {
      console.log(error.response?.data.msg)
    }
  }

  useEffect(()=>{
    confirmAccount()
  },[])
  return (
    <FormContainer title='Confirma tu cuenta'>
      <div></div>
    </FormContainer>
  );
};
