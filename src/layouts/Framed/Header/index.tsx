import { I18nContext } from "context/i18n"
import { UserRoleContext } from "context/user-role"
import i18nLayouts from "i18n/Layouts"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "theme/colors"

type OwnProps = {
  title: string
}
const Header = ({ title }: OwnProps) => {
  const { role: userRole } = useContext(UserRoleContext)
  const { trl, lang, setLang } = useContext(I18nContext)

  return (
    <Container className="header">
      <Leftside>
        <H3>{title}</H3>
        <Buttons>
          {lang === "hu" && <button onClick={() => setLang("en")}>en</button>}
          {lang === "en" && <button onClick={() => setLang("hu")}>hu</button>}
        </Buttons>
      </Leftside>
      <Rightside>
        {`${trl(i18nLayouts.role)}: ${userRole}`}
        <Link to="/">Kijelentkezés</Link>
      </Rightside>
    </Container>
  )
}

const Container = styled.div`
  grid-area: header;
  background-color: ${colors.grey2};
  border-bottom: 1px solid ${colors.grey1};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Leftside = styled.div`
  flex-grow: 1;
`

const Rightside = styled.div`
  text-align: right;
  min-width: 30%;
  padding-right: 2rem;
`

const Buttons = styled.div`
  float: right;
`

const H3 = styled.div`
  color: ${colors.purple};
  margin-left: 2rem;
  display: inline;
`

export default Header
