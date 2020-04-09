import { formColors } from "components/Form/style"
import { invalid, required } from "components/Form/StyledElements"
import styled from "styled-components"

export const Select = styled.select`
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: ${formColors.backgroundColor};
  background-clip: padding-box;
  border-color: ${formColors.borderColor};
  width: initial;
  margin-right: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  padding: 0.375rem 1.5rem 0.375rem 0.75rem;
  height: calc(1.5em + 0.75rem + 2px);

  &:hover {
    border-color: ${formColors.borderColorHover};
  }
  &:focus {
    border-color: ${formColors.borderColorFocus};
    background-color: ${formColors.backgroundColorsFocues};
  }

  &:disabled,
  &:disabled:hover {
    cursor: inherit;
    pointer-events: none;
    color: ${formColors.disabledTextColor};
    background: ${formColors.disabledBackgroundColor};
    border: 1px solid ${formColors.disabledBorderColor};
  }

  &.required {
    ${required}
  }
  &.invalid {
    ${invalid}
  }
`

export const SelectWrapper = styled.div`
  position: relative;
  &:after {
    position: absolute;
    top: 19px;
    right: 17px;
    margin-top: -0.2rem;
    width: 0;
    height: 0;
    content: "";
    pointer-events: none;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.4rem solid #373a3c;
  }
`

export const SelectContainer = styled.div`
  display: flex;

  &.required select {
    ${required}
  }
`
