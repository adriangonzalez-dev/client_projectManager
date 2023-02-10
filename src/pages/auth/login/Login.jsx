import {Button, FormContainer, Input, LinkForm} from '../../components'

import { NavLinks } from "../../../styled-components";
import { useAuth, useForm } from "../../../hooks";
import { handleErrorAlert, handleSuccessAlert } from "../../components/alerts/Alerts";
import { clientAxios } from "../../../config/clientAxios";
import { Spinner } from '../../../components/spinner/Spinner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export const Login = () => {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {setAuth, auth} = useAuth()

  const {formValues, handleInputChange } = useForm({
    email: '',
    password: ''
  });

  const {email, password} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if([email, password].includes('')){
      handleErrorAlert('Todos los campos son requeridos')
    }

    try {
      const {data} = await clientAxios.post('/auth/login',{
        email, password
      })
      setAuth(data.user);
      console.log(data.token)
      sessionStorage.setItem('token', data.token)

      handleSuccessAlert(data.msg);

    } catch (error) {
      console.log(error)
      handleErrorAlert(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormContainer title='Iniciá sesión'>
      <form onSubmit={handleSubmit}>
        <Input
        id='email'
        type='email'
        hFor='email'
        labelName='Correo electronico'
        name='email'
        setInput={handleInputChange}
        value={email}/>

        <Input
        id='password'
        type='password'
        hFor='password'
        labelName='Contraseña'
        name='password'
        setInput={handleInputChange}
        value={password}/>

        {isLoading ? 
        <Spinner message='Logueando...' size='50'/> 
        : 
        <Button type='submit' title='Iniciar sesión' />}
      </form>
      <NavLinks>
        <p>¿No tenés una cuenta? <LinkForm linkTo='/register' name='Registrate'/></p>
        <LinkForm linkTo='/forget' name='Olvidé mi password'/>
      </NavLinks>
    </FormContainer>
  );
};
