import React from "react";
import styled, { keyframes } from 'styled-components'


function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}

const StatusEnCours = styled.input`
  width: 6em;
  background: #F6D398;
  border-radius: 50px;
  border:none;
  color: white;
  font-size: 60%;
`
const StatusOk = styled.input`
  width: 6em;
  background: #6ED9BF;
  border-radius: 50px;
  border:none;
  color: white;
  font-size: 60%;
`
const StatusKo = styled.input`
  width: 6em;
  background: #D96E6E;
  border-radius: 50px;
  border:none;
  color: white;
  font-size: 60%;
  animation: ${blinkingEffect} 1s linear infinite;
`

const WrapCard = styled.div`
  width: 20em;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 19px -2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 25px;
  text-align: center;
 
`
const WrapItem = styled.div`
  margin: auto;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
    padding-bottom: 5%;
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
  width: 13%;
`
const ProjetTitle = styled.h2`
  font-size: 100%;
`
const WrapImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 20em;
  height: 9em;
`

const CardSquare = ({ title, status, image_project, name_machine, photo_machine }) => {
  return (
    <div>
      <WrapCard>
        <WrapImg>
          <Img src={image_project} alt="Image Projet" />
        </WrapImg>
        <ProjetTitle>{title}</ProjetTitle>
        <WrapItem>

          {status === "En cours" ? (
            <StatusEnCours className="button-project" type="button" value={status} />) :
            status === "Terminé" ? (
              <StatusOk className="button-project" type="button" value={status} />
            ) :
              (
                <StatusKo className="button-project" type="button" value={status} />
              )}
          <Machine src={photo_machine} alt={name_machine} />
        </WrapItem>
      </WrapCard>

    </div>
  );
};

export default CardSquare;