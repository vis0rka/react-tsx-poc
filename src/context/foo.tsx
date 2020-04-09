import React, { useState } from "react"

export type FooContextType = {
  bar: string
  setBar: Function
}

export const FooContext = React.createContext<FooContextType>({} as FooContextType)

export const FooContextProvider = (props: ContextProviderProps) => {
  const [bar, setBar] = useState("default_bar")

  return <FooContext.Provider value={{ bar, setBar }}>{props.children}</FooContext.Provider>
}
