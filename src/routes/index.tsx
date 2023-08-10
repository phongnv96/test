import NotAllowPage from '@/NotAllowPage'
import { HomeRouter } from '@/features/home'
import { RecordRouter } from '@/features/record'
import { MainLayout } from '@/components/Layouts'
import { CustomRouteObject } from '@/types'
import { renderRoutes } from '@/utils'
import { Navigate, useRoutes } from 'react-router-dom'
import { RecommendRoutes } from '@/features/recommend'

export const Routes = () => {
  const routersCustom: CustomRouteObject[] = [
    {
      path: '/',
      index: true,
      element: <Navigate to={'/home'} />,
    },
    {
      element: <MainLayout />,
      children: [...HomeRouter, ...RecordRouter, ...RecommendRoutes],
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: '/not-allow',
          element: <NotAllowPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={`/home`} />,
    },
  ]

  const routers = renderRoutes(routersCustom)
  return useRoutes(routers)
}
