import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

type OwnProps = {
  title: string;
  children: import("react").ReactNode;
  className?: string;
};

const Framed = ({ title, children, className }: OwnProps) => {
  return (
    <Container>
      <Sidebar />
      <Header title={title} />
      <ChildrenWrapper className={className}>{children}</ChildrenWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ChildrenWrapper = styled.div`
  grid-area: main;
  padding: 1rem;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  margin: 1rem;
  max-height: 100vh;
  overflow-y: auto;
`;

export default Framed;
