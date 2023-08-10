import { useGlobalContext } from '@/contexts/GlobalContextProvider'
import { RolePermissionType } from '@/types'
import { useMemo } from 'react'

const useAccess = () => {
  // State quyền truy cập từ accessList

  const { currentUser } = useGlobalContext()

  const accessObj = useMemo(() => {
    const isAuthen = !!currentUser
    const isAdmin = !!currentUser && currentUser.roles?.includes(RolePermissionType.ADMIN)
    const isGuest = !!currentUser && currentUser.roles?.includes(RolePermissionType.GUEST)
    return {
      isAuthen,
      isAdmin,
      isGuest,
    }
  }, [currentUser])

  return accessObj
}

export default useAccess
