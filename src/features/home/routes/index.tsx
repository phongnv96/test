import { lazy } from 'react'

import { CustomRouteObject } from '@/types'

const HomeContainer = lazy(() => import('../containers/Home.container'))

const routers: CustomRouteObject[] = [
  {
    path: '/home',
    element: <HomeContainer />,
    access: [],
  },
]

export default routers
