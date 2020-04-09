import { Button, Title } from "components/StyledDomElements/index";
import DefaultLayout from "layouts/Default";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "theme/colors";

class Index extends Component<{ className: "" }> {
  render() {
    return (
      <DefaultLayout className={this.props.className}>
        <div className="login-wrapper">
          <div className="login-header">
            <Title>LOGO</Title>
          </div>
          <LoginForm>
            <Link to="/home">
              <Button>Belépés</Button>
            </Link>
          </LoginForm>
        </div>
      </DefaultLayout>
    );
  }
}

const StyledIndex = styled(Index)`
  .login-wrapper {
    margin: auto;
    background-color: ${colors.grey1};
    width: 600px;
    height: 400px;

    .login-header {
      display: flex;
      justify-content: center;
      background-color: ${colors.yellow};
    }
  }
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
`;

export default StyledIndex;
