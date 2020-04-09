import { UserRoleContext } from "context/user-role"
import React, { useContext } from "react"
import styled from "styled-components"
import colors from "theme/colors"
import navButtons from "./config"
import NavLink from "./Link"

const Navigation = () => {
  const { role: userRole } = useContext(UserRoleContext)

  return (
    <Container className="sidebar-navigation">
      {navButtons.map((nav, index) => {
        return nav.allowedRoles.includes(userRole) && <NavLink {...nav} key={index} />
      })}
    </Container>
  )
}

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  a.active {
    background-color: ${colors.grey3};
  }
`

export default Navigation
