import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Link
} from "react-router-dom";

const voiciCommentMutiliser = "Voici comment m'utiliser";
const maListeDeCompetence = "Ma liste de compétence";
const savoirQuiMutilise = "Savoir qui m'utilise";
const projetsRealisesGraceAMoi = "Les projets réalisés grâce à moi";
const voirToutesLesInfosMeConcernant =
  "Voir toutes les informations me concernant";

class OpenLink extends Component {
  render() {
    // const link = this.props.link;
    const id = this.props.id;
    const type = this.props.type;
    const text = this.props.step.metadata.text || "";
    console.log("id in openlink => " + id);
    console.log("id in openlink => " + type);
    console.log("id in openlink => " + text);

    let link;
    if (id === 1) {
      switch (type) {
        case "comp":
          console.log("this is a fictory");
          link = <Link to="/machine/1#competence">{maListeDeCompetence}</Link>;
          break;
        case "utilisation":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/1#utilisation">{voiciCommentMutiliser}</Link>
          );
          break;
        case "utilisateurs":
          console.log("this is a fictory");
          link = <Link to="/machine/1#communaute">{savoirQuiMutilise}</Link>;
          break;
        case "projets":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/1#projets">{projetsRealisesGraceAMoi}</Link>
          );
          break;
        case "all":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/1#all">{voirToutesLesInfosMeConcernant}</Link>
          );
          break;
      }
    } else if (id == 2) {
      switch (type) {
        case "comp":
          console.log("this is a fictory");
          link = <Link to="/machine/2#competence">{maListeDeCompetence}</Link>;
          break;
        case "utilisation":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/2#utilisation">{voiciCommentMutiliser}</Link>
          );
          break;
        case "utilisateurs":
          console.log("this is a fictory");
          link = <Link to="/machine/2#communaute">{savoirQuiMutilise}</Link>;
          break;
        case "projets":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/2#projets">{projetsRealisesGraceAMoi}</Link>
          );
          break;
        case "all":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/2#all">{voirToutesLesInfosMeConcernant}</Link>
          );
          break;
      }
    } else if (id == 3) {
      switch (type) {
        case "comp":
          console.log("this is a fictory");
          link = <Link to="/machine/3#competence">{maListeDeCompetence}</Link>;
          break;
        case "utilisation":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/3#utilisation">{voiciCommentMutiliser}</Link>
          );
          break;
        case "utilisateurs":
          console.log("this is a fictory");
          link = <Link to="/machine/3#communaute">{savoirQuiMutilise}</Link>;
          break;
        case "projets":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/3#projets">{projetsRealisesGraceAMoi}</Link>
          );
          break;
        case "all":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/3#all">{voirToutesLesInfosMeConcernant}</Link>
          );
          break;
      }
    } else if (id == 4) {
      switch (type) {
        case "comp":
          console.log("this is a fictory");
          link = <Link to="/machine/4#competence">{maListeDeCompetence}</Link>;
          break;
        case "utilisation":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/4#utilisation">{voiciCommentMutiliser}</Link>
          );
          break;
        case "utilisateurs":
          console.log("this is a fictory");
          link = <Link to="/machine/4#communaute">{savoirQuiMutilise}</Link>;
          break;
        case "projets":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/4#projets">{projetsRealisesGraceAMoi}</Link>
          );
          break;
        case "all":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/4#all">{voirToutesLesInfosMeConcernant}</Link>
          );
          break;
      }
    } else if (id == 5) {
      switch (type) {
        case "comp":
          console.log("this is a fictory");
          link = <Link to="/machine/5#competence">{maListeDeCompetence}</Link>;
          break;
        case "utilisation":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/5#utilisation">{voiciCommentMutiliser}</Link>
          );
          break;
        case "utilisateurs":
          console.log("this is a fictory");
          link = <Link to="/machine/5#communaute">{savoirQuiMutilise}</Link>;
          break;
        case "projets":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/5#projets">{projetsRealisesGraceAMoi}</Link>
          );
          break;
        case "all":
          console.log("this is a fictory");
          link = (
            <Link to="/machine/5#all">{voirToutesLesInfosMeConcernant}</Link>
          );
          break;
      }
    }

    // const text = this.props.step.metadata.text || "";
    return link;
  }
}

export default OpenLink;

/* 

import React, {Component} from "react";

class OpenLink extends Component {

    render() {
        const link = this.props.link
        // const link = this.props.step.metadata.link || '';
        const text = this.props.step.metadata.text || '';
        return (
            <a href={link} target="_blank" rel="noreferrer">
                {text}
            </a>
        );
    }
}

export default OpenLink;


*/
