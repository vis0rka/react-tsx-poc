import { FormGroup, invalid, required } from "components/Form/StyledElements"
import styled from "styled-components"
import constants from "theme/constants"
import { formColors } from "../style"

export default styled(FormGroup)`
  .react-date-picker.react-date-picker--disabled {
    color: ${formColors.disabledTextColor};
    background: ${formColors.disabledBackgroundColor};
    border-color: ${formColors.disabledBorderColor};
    cursor: inherit;
  }
  .react-date-picker__inputGroup {
    padding: 0.375rem 0.75rem;
  }

  .react-date-picker.react-date-picker--open.react-date-picker--enabled .react-date-picker__inputGroup,
  .react-date-picker.react-date-picker--open.react-date-picker--enabled .react-date-picker__button {
    background: ${formColors.backgroundColorsFocues};
  }

  .react-date-picker--enabled .react-date-picker__button {
    background-color: ${formColors.backgroundColor};
  }
  .react-date-picker__button:enabled .react-date-picker__button__icon {
    stroke: ${formColors.iconColor};
    background-color: transparent;
  }
  .react-date-picker__button:enabled:hover .react-date-picker__button__icon {
    stroke: ${formColors.iconColorHover};
    background-color: transparent;
  }

  .react-date-picker {
    display: flex;
    font-family: "Open Sans", sans-serif;
  }
  .react-calendar,
  .react-calendar button {
    font-family: "Open Sans", sans-serif;
  }

  .react-calendar__navigation__label {
    font-size: 18px;
  }

  .react-calendar__navigation button {
    font-size: 20px;
  }

  .react-calendar__month-view__weekdays {
    font-size: 1em;
  }

  .react-calendar__month-view__days {
    font-size: 20px;
  }
  .react-date-picker__wrapper {
    flex-grow: 1;
    height: calc(1.5em + 0.75rem + 2px);
  }
  abbr[title] {
    text-decoration: none;
    font-weight: 600;
  }
  .react-date-picker--enabled .react-date-picker__inputGroup {
    cursor: pointer;
    background-color: ${formColors.backgroundColor};
  }

  input.react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__divider,
  .react-date-picker__inputGroup__leadingZero,
  .react-date-picker__inputGroup__input--hasLeadingZero {
    color: ${formColors.textColor};
  }

  input:disabled.react-date-picker__inputGroup__input,
  input:disabled + .react-date-picker__inputGroup__divider,
  input:disabled + .react-date-picker__inputGroup__leadingZero {
    color: ${formColors.disabledTextColor};
  }

  input:disabled.react-date-picker__inputGroup__input {
    color: ${formColors.disabledTextColor};
    background: ${formColors.disabledBackgroundColor};
    border: none;
    cursor: context-menu;
  }
  input.react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: 0;
    padding-left: 0;
  }

  .react-calendar__month-view__days__day {
    font-size: 16px;
    font-weight: 300;
  }
  .react-date-picker__wrapper {
    border-color: ${formColors.borderColor};
    border-radius: ${constants.buttonBorderRadius};
    overflow: hidden;
  }
  .react-date-picker.react-date-picker--disabled .react-date-picker__wrapper {
    border-color: ${formColors.disabledBorderColor};
  }

  .react-date-picker__wrapper:hover {
    border-color: ${formColors.borderColorHover};
  }
  .react-date-picker--open .react-date-picker__wrapper {
    border-color: ${formColors.borderColorFocus};
  }

  .react-calendar__tile--active {
    background-color: ${formColors.iconColorHover};
    border-radius: 100%;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${formColors.iconColorHover};
  }

  .required .react-date-picker__wrapper,
  .react-date-picker--disabled.required .react-date-picker__wrapper {
    ${required}
  }
  .required.invalid .react-date-picker__wrapper {
    ${invalid}
  }

  .react-date-picker__inputGroup input:hover,
  .react-date-picker__inputGroup input:focus {
    border: none;
  }

  .react-date-picker--disabled .react-date-picker__inputGroup {
    cursor: context-menu;
  }

  .react-date-picker {
    position: relative;
  }

  .react-date-picker__calendar {
    z-index: 2;
  }
`
