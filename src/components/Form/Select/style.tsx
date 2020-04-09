import { formColors } from "components/Form/style"
import { FormGroup, invalid, required } from "components/Form/StyledElements"
import styled from "styled-components"
import constants from "theme/constants"

export const SelectFormGroup = styled(FormGroup)`
  .react-select__option {
    padding: 0.375rem 0.75rem;
    color: ${formColors.labelColor};
    background-color: #fff;
    &:hover {
      background-color: ${formColors.backgroundColorOnHoverSelect};
      color: #fff;
      cursor: pointer;
    }
    &.react-select__option--is-selected {
      background-color: #fff;
      color: ${formColors.labelColorSelected};
      cursor: inherit;
    }
    &.react-select__option--is-selected:hover {
      background-color: #fff;
      color: ${formColors.labelColorSelected};
      cursor: inherit;
    }
  }
  .react-select__control {
    border-radius: ${constants.buttonBorderRadius};
    font-size: 16px;
    height: 38px;
    min-height: fit-content;
    box-shadow: none;
    background-color: ${formColors.backgroundColor};
    border-color: ${formColors.borderColor};
    &:hover {
      border-color: ${formColors.borderColorHover};
    }
    &.react-select__control--is-focused {
      background-color: ${formColors.backgroundColorsFocues};
      border-color: ${formColors.borderColorFocus};
    }
    &.react-select__control--is-disabled {
      cursor: inherit;
      background-color: ${formColors.disabledBackgroundColor};
      border: 1px solid ${formColors.disabledBorderColor};
    }
  }
  .react-select__value-container {
    max-height: 38px;
    padding: 0.375rem 0.75rem;
    margin-top: -1px;
    cursor: pointer;
  }
  .react-select__menu {
    border-radius: 0px;
    margin-top: 0px;
    z-index: 2;
    .react-select__menu-list {
      border-radius: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }
  .react-select__placeholder {
    color: ${formColors.labelColor};
    font-size: 16px;
  }
  .react-select__input {
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .react-select__single-value {
    color: ${formColors.textColor};
    &.react-select__single-value--is-disabled {
      color: ${formColors.disabledTextColor};
    }
  }
  .react-select__multi-value {
    border-radius: ${constants.buttonBorderRadius};
    background-color: ${formColors.backgroundColorOnHoverSelect};
    margin: 0px 2px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .react-select__multi-value__label {
      color: #fff;
      padding: 6px;
    }
    .react-select__multi-value__remove {
      cursor: pointer;
      color: #fff;
      border-radius: 0px;
      padding: 6px;
      &:hover {
        color: #fff;
        background-color: ${formColors.iconColorHover};
      }
    }
  }
  .react-select__indicators {
    .react-select__indicator-separator {
      display: none;
    }
    .react-select__dropdown-indicator,
    .react-select__clear-indicator {
      cursor: pointer;
      color: ${formColors.iconColor};
      &:hover {
        color: ${formColors.iconColorHover};
      }
    }
  }
  .required > div:first-of-type {
    ${required}
  }
  .required.invalid > div:first-of-type {
    ${invalid}
  }
`
