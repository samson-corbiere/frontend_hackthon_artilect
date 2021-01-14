import React from "react";
import styled from 'styled-components';

import markbois from "./img/markbois.png";

const Status = styled.input`
  width: 6em;
  height: 1.4em;
  left: 48px;
  top: 288px;
  background: #F6D398;
  border-radius: 50px;
  border:none;
  color: white;
  font-size: 60%;
`

const WrapCard = styled.div`
  width: 7em;
  height: 8em;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 19px -2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WrapItem = styled.div`
  margin: auto;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
`
const Img = styled.img`
  position: absolute;
  width: 120%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    filter: grayscale(90%);
    width: 170%;
    transition-property: filter width;
    transition-duration: 0.3s;
  }
`
const Machine = styled.img`
  width: 1.5em;
`
const ProjetTitle = styled.h2`
  font-size: 65%;
`
const WrapImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 7em;
  height: 4em;
`

const cardSquareUser = () => {
  return (
    <WrapCard>
      <WrapImg>
        <img src={markbois} alt={src} />
      <Img src="https://fabcafe-manager.com/uploads/project_image/743/project_image.jpg" alt="Image Projet"/>
      </WrapImg>
      <ProjetTitle>Nom de projet</ProjetTitle>
      <WrapItem>
        <Status type="button" value="en cours"/>
        <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/183/LASER-SP100-Plan%20de%20travail%2080-200x200.png" alt="Machine"/>
      </WrapItem>
    </WrapCard>
  );
};

export default cardSquareUser;