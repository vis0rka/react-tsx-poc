import { UserRoleContext } from "context/user-role"
import FramedLayout from "layouts/Framed"
import { accountsClient } from "plugins/clients"
import { AuthenticationResult, AuthenticationViewModel } from "plugins/clients/api"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"

const Home = () => {
  const { setAdmin, setUser, setAnonimus } = useContext(UserRoleContext)
  const [authenticationResult, setAuthenticationResult] = useState({} as AuthenticationResult)

  useEffect(() => {
    try {
      accountsClient
        .apiAccountsAuthenticatePost(
          new AuthenticationViewModel({ email: "mainfarmer@test.hu", password: "Pass_1word" }),
        )
        .then((reponse: AuthenticationResult) => {
          console.log(reponse)
          setAuthenticationResult(reponse)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <FramedLayout title="Home">
      <h2>Home {authenticationResult.name}</h2>
      <Button className="btn-secondary" onClick={() => setAdmin()}>
        Set Admin
      </Button>
      <Button className="btn-primary" onClick={() => setUser()}>
        Set User
      </Button>
      <Button className="btn-info" onClick={() => setAnonimus()}>
        Set Anonimus
      </Button>
    </FramedLayout>
  )
}

const Button = styled.button`
  margin: 10px;
`

export default Home
