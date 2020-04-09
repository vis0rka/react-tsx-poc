import { StyledLoadingButton } from "components/StyledDomElements/index";
import React from "react";
import styled from "styled-components";

type LoadinButtonProps = {
  children: string;
  isSubmitting: boolean;
} & React.HTMLProps<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement>;

const LoadingButton = ({ children, isSubmitting }: LoadinButtonProps) => {
  return (
    <StyledLoadingButton isSubmitting={isSubmitting} type="submit">
      <I className="fas fa-check"></I>
      <span>{children}</span>
      {isSubmitting ? <I className="fas fa-spinner rotate"></I> : null}
    </StyledLoadingButton>
  );
};

const I = styled.img`
  margin: 0 1rem;

  &.rotate {
    font-size: 20px;
    animation: rotation 1.5s infinite linear;
  }
  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
`;

export default LoadingButton;
