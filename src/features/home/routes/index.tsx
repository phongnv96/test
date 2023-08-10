import { lazy } from 'react'

import { CustomRouteObject, RolePermissionType } from '@/types'

const HomeContainer = lazy(() => import('../containers/Home.container'))

const routers: CustomRouteObject[] = [
  {
    path: '/home',
    element: <HomeContainer />,
    access: [],
  },

  {
    path: '/admin',
    element: <>Test Admin</>,
    access: [RolePermissionType.ADMIN],
  },
  {
    path: '/guest',
    element: <>Test Guest</>,
    access: [RolePermissionType.GUEST],
  },
  {
    path: '/public',
    element: <>Test public</>,
    access: [],
  },
]

export default routers
