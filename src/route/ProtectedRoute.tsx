import { roles, RoleTypes, UserRoleContext } from "context/user-role"
import React, { FC, useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { isRoleIncluded } from "./helpers"

type OwnProps<T> = {
  component: FC<T>
  allowedRoles: RoleTypes[]
}

const ProtectedRoute = <T extends object>({ component, allowedRoles, ...rest }: OwnProps<T> & RouteProps) => {
  const { role: userRole } = useContext(UserRoleContext)

  if (isRoleIncluded(userRole, allowedRoles)) {
    return <Route {...{ component, ...rest }} />
  } else {
    return <Redirect to={roles[userRole].defaultRoute} />
  }
}

export default ProtectedRoute
