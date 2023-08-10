import React from 'react'


import { Navigate, Outlet } from 'react-router-dom'



const MainLayout: React.FC = () => (
  <main className="">
      <Navigate replace to="/home" />
      <Outlet />
  </main>
)

export default React.memo(MainLayout)
