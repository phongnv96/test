import { Loading } from '@/components'
import React, { Suspense, useEffect } from 'react'

import { BrowserRouter, useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <></>
}

const RouterProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </BrowserRouter>
)
export default React.memo(RouterProvider)
