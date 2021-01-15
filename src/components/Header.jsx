import React from "react";
import styled from "styled-components";

import logo from "../img/logo.png";
import hello from "../img/hello.png";
import deco from "../img/deco.png";

const WrapHeader = styled.div`
  display: flex;
  color-background: whrite;
  align-items: center;
  align-content: space-around;
  height: 4em;
`;

const Logo = styled.img`
  height: 3em;
  margin: 1em;
  filter: grayscale(60%);
`;
const Hello = styled.img`
  height: 1.5em;
  margin: 1em;
`;
const Deco = styled.img`
  height: 1.5em;
  margin-left: 5.5em;
`;

const Header = () => {
  return (
    <WrapHeader>
      <Logo src={logo} alt="logo" />
      <p>| Hello John ! |</p>
      <Hello src={hello} alt="logo" />
      <Deco src={deco} alt="deco" />
    </WrapHeader>
  );
};

export default Header;
