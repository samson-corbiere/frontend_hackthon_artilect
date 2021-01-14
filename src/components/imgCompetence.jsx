import React from "react";
import bois from "../img/bois.png";
import code from "../img/code.png";
import electro from "../img/ELECTRO.png";
import couture from "../img/couture.png";
import meca from "../img/progra.png";
import styled from "styled-components";

const Img = styled.img`
  width: 3em;
`
const imgCompetence0 = [
  meca,
  couture,
  electro,
];

const imgCompetence1 = [
  code,
  bois,
  ""
];

function getRandomImg(img) {
  const randomImg = img[Math.floor(Math.random() * img.length)];
  return randomImg;
};

function getRandomImg1(img) {
  const randomImg = img[Math.floor(Math.random() * img.length)];
  return randomImg;
};

const imgCompetence = () => {
  let imgComp = getRandomImg(imgCompetence0);
  let imgComp1 = getRandomImg1(imgCompetence1)
  return (
    <div>
    <Img src={imgComp} alt="compétence"/>
    <Img src={imgComp1} alt="compétence"/>
    {console.log(imgComp1)}
    </div>
  )
}

export default imgCompetence;
