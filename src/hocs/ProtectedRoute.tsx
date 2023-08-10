import { memo, ReactNode } from 'react'

// import { APIStatusCode, API_ERROR_MAPPING } from 'constants/errorMessages'

import { Navigate } from 'react-router-dom'
import { CurrentUserType, RolePermissionType } from '@/types'

export interface ProtectedRouteProps {
  children: ReactNode
  redirectPath?: string
  access?: RolePermissionType[]
}

const ProtectedRoute = ({ access, redirectPath, children }: ProtectedRouteProps) => {
  // fix me
  const currentUser: CurrentUserType = {
    roles: ['admin'],
    permissions: ['export'],
  }

  let result = null
  // nếu ko truyền access => thì path là public
  if (access && access.length > 0) {
    result = access.find(
      (item) => !(currentUser.roles?.includes(item) || currentUser.permissions?.includes(item))
    )
  }
  // nếu tồn tại 1 Role không thỏa mãn => chặn
  if (result) {
    // notification.info({ message: API_ERROR_MAPPING[APIStatusCode.FORBIDDEN] })
    return <Navigate to={redirectPath ?? '/'} />
  }

  return <>{children}</>
}

export default memo(ProtectedRoute)
