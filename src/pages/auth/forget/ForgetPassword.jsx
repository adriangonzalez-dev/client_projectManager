import React, { useState } from "react";
import { Button, FormContainer, Input, LinkForm } from "../../components";
import { NavLinks } from "../../../styled-components";
import { clientAxios } from "../../../config/clientAxios";
import Swal from "sweetalert2";
import { handleSuccessAlert } from "../../components/alerts/Alerts";

export const ForgetPassword = () => {

  const [email, setEmail] = useState('');

  const handleErrorAlert = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      background: '#2C3333',
      color: '#EEEEEE',
    })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email){
      handleErrorAlert('El email es requerido')
      return;
    }

    try {

      const {data} = await clientAxios.post('/auth/send-token',{
        email
      })

      handleSuccessAlert(data.msg)

    } catch (error) {

      handleErrorAlert(error.response?.data.msg)
      console.log(error.response.data)
    }
  }
  return (
    <FormContainer title='Recupera tu acceso'>
      <form onSubmit={handleSubmit}>
        <Input
          hFor='email'
          labelName='Correo electrónico'
          id='email'
          type='email'
          value={email}
          setInput={handleEmail}/>
          <Button 
          type='submit'
          title='Recuperar contraseña'/>
      </form>
      <NavLinks>
        <p>¿No tenés una cuenta? <LinkForm linkTo='/register' name='Registrate'/></p>
        <p>¿Estás registrado? <LinkForm linkTo='/' name='Iniciá sesión'/></p>
      </NavLinks>
    </FormContainer>
  );
};
