import React, { FunctionComponent, SVGProps } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "theme/colors";

type NavLinkProps = {
  path: string;
  label: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

const NavLinkComp = ({ path, label, Icon }: NavLinkProps) => (
  <NavLink activeClassName="active" to={path}>
    <ALink>
      <Navicon>
        <Icon />
      </Navicon>
      <Span>{label}</Span>
    </ALink>
  </NavLink>
);

const ALink = styled.div`
  text-decoration: none;
  color: ${colors.purple};
  text-align: center;
  border-bottom: 1px solid ${colors.grey1};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    font-family: inherit;
    background-color: ${colors.grey3};
  }
`;

const Navicon = styled.div`
  width: 40px;
  height: 40px;
  fill: ${colors.purple};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export default NavLinkComp;
