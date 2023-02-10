import { createContext, useEffect, useState } from 'react'
import { clientAxios } from '../config/clientAxios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleErrorAlert } from '../pages/components';


const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {

  const navigate = useNavigate()
  const [reload, setReload] = useState(false)
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [project, setProject] = useState({});
  const [isLoadingId, setIsLoadingId] = useState(true);

  const [createLoading, setCreateLoading] = useState(true);

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [loadingTask, setLoadingTask] = useState(true);

  const createProject = async (body) => {
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
      const {data} = await clientAxios.post(`/project`, body, config);
      setProjects([...projects, data.project]);
      Swal.fire(data.msg)
      navigate('/projects')
  
    } catch (error) {
      console.log(error)
    } finally {
      setCreateLoading(false)
    }
  }

  const updateProject = async (body, id) => {
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
      const {data} = await clientAxios.put(`/project/${id}`, body, config);
      console.log(data)
      setProjects([...projects, data.project]);
      Swal.fire(data.msg)
      navigate('/projects')
    } catch (error) {
      handleErrorAlert(error.response.data.msg)
      console.log(error)
    } finally {
      setCreateLoading(false)
    }
  }

  const deleteProject = async (id) => {
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
      const {data} = await clientAxios.delete(`/project/${id}`, config);
      Swal.fire(data.msg);
      const projectsFiltered = projects.filter(project=>project._id !== id);
      setProjects(projectsFiltered)
      navigate('/projects',{
        replace:true
      })
      setReload(!reload)
    } catch (error) {
      
      console.log(error.response.data.msg)
    } finally {
      setCreateLoading(false)
    }
  }

  const getProjectById = async (id) => {
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
      const {data} = await clientAxios.get(`/project/${id}`, config);
      setProject(data.project)
    } catch (error) {
      /* console.log(error) */
      setProject([])
    } finally {
      setIsLoadingId(false)
    }
  }

  const addCollab = async (id, email) => {
    const token = sessionStorage.getItem('token')
    if(!token){
      return null;
    }

    const config ={
      headers: {
        'content-type': 'application/json',
        Authorization: token
      },
    }

    const body = {
      email
    }

    try {
      const {data} = await clientAxios.put(`/project/colaborator/${id}`,body, config);
      Swal.fire(data.msg)
      setReload(!reload)
    } catch (error) {
      Swal.fire(error.response.data.msg)
      console.log(error)
    }
  }

  const removeCollab = async (id, user) => {
    const token = sessionStorage.getItem('token')
    if(!token){
      return null;
    }

    const config ={
      headers: {
        'content-type': 'application/json',
        Authorization: token
      },
    }

    try {
      const {data} = await clientAxios.delete(`/project/colaborator/${id}/${user}`, config);
      Swal.fire(data.msg)
      setReload(!reload)
    } catch (error) {
      Swal.fire(error.response.data.msg)
      console.log(error)
    } 
  }

  const getTaskById = async (id) => {
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
      const {data} = await clientAxios.get(`/task/${id}`, config);
      setTask(data.task)
    } catch (error) {
      /* console.log(error) */
      setTask({})
    } finally {
      setLoadingTask(false)
    }
  }

  const createTask = async (body) => {
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
      const {data} = await clientAxios.post(`/task`, body, config);
      Swal.fire(data.msg)
      project.tasks = ([...project.tasks, data.task])
      setProject(project);
    } catch (error) {
      console.log(error)
    } finally {
      setCreateLoading(false)
    }
  }

  const updateTask = async (body, id) => {
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
      const {data} = await clientAxios.put(`/task/${id}`, body, config);
      console.log(data)
      setTasks([...tasks, data.task]);
      Swal.fire(data.msg)
    } catch (error) {
      handleErrorAlert(error.response.data.msg)
      console.log(error)
    } finally {
      setCreateLoading(false)
    }
  }

  const getTasks = async (id) => {
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
      const {data} = await clientAxios.get(`/task?project=${id}`, config);
      setTasks(data.tasks)
    } catch (error) {
      console.log(error)
      setTasks([])
    } finally {
      setLoadingTasks(false)
    }
  }

  const deleteTask = async (id) => {
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
      const {data} = await clientAxios.delete(`/task/${id}`, config);
      /* Swal.fire(data.msg); */
      project.tasks = project.tasks.filter(task=>task._id !== id);
      setProject(project);
    } catch (error) {
      
      console.log(error.response.data.msg)
    } finally {
      setCreateLoading(false)
    }
  }

  const changeState = async (id) => {
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
      const {data} = await clientAxios.get(`/task/change-state/${id}`, config);
      /* Swal.fire(data.msg); */
      project.tasks = project.tasks.map(task=>{
        if(task._id === id){
          return task = {
            ...task,
            state : !task.state
          }
        }
        return task;
      });
      setProject(project);
    } catch (error) {
      console.log(error/* .response.data.msg */)
    } finally {
      setCreateLoading(false)
    }
  }


  useEffect(()=>{

    const getProjects = async () => {
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
        const {data} = await clientAxios.get('/project', config);
        setProjects(data.projects)
      } catch (error) {
        console.log(error)
        setProjects([])
      } finally {
        setIsLoading(false)
      }
    }

    getProjects();
  },[]);



  return (
    <ProjectContext.Provider value={{projects, 
    setProjects, 
    isLoading, 
    project, 
    getProjectById, 
    isLoadingId,
    createProject,
    createLoading,
    updateProject,
    deleteProject,
    addCollab,
    removeCollab,
    reload,
    createTask,
    updateTask,
    getTaskById,
    getTasks,
    deleteTask,
    loadingTask,
    loadingTasks,
    tasks,
    task,
    changeState
    }}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext;