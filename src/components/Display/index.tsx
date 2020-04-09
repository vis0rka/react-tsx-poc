import { CounterContext } from "context/counter"
import { FooContext } from "context/foo"
import React, { useContext } from "react"
import styled from "styled-components"

const Display = () => {
  const { num } = useContext(CounterContext)
  const { bar: nameWhatEverYouWant, setBar } = useContext(FooContext)
  return (
    <Section>
      <h3>Bar state: {nameWhatEverYouWant}</h3>
      <h3>Counter state: {num}</h3>
      <button className="btn-primary" onClick={() => setBar("display_bar_payload")}>
        Set Bar
      </button>
    </Section>
  )
}

const Section = styled.section`
  border: solid 2px green;
`

export default Display
