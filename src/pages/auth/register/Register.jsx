import React, { useState } from 'react'
import { Button, FormContainer, Input, LinkForm } from '../../components'
import { NavLinks } from '../../../styled-components';
import {useForm} from '../../../hooks'
import { clientAxios } from '../../../config/clientAxios';
import { handleErrorAlert, handleSuccessAlert } from '../../components/alerts/Alerts';
import { Spinner } from '../../../components/spinner/Spinner';

export const Register = () => {
  const [sending,setSending] = useState(false)
  const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const {formValues, handleInputChange, resetForm} = useForm({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const {name, email, password, password2} = formValues;



  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true)
    if([name, email, password, password2].includes('')){
      handleErrorAlert('Todos los campos son obligatorios');
    };
    
    if(!validEmail.test(email)){
      handleErrorAlert('El email no es válido');
    };

    if(password !== password2) {
      handleErrorAlert('Las contraseñas no coinciden');
    };

    try {
      const {data} = await clientAxios.post('/auth/register',{
        name,
        email,
        password
      })
      resetForm()
      handleSuccessAlert(data.msg);

    } catch (error) {
      console.log(error.response.data)
      if(error.response.status===400){
        handleErrorAlert(error.response.data.msg);
      };
    } finally{
      setSending(false);
    }
  }

  return (
    <FormContainer title='Creá tu cuenta'>
        <form onSubmit={handleSubmit}>
          <Input 
          hFor='name'
          id='name'
          type='text'
          labelName='Nombre'
          autoComplete='off'
          name='name'
          value={name}
          setInput={handleInputChange}/>

          <Input 
          hFor='email'
          id='email'
          type='email'
          labelName='Correo electrónico'
          autoComplete='off'
          name='email'
          value={email}
          setInput={handleInputChange}/>

          <Input 
          hFor='password'
          id='password'
          type='password'
          labelName='Contraseña'
          name='password'
          value={password}
          setInput={handleInputChange}/>

          <Input 
          hFor='password2'
          id='password2'
          type='password'
          labelName='Confirma tu contraseña'
          name='password2'
          value={password2}
          setInput={handleInputChange}/>

          {sending ? <Spinner message='Registrando...' size={100}/> : <Button type='submit' title='Crear cuenta' disabledButton={sending}/>}
          

        </form>
        <NavLinks>
          <p>¿Estás registrado? <LinkForm linkTo='/' name='Iniciá sesión'/></p>
        </NavLinks>
    </FormContainer>
  );
}
