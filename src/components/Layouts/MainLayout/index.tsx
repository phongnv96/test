import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { GoToTop } from '@/components'
import { dropMenu, footerData, navItem } from '@/configs'

const MainLayout: React.FC = () => (
  <main className="min-h-screen relative">
    <Header menu={navItem} dropMenu={dropMenu} />
    <div className="pb-[128px]">
      <Outlet />
    </div>
    <GoToTop />
    <Footer links={footerData} />
  </main>
)

export default React.memo(MainLayout)
