import { lazy } from 'react'

import { CustomRouteObject } from '@/types'

const RecordContainer = lazy(() => import('../containers/Record.container'))

const routers: CustomRouteObject[] = [
  {
    path: '/record',
    element: <RecordContainer />,
    access: [],
  },
]

export default routers
