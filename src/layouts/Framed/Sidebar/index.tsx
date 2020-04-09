import React from "react";
import styled from "styled-components";
import colors from "theme/colors";
import Navigation from "./Navigation";

const Sidebar = () => (
  <Container className="sidebar">
    <Header>
      <Logo>LOGO</Logo>
    </Header>
    <Navigation />
    <Footer>
      <p>Build dátum:1990</p>
    </Footer>
  </Container>
);

const Container = styled.div`
  grid-area: sidebar;
  background-color: ${colors.grey2};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${colors.grey1};
`;

const Header = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.yellow};
`;

const Logo = styled.div`
  font-size: 30px;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: ${colors.purple};
`;

export default Sidebar;
