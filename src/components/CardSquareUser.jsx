import React from "react";
import styled from 'styled-components';
import '../styles/card_square.css'

const WrapCard = styled.div`
  width: 13em;
  height: 14em;
  margin: 5% auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 19px -2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none
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
  width: 2em;
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
  filter: grayscale(60%);
  
`
const Machine = styled.img`
  width: 1.5em;
`
const ImgMark = styled.div`
  width: 30px;
  height: 30px;
  z-index: 11;
  left: 35%;
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
width: 13em;
height: 9em;
`

const cardSquareUser = ({photo_maker, title, bookmark}) => {
  return (
    <WrapCard>
          <WrapImg>
            <ImgMark className="hex" alt="markerBois" style={{backgroundImage:`${bookmark}`}}/>
            <Img src={photo_maker} alt="User" />
          </WrapImg>
          <ProjetTitle>{title}</ProjetTitle>
          <WrapItems>
            <WrapCompetence>
              <WrapLevel>
                <imgCompetence />
              </WrapLevel>
            </WrapCompetence>
            <WrapMachine>
              <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/183/LASER-SP100-Plan%20de%20travail%2080-200x200.png" alt="Machine" />
              <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/183/LASER-SP100-Plan%20de%20travail%2080-200x200.png" alt="Machine" />
            </WrapMachine>
          </WrapItems>
    </WrapCard>
  );
};

export default cardSquareUser;