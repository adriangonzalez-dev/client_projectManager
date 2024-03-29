import React, { useContext } from 'react'
import ProjectContext from '../context/ProjectProvider'

export const useProjects = () => {
  return useContext(ProjectContext)
}

export default useProjects