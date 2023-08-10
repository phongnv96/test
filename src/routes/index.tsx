import { HomeRouter } from "@/features/home"
import { MainLayout } from "@/layouts"
import { CustomRouteObject, RolePermissionType } from "@/types"
import { renderRoutes } from "@/utils"
import { Navigate, useRoutes } from "react-router-dom"


export const Routes = () => {
  const routersCustom: CustomRouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      access: [RolePermissionType.ADMIN],
      children: [...HomeRouter],
    },
    {
       path: "*",
       element: <Navigate to="/" replace />
    }
  ]

  const routers = renderRoutes(routersCustom)
  return useRoutes(routers)
}
