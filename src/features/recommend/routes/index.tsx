import { lazy } from 'react'

import { CustomRouteObject } from '@/types'

const RecommendContainer = lazy(() => import('../containers/Recommend.container'))

const routers: CustomRouteObject[] = [
  {
    path: '/recommend',
    element: <RecommendContainer />,
    access: [],
  },
]

export default routers
