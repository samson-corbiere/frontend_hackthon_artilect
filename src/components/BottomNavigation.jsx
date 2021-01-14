import React, { Component } from "react";
import StyleSheet from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import App from "../App";
import machineImg from "../img/machine22.png";
import projectImg from "../img/project.png";
import communauteImg from "../img/communaute.png";
import playImg from "../img/play.png";

class BottomNavigation extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <NavLink to="/machines">
            <img src={machineImg} alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/projets">
            <img src={projectImg} alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/communaute">
            <img src={communauteImg} alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/direct">
            <img src={playImg} alt="" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default BottomNavigation;
