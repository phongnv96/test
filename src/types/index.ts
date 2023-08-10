
import { RouteObject } from 'react-router-dom'

import { API_STATUS } from '../constants'
import { RolePermissionType } from './auth'

export type ApiStatus = API_STATUS

export type CustomRouteObject = Omit<RouteObject, 'children'> & {
  access?: RolePermissionType[]
  children?: CustomRouteObject[]
}

export type LoadingState = {
  loadingCount: number
}


export * from './auth';
export * from './error';
export * from './theme';