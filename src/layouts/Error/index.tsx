import React from "react";
import styled from "styled-components";

function Error({ statusCode = 404 }) {
  return (
    <Figure>
      <Img src={`https://http.cat/${statusCode}`} />
    </Figure>
  );
}

const Figure = styled.figure`
  height: 100%;
  width: 100%;
  text-align: center;
`;

const Img = styled.img`
  height: 100%;
`;

export default Error;
