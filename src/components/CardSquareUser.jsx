import React from "react";
import styled from 'styled-components';
import '../styles/card_square.css';
import axios from "axios";
import bonbon from "../img/markbonbons.png"
import wood from "../img/markbois.png"
import coton from "../img/markcoton.png"
import metal from "../img/markmetal.png"
import pierre from "../img/markpierre.png"


const WrapCard = styled.div`
  width: 20em;
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
  justify-content: center;
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
   width: 108%;
    z-index: 10;
    position: absolute;
    bottom: -20%;
    -webkit-filter: grayscale(60%);
    filter: grayscale(60%);
  
`
const Machine = styled.img`
    width: 12%;
    padding-bottom: 5%;
    padding-top: 2%;
`
const ImgMark = styled.img`
  width: 30px;
    z-index: 11;
    left: 58%;
    position: absolute;
    margin: 0 0 0 5.8em;
`
const ProjetTitle = styled.h2`
  font-size: 100%;
  color: #606060;
`
const WrapImg = styled.div`
    position: relative;
    overflow: hidden;
    width: 20em;
    height: 9em;
`

const cardSquareUser = ({ photo_maker, title, bookmark }) => {


  return (
    <WrapCard>
      <WrapImg>
        {console.log(`bookmark, ${bookmark}`)}
        {bookmark.includes("wood") ?
          (<ImgMark alt="markerBois" src={wood} />)
          :
          bookmark.includes("caoutchouc") ?
            (<ImgMark alt="Caoutchouc" src={bonbon} />)
            :
            bookmark.includes("brick") ?
              (<ImgMark alt="Brick" src={pierre} />)
              :
              bookmark.includes("cotton") ?
                (<ImgMark alt="Cotton" src={coton} />)
                :
                <ImgMark alt="Métal" src={metal} />
        }

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
          <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/8/LASER-SP500-Plan%20de%20travail%2079-200x200.png" alt="Machine" />
          <Machine src="https://artilect.fr/wp-content/uploads/doliconnect/product/183/LASER-SP100-Plan%20de%20travail%2080-200x200.png" alt="Machine" />
        </WrapMachine>
      </WrapItems>
    </WrapCard>
  );
};

export default cardSquareUser;