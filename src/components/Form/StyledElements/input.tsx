import { formColors } from "components/Form/style"
import { invalid, required } from "components/Form/StyledElements"
import styled from "styled-components"

type InputProps = {
  isPhonefield?: boolean
}

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${formColors.backgroundColor};
  background-clip: padding-box;
  border: 1px solid ${formColors.borderColor};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${formColors.textColor};

  &:hover {
    border-color: ${formColors.borderColor};
    color: ${formColors.textColor};
  }
  &:focus {
    box-shadow: none;
    outline: none;
    background-color: ${formColors.backgroundColorsFocues};
    border-color: ${formColors.borderColorFocus};
    color: ${formColors.textColor};
  }

  &:disabled {
    cursor: inherit;
    color: ${formColors.disabledTextColor};
    background: ${formColors.disabledBackgroundColor};
    border: 1px solid ${formColors.disabledBorderColor};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px ${formColors.backgroundColor} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &.required {
    ${required}

    &:hover, &:focus {
      ${required}
    }
  }
  &.invalid {
    ${invalid}
    &:hover, &:focus {
      ${invalid}
    }
  }

  &:disabled:-webkit-autofill {
    border: 1px solid ${formColors.disabledBorderColor};
    box-shadow: 0 0 0px 1000px ${formColors.disabledBorderColor} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  ${(props: InputProps) => props.isPhonefield && "display: inline-flex; flex-grow: 1; width: inherit;"}
`
