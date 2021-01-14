import React from "react";
import styled from 'styled-components'

function PrincipalTitle({textTitle}) {
  const Div = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
  `;

  const PrincipalTitle = styled.h1`
    width: 293px;
    height: 32px;
    left: 41px;
    top: 79px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    color: #659DB8;
  `;
  return (
    <Div>
      <PrincipalTitle>{textTitle}</PrincipalTitle>
    </Div>
  );
}

export default PrincipalTitle;