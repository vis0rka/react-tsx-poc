import { formColors } from "components/Form/style";
import styled from "styled-components";
import colors from "theme/colors";

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  color: white;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 0.8rem 4.5rem;
  margin-top: 30px;
  background: linear-gradient(to right, ${colors.yellow}, ${colors.orange});
  border: none;
  text-transform: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.1s;

  :hover {
    color: #fff;
    border: none;
    background: linear-gradient(to right, ${colors.yellow}, ${colors.orange});
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
`;

type LoadingButtonProps = {
  isSubmitting: boolean;
};

export const StyledButton = styled.button`
  color: #fff;
  padding: 0.8rem 1rem 0.8rem 0rem;
  margin-top: 30px;
  background: ${colors.green};
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.1s;
  display: flex;

  :hover {
    color: #fff;
    border: none;
    background: ${colors.green};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
`;

export const StyledLoadingButton = styled(StyledButton)`
  ${(props: LoadingButtonProps) =>
    props.isSubmitting && "background-color: darkseagreen; pointer-events: none; padding-right: 0;"}
`;

type InputProps = {
  isPhonefield?: boolean;
};

export const Input = styled.input`
  border-color: ${formColors.borderColor};
  color: ${formColors.textColor};

  &:hover {
    border-color: ${formColors.borderColorHover};
    color: ${formColors.textColor};
  }
  &:focus {
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
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  .required {
    border-left: 2px solid orange;
  }
  &[aria-invalid="true"] {
    border-left: 2px solid red;
  }

  &:disabled:-webkit-autofill {
    border: 1px solid ${colors.formDisabledBorder};
    box-shadow: 0 0 0px 1000px ${colors.formDisabledBorder} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  ${(props: InputProps) => props.isPhonefield && "display: inline-flex; flex-grow: 1; width: inherit;"}
`;

export const Select = styled.select`
  &:not(:disabled) {
    color: ${formColors.textColor};
    border-color: ${formColors.borderColor};
  }

  &:not(:disabled):hover {
    border-color: ${formColors.borderColorHover};
  }
  &:not(:disabled):focus {
    border-color: ${formColors.borderColorFocus};
  }

  & {
    margin-right: 5px;
    padding-right: 30px !important;
    width: initial;
  }

  &:disabled,
  &:disabled:hover {
    cursor: inherit;
    pointer-events: none;
    color: ${formColors.disabledTextColor};
    background: ${formColors.disabledBackgroundColor};
    border: 1px solid ${formColors.disabledBorderColor};
  }

  &[aria-required="true"] {
    border-left: 2px solid orange;
  }
  &[aria-invalid="true"] {
    border-left: 2px solid red;
  }
`;

export const Label = styled.label`
  color: ${formColors.labelColor};
`;
