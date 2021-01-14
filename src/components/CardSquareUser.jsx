import React from "react";
import styled from 'styled-components';

import markbois from "../img/markbois.png";
import user from "../img/user1.jpeg";
import imgCompetence from "./imgCompetence";

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
  const WrapItems = styled.div`
  display: flex,
  align-items: center;
`

  const WrapMachine = styled.div`
  margin: auto;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
`
const WrapLevel = styled.div`
`

const WrapCompetence = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

const Img = styled.img`
  width: 110%;
  z-index:10;
  position: absolute;
  bottom: 5%;
  filter: grayscale(20%);
  
`
const Machine = styled.img`
  width: 1.5em;
`
const ImgMark = styled.img`
  width: 1em;
  z-index: 11;
  position: absolute;
  margin: 0 0 0 5.8em;
`
const ProjetTitle = styled.h2`
  font-size: 65%;
  color: #606060;
`
const WrapImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 7em;
  height: 5em;
`

const cardSquareUser = () => {
  return (
    <WrapCard>
      <WrapImg>
      <ImgMark src={markbois} alt="markerBois" />
      <Img src={user} alt="User"/>
      </WrapImg>
      <ProjetTitle>Nom de la personne</ProjetTitle>
      <WrapItems>
      <WrapCompetence>
        <WrapLevel>
          <imgCompetence />
        </WrapLevel>
      </WrapCompetence>
      <WrapMachine>
        <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/183/LASER-SP100-Plan%20de%20travail%2080-200x200.png" alt="Machine"/>
        <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/183/LASER-SP100-Plan%20de%20travail%2080-200x200.png" alt="Machine"/>
      </WrapMachine>
      </WrapItems>
    </WrapCard>
  );
};

export default cardSquareUser;