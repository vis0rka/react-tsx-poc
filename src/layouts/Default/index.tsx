import React from "react";
import styled from "styled-components";

type OwnProps = {
  children: import("react").ReactNode;
  className?: string;
};

const DefaultLayout = ({ children, className = "" }: OwnProps) => (
  <Container>
    <ChildrenWrapper className={className}>{children}</ChildrenWrapper>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url("/img/appleback.jpg") no-repeat center center fixed;
  background-size: cover;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DefaultLayout;
