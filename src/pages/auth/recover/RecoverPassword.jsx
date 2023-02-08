import React, { useEffect, useState } from 'react'
import { Button, FormContainer, Input } from '../../components';
import { clientAxios } from '../../../config/clientAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { handleErrorAlert, handleSuccessAlert } from '../../components/alerts/Alerts';

export const RecoverPassword = () => {
  const navigate = useNavigate();
  const {token} = useParams()
  const [password, setPassword] = useState('')
  const [tokenChecked, setTokenChecked] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      try {
        const {data} = await clientAxios.get(`/auth/change-password?token=${token}`);
        setTokenChecked(true)
      } catch (error) {
        console.log(error);
        handleErrorAlert(error.response.data.msg)
      }
    }
    checkToken();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(password === '' || password.length < 8){
      handleErrorAlert('El password es requerido y debe tener como minimo 8 caracteres')
    };

    const {data} = await clientAxios.post(`/auth/change-password?token=${token}`, {
      password
    })

    handleSuccessAlert(data.msg);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <FormContainer title='Reestablecé tu contraseña'>
      {
        tokenChecked && 
        (<form onSubmit={handleSubmit}>
          <Input
          hFor='password'
          labelName='Nueva contraseña'
          id='password'
          name='password'
          type='password'
          setInput={handlePassword}
          value={password}
          />
          <Button type='submit' title='Guardar tu contraseña'/>
        </form>)
      }
    </FormContainer>
  );
}
