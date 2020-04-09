import { StyledButton } from "components/StyledDomElements/index";
import React from "react";
import styled from "styled-components";

type StyleButtonProps = {
  children: string;
  icon: string;
} & React.HTMLProps<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement>;

const ButtonWithIcon = (props: StyleButtonProps) => {
  return (
    <StyledButton className="button-with-icon">
      <I className={props.icon}></I>
      <span>{props.children}</span>
    </StyledButton>
  );
};

const I = styled.i`
  margin: 0 1rem;
`;

export default ButtonWithIcon;
