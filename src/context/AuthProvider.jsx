import { createContext, useEffect, useState } from 'react'
import { clientAxios } from '../config/clientAxios';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const navigate = useNavigate()

  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const logoutUser = () => {
    setAuth({})
    sessionStorage.removeItem('token');
    navigate('/',{replace:true})
  }

  useEffect(()=>{

    const authUser = async () => {
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

      try {
        const {data} = await clientAxios('/users', config);
        setAuth(data.user)
        navigate('/projects',{
          replace:true
        })
      } catch (error) {
        console.log(error)
        setAuth({})
      } finally {
        setIsLoading(false)
      }
    }

    authUser();
  },[]);

  return (
    <AuthContext.Provider value={{auth, setAuth, isLoading, logoutUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;