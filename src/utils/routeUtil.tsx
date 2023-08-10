import ProtectedRoute from '@/hocs/ProtectedRoute'
import { CustomRouteObject } from '@/types'
import { RouteObject } from 'react-router-dom'
import { omit } from '.'

export const renderRoutes = (routesCustom: CustomRouteObject[]): RouteObject[] => {
  const result = routesCustom.map((route) => {
    let routeRemovedAccess = omit(route, ['access']) as RouteObject

    // thêm protected route nếu có property access
    if (route.access && route.element && route.access.length > 0) {
      routeRemovedAccess.element = <ProtectedRoute access={route.access} children={route.element} />
    }

    // tiếp tục nếu có children
    if (routeRemovedAccess.children && routeRemovedAccess.children.length > 0) {
      routeRemovedAccess.children = renderRoutes(routeRemovedAccess.children)
    }

    return routeRemovedAccess
  })

  return result
}
