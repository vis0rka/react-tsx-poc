import "assets/scss/bundle.scss"
import { ContextProvider } from "context"
import { intAPIs } from "plugins/clients"
import "plugins/leaflet"
import "plugins/nprogress"
import "plugins/toastify"
import React from "react"
import Router from "route/Router"
import { createGlobalStyle } from "styled-components"
import "toastify-js/src/toastify.css"

const App = ({ config: { url } }: AppProps) => {
  intAPIs(url)
  return (
    <ContextProvider>
      <Router />
      <GlobalStyle />
    </ContextProvider>
  )
}
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100vh;
  }
`

export default App
