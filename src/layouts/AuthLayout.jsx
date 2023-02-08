import React from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalStyles, BackgroundAuth } from './styles'

export const AuthLayout = () => {

  return (
    <>
        <GlobalStyles/>
        <BackgroundAuth>
                <Outlet/>
        </BackgroundAuth>
    </>
  )
}
