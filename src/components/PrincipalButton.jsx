import React from "react";
import styled from 'styled-components'

function PrincipalButon({textButton}) {
  const PrincipalButton = styled.button`
    width: 55%;
    height: 29px;
    border: none;
    background: #659DB8;
    border-radius: 10px;
  `;
  return (
    <PrincipalButton>{textButton}</PrincipalButton>
  );
}

export default PrincipalButon;