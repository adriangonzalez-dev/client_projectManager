import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { BackgroundAnimate, GlobalStyles, GridTemplate } from './styles'
import { useAuth } from '../hooks'
import { Spinner, Header, Sidebar } from '../components'
import { ProjectProvider } from '../context/ProjectProvider'

export const ProtectedLayout = () => {
  const { auth, isLoading } = useAuth();
  

  if (isLoading) {
    return (
      <>
        <GlobalStyles />
        <BackgroundAnimate>
          <Spinner />
        </BackgroundAnimate>
      </>
    );
  } else {
    return (
      <ProjectProvider>
        <GlobalStyles />
        <GridTemplate>
          <Header />
          <Sidebar />
          <BackgroundAnimate>
            {auth._id ? (
              <>
                <Outlet />
              </>
            ) : (
              <Navigate to="/" />
            )}
          </BackgroundAnimate>
        </GridTemplate>
      </ProjectProvider>
    );
  }
}
