import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout, AuthLayout } from './layouts';
import {Login,
        ConfirmAccount,
        ForgetPassword,
        RecoverPassword,
        Register } from './pages/auth';
import { Projects, ProjectAdd, ProjectEdit, ProjectDetail } from './pages/projects';

function App() {

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* Rutas publicas */}
        <Route path='/' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/confirm/:token' element={<ConfirmAccount/>}/>
            <Route path='/forget' element={<ForgetPassword/>}/>
            <Route path='/recovery/:token' element={<RecoverPassword/>}/>
        </Route> 
        {/* Rutas protegidas */}
        <Route path='projects' element={<ProtectedLayout/>}>
          <Route index element={<Projects/>}/>
          <Route path='create-project' element={<ProjectAdd/>}/>
          <Route path='edit-project/:id' element={<ProjectEdit/>}/>
          <Route path=':id' element={<ProjectDetail/>}/>
        </Route>
      </Routes>

    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
