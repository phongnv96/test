import React from 'react'


import { Outlet } from 'react-router-dom'
import Header from './Header'

const MainLayout: React.FC = () => (
  <main className="">
     <Header />
      <Outlet />
  </main>
)

export default React.memo(MainLayout)
