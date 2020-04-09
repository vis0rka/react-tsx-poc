import { ADMIN, UserRoleContext } from "context/user-role"
import FramedLayout from "layouts/Framed"
import React, { useContext } from "react"

const Admin = () => {
  const { role: userRole } = useContext(UserRoleContext)
  return (
    <FramedLayout title="Admin">
      <div>admin: {userRole} </div>
    </FramedLayout>
  )
}
Admin.allowedRoles = [ADMIN]

export default Admin
