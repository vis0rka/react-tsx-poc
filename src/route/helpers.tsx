import { RoleTypes } from "context/user-role"

export const isRoleIncluded = (userRole: RoleTypes, allowedRoles: RoleTypes[]) => {
  return allowedRoles.length !== 0 && allowedRoles?.includes(userRole)
}
