import React, { useCallback, useState } from "react"

export const ANONIMUS = "ANONIMUS"
export const ADMIN = "ADMIN"
export const USER = "USER"

export const roles = {
  [ANONIMUS]: { defaultRoute: "/", hu: "" },
  [ADMIN]: { defaultRoute: "/user-roles/admin", hu: "adminisztrátor" },
  [USER]: { defaultRoute: "/home", hu: "gazdálkodó" },
}

export type RoleTypes = keyof typeof roles

export type UserRoleContextType = {
  role: RoleTypes
  setAdmin: Function
  setUser: Function
  setAnonimus: Function
}

export const UserRoleContext = React.createContext<UserRoleContextType>({} as UserRoleContextType)

export const UserRoleContextProvider = (props: ContextProviderProps) => {
  const [role, setRole] = useState<RoleTypes>(ANONIMUS)

  const setAdmin = useCallback(() => {
    setRole(ADMIN)
  }, [setRole])

  const setUser = useCallback(() => {
    setRole(USER)
  }, [setRole])

  const setAnonimus = useCallback(() => {
    setRole(ANONIMUS)
  }, [setRole])

  return (
    <UserRoleContext.Provider value={{ role, setAdmin, setUser, setAnonimus }}>
      {props.children}
    </UserRoleContext.Provider>
  )
}
