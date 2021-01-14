import React from "react";
import styled from 'styled-components'

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

const cardSquare = ({image_project, title, status, photo_machine, name_machine}) => {
  return (
    <WrapCard>
      <WrapImg>
      <Img src={image_project} alt="Image Projet" />
      </WrapImg>
      <ProjetTitle>{title}</ProjetTitle>
      <WrapItem>
        <Status type="button" value={status}/>
        <Machine src={photo_machine} alt={name_machine}/>
      </WrapItem>
    </WrapCard>
  );
};

export default cardSquare;