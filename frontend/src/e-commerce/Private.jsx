import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Private = () => {
const auth=localStorage.getItem("user")

  return  auth? <Outlet/> : <Navigate to='/sign' />
}
 