import React, { useCallback, useState } from "react"

export type CounterContextType = {
  num: Number
  up: Function
  down: Function
}

export const CounterContext = React.createContext<CounterContextType>({} as CounterContextType)

export const CounterContextProvider = (props: ContextProviderProps) => {
  const [num, setNum] = useState(0)

  const up = useCallback(() => {
    setNum(num + 1)
  }, [num, setNum])

  const down = useCallback(() => {
    setNum(num - 1)
  }, [num, setNum])

  return <CounterContext.Provider value={{ num, up, down }}>{props.children}</CounterContext.Provider>
}
