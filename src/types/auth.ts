// fix me
export type CurrentUserType = {
  username?: string
  roles?: string[]
  permissions?: string[]
}

export type AuthenStateType = {
  access_token: string
  refresh_token: string
  expires_in: number
  userInfo: {
    id: number
    staffCode: string
    fullName: string
    roles: string
  }
}

export enum RolePermissionType {
  // Roles
  ADMIN = 'admin',
  GUEST = 'guest',
}
