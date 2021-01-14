import React from "react";
import styled from 'styled-components'

function PrincipalTitle({textTitle}) {

  const PrincipalTitle = styled.h1`
    left: 41px;
    top: 79px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #659DB8;
  `;
  return (
      <PrincipalTitle>{textTitle}</PrincipalTitle>
  );
}

export default PrincipalTitle;