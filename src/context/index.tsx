import { CounterContextProvider } from "context/counter"
import { FooContextProvider } from "context/foo"
import { I18nContextProvider } from "context/i18n"
import { UserRoleContextProvider } from "context/user-role"
import React from "react"

export const ContextProvider = (props: ContextProviderProps) => {
  return (
    <I18nContextProvider>
      <UserRoleContextProvider>
        <CounterContextProvider>
          <FooContextProvider>{props.children}</FooContextProvider>
        </CounterContextProvider>
      </UserRoleContextProvider>
    </I18nContextProvider>
  )
}
