import React, { ReactElement } from "react";
import { NavLink, Switch, Route, match } from "react-router-dom";
import styled from "styled-components";
import colors from "theme/colors";

type TabProps = {
  children: Array<React.ReactElement> | React.ReactElement;
  match: match;
};


const Tabs = ({ children, match }: TabProps) => {
  return (
    <>
      <TabsContainer>
        {children &&
          React.Children.map(
            children,
            (child: ReactElement) =>
              React.cloneElement(
                <NavLink activeClassName="active" to={`${match.url}${child.props.relativPath}`}>
                  <Span>{child.props.label}</Span>
                </NavLink>
              )
          )}
      </TabsContainer>
      <TabsPage>
        <Switch>
          {children &&
            React.Children.map(children, (child: ReactElement) =>
              React.cloneElement(
                <Route exact path={`${match.path}${child.props.relativPath}`} component={child.props.component}></Route>
              )
            )}
        </Switch>
      </TabsPage>
    </>
  );
};

const TabsContainer = styled.div`
  display: flex;
  font-size: 0.875rem;
  position: relative;
  margin-bottom: -1px;
  z-index: 1;

  a {
    padding: 20px;
    color: ${colors.purple};
    border: 1px solid transparent;
    &:not(.btn):hover,
    &:not(.btn):focus {
      color: ${colors.purple};
    }

    &:not(:first-child) {
      margin-left: 3px;
    }
    &.active {
      background-color: ${colors.grey4};
      border-top: 1px solid ${colors.grey1};
      border-left: 1px solid ${colors.grey1};
      border-right: 1px solid ${colors.grey1};
    }
  }
`;
const Span = styled.span`
  font-weight: bold;
`;

const TabsPage = styled.div`
  border: 1px solid ${colors.grey1};
  padding: 20px;
  background: ${colors.grey4};
  max-height: calc(100% - 3 * 20px);
`;

export default Tabs;
