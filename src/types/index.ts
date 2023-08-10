import { RouteObject } from 'react-router-dom'

import { API_STATUS } from '../constants'
import { RolePermissionType } from './auth'
import { ICON_LOCAL } from '@/components/Icon/IconDefine'

export type ApiStatus = API_STATUS

export type CustomRouteObject = Omit<RouteObject, 'children'> & {
  access?: RolePermissionType[]
  children?: CustomRouteObject[]
}

export type LoadingState = {
  loadingCount: number
}

export type IconLocalType = keyof typeof ICON_LOCAL

export type NavItemType = {
  id: any
  iconName: IconLocalType
  link: string
  label: string
  bag?: number
}

export type MenuDropType = {
  id: any
  link: string
  text: string
}

export * from './auth'
export * from './error'
export * from './theme'
