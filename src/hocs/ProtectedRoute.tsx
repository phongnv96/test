import { memo, ReactNode } from 'react'

// import { APIStatusCode, API_ERROR_MAPPING } from 'constants/errorMessages'

import { Navigate } from 'react-router-dom'
import { RolePermissionType } from '@/types'
import { useGlobalContext } from '../contexts/GlobalContextProvider'

export interface ProtectedRouteProps {
  children: ReactNode
  redirectPath?: string
  access?: RolePermissionType[]
}

const ProtectedRoute = ({ access, children }: ProtectedRouteProps) => {
  const { currentUser } = useGlobalContext()

  let result = null
  // nếu ko truyền access => thì path là public
  if (access && access.length > 0) {
    result = access.find(
      (item) => !(currentUser?.roles?.includes(item) || currentUser?.permissions?.includes(item))
    )
  }

  // nếu tồn tại 1 Role không thỏa mãn => chặn
  if (result) {
    return <Navigate to={'/not-allow'} />
  }

  return <>{children}</>
}

export default memo(ProtectedRoute)
