import { Label } from "components/Form/StyledElements"
import React, { ChangeEvent } from "react"
import styled from "styled-components"
import colors from "theme/colors"

type OwnProps = {
  id: string
  defaultChecked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const Checkbox = ({ id, defaultChecked, onChange, label }: OwnProps) => {
  return (
    <Style>
      <input type="checkbox" {...{ id, defaultChecked, onChange }} />
      <Label htmlFor={id}>{label}</Label>
    </Style>
  )
}

const Style = styled.div`
  position: relative;

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: initial;
    height: 0;
    width: 0;
    margin: 0;
  }

  label {
    user-select: none;
    padding-left: 1.5rem;
  }

  label:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    background-color: ${colors.white};
    border: ${colors.black} solid 1px;
    border-radius: 0.25rem;
  }

  label:after {
    position: absolute;
    content: "";
    top: 3px;
    left: 0.4rem;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }

  [type="checkbox"]:checked ~ label:before {
    background-color: ${colors.greenTab};
    border-color: ${colors.greenTab};
  }

  [type="checkbox"]:checked ~ label:after {
    display: block;
  }
`
