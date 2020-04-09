import { CounterContext } from "context/counter"
import { FooContext } from "context/foo"
import { I18nContext } from "context/i18n"
import i18nCounter from "i18n/Counter"
import React, { useCallback, useContext, useState } from "react"
import styled from "styled-components"

type OwnProps = {
  title: string
}

const Counter = ({ title }: OwnProps) => {
  const [counter, setCounter] = useState(0)
  const { up, down } = useContext(CounterContext)
  const { bar: fooBar, setBar } = useContext(FooContext)
  const { trl } = useContext(I18nContext)

  const upCounter = useCallback(() => {
    up()
    setCounter(counter + 2)
  }, [counter, up])

  const downCounter = useCallback(() => {
    down()
    setCounter(counter - 2)
  }, [counter, down])

  return (
    <Section>
      <h1>{title}</h1>
      <h2>{fooBar}</h2>
      <h3>{trl(i18nCounter.counterState, counter)}</h3>
      <button className="btn-secondary" onClick={() => setBar("counter_bar_payload")}>
        Set Bar
      </button>
      <button onClick={downCounter}>Down</button>
      <button onClick={upCounter}>Up</button>
    </Section>
  )
}

const Section = styled.section`
  border: solid 2px salmon;
`

export default Counter
