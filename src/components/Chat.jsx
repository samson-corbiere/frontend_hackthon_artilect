import React from "react";
import ChatBot from "react-simple-chatbot";
import { Link } from "react-router-dom";
import OpenLink from "../OpenLink";
import "../notice/laser-SP100-notice.pdf";

import ChatWithIdSelected from "./ChatWithIdSelected"

const competenceLinkAlbert = `https://www.google.fr/Albert`;
const utiliserAlbert =
  "frontend_hackthon_artilect/src/notice/laser-SP100-notice.pdf";
const quiUtiliseAlbert = `https://www.instagram.fr/Albert`;
const realisationsAlbert = `https://www.myspace.fr/Albert`;
const infosAlbert = `https://www.youtube.fr/Albert`;

const competenceLinkCathy = `https://www.google.fr/Cathy`;
const utiliserCathy = `https://www.google.fr/utiliserCathy`;
const quiUtiliseCathy = `https://www.google.fr/quiUtiliseCathy`;
const realisationsCathy = `https://www.google.fr/realisationsCathy`;
const infosCathy = `https://www.google.fr/infosCathy`;

const competenceLinkFélicie = `https://www.google.fr/Félicie`;
const utiliserFélicie = `https://www.google.fr/utiliserFélicie`;
const quiUtiliseFélicie = `https://www.google.fr/quiUtiliseFélicie`;
const realisationsFélicie = `https://www.google.fr/realisationsFélicie`;
const infosFélicie = `https://www.google.fr/infosFélicie`;

const competenceLinkFabio = `https://www.google.fr/Fabio`;
const utiliserFabio = `https://www.facebook.fr/Fabio`;
const quiUtiliseFabio = `https://www.instagram.fr/Fabio`;
const realisationsFabio = `https://www.myspace.fr/Fabio`;
const infosFabio = `https://www.youtube.fr/Fabio`;

const competenceLinkNorbert = `https://www.google.fr/Norbert`;
const utiliserNorbert = `https://www.facebook.fr/Norbert`;
const quiUtiliseNorbert = `https://www.instagram.fr/Norbert`;
const realisationsNorbert = `https://www.myspace.fr/Norbert`;
const infosNorbert = `https://www.youtube.fr/Norbert`;

const voiciCommentMutiliser = "Voici comment m'utiliser";
const maListeDeCompetence = "Ma liste de compétence";
const savoirQuiMutilise = "Savoir qui m'utilise";
const projetsRealisesGraceAMoi = "Les projets réalisés grâce à moi";
const voirToutesLesInfosMeConcernant =
  "Voir toutes les informations me concernant";



class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      botId: 0
    };
  }

  componentDidMount() {
    console.log("--- CHAT CDM this.props.opened => " + this.props.opened);
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  };

  render() {
    const { opened, botId } = this.state;

    if (this.props.opened === true && opened === false) {
      this.setState({ opened: true });
      // this.state.opened = this.props.opened
      console.log("--- CHAT render in if");
      // console.log("CHAT render in if" .this.props.botId)
    }

    if (botId == !this.props.botId) {
      this.setState({ botId: this.props.botId });
      this.setState(
        {
          botId: this.props.botId
        },
        function() {
          console.log("--- CHAT setState completed", this.state);
          const a = this.state.botId
          console.log("--- CHAT setState completed suite a ==> ", a);
        }
      );
      console.log("--- CHAT  render if state ==! props id bot");
      console.log(
        "--- CHAT  render if state ==! props id bot PROPS " + this.props.botId
      );
      console.log(
        "--- CHAT  render if state ==! props id bot STATE " + this.state.botId
      );
    }

    if (this.props.botId == !0) {
      console.log("--- CHAT  render if IDBOT");
    } else {
      console.log("--- CHAT  render if else IDBOT ==> " + this.props.botId);
    }

    console.log("--- CHAT  render id bot STATE ==> " + this.state.botId);

    // const { value } = this.props.test;
    // console.log('value ==> ' +value)
    /* 
    opened={opened}
          toggleFloating={this.toggleFloating}
    */

    return (
      <div className="application">
        {/* {console.log("CHAT return this.props.opened => " + this.props.opened)}
          {console.log("CHAT return this.props.id => " + this.props.botId)} */}
        <ChatBot
          // mute possible par le user
          //   headerTitle="Speech Synthesis"
          //   speechSynthesis={{ enable: true, lang: 'fr' }}

          steps={[
            {
              id: "1",
              message:
                `Salut à toi, ami makers ! Avec quelle super machine veux-tu communiquer ?`,
              trigger: "2"
            },
            {
              id: "2",
              options: [
                { value: 1, label: "Albert LASER-SP100", trigger: "4" },
                { value: 2, label: "Cathy PRINT-CAMM1", trigger: "5" },
                { value: 3, label: "Félicie UV-LEF200", trigger: "6" },
                { value: 4, label: "Fabio FAB-ENDER1 ", trigger: "7" },
                { value: 5, label: "Norbert LASER-SP500 ", trigger: "8" }
              ]
            },
            {
              id: "4",
              message:
                "Je suis Albert LASER-SP100, la (presque) plus laser de toutes les imprimantes laser. Maintenant que nous sommes amis, voici comment mieux me connaître : ",
              trigger: "40"
            },
            {
              id: "40",
              options: [
                {
                  value: 1,
                  label: "Connaître mes compétences",
                  trigger: "411"
                },
                {
                  value: 2,
                  label: "Savoir comment m'utiliser",
                  trigger: "412"
                },
                { value: 3, label: "Savoir qui m'utilise", trigger: "413" },
                {
                  value: 4,
                  label: "Les projets réalisés grâce à moi :) ",
                  trigger: "414"
                },
                {
                  value: 5,
                  label: "Voir toutes les informations me concernant ",
                  trigger: "415"
                }
              ]
            },
            {
              id: "411",
              asMessage: true,
              component: <OpenLink id={1} type={"comp"} />,
              metadata: {
                text: maListeDeCompetence
              },
              trigger: "42"
            },
            {
              id: "412",
              asMessage: true,
              component: <OpenLink id={1} type={"utilisation"} />,
              metadata: {
                text: voiciCommentMutiliser
              },
              trigger: "42"
            },
            {
              id: "413",
              asMessage: true,
              component: <OpenLink id={1} type={"utilisateurs"} />,
              metadata: {
                text: savoirQuiMutilise
              },
              trigger: "42"
            },
            {
              id: "414",
              asMessage: true,
              component: <OpenLink id={1} type={"projets"} />,
              metadata: {
                text: projetsRealisesGraceAMoi
              },
              trigger: "42"
            },
            {
              id: "415",
              asMessage: true,
              component: <OpenLink id={1} type={"all"} />,
              metadata: {
                text: voirToutesLesInfosMeConcernant
              },
              trigger: "42"
            },
            {
              id: "42",
              options: [
                {
                  value: 1,
                  label: "J'aimerai en savoir plus sur toi",
                  trigger: "40"
                },
                {
                  value: 2,
                  label: "Je souhaite découvrir une nouvelle machine",
                  trigger: "2"
                }
              ]
            },
            {
              id: "5",
              message:
                "Je suis Cathy PRINT-CAMM1 la plus chipie des imprimantes ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
              trigger: "50"
            },
            {
              id: "50",
              options: [
                {
                  value: 1,
                  label: "Connaitre mes compétences",
                  trigger: "511"
                },
                {
                  value: 2,
                  label: "Savoir comment m'utiliser",
                  trigger: "512"
                },
                { value: 3, label: "Savoir qui m'utilise", trigger: "513" },
                {
                  value: 4,
                  label: "Les projets réalisés grace à moi :) ",
                  trigger: "514"
                },
                {
                  value: 5,
                  label: "Voir toutes les informations me concernant ",
                  trigger: "515"
                }
              ]
            },
            {
              id: "511",
              asMessage: true,
              component: <OpenLink id={2} type={"comp"} />,
              metadata: {
                text: maListeDeCompetence
              },
              trigger: "52"
            },
            {
              id: "512",
              asMessage: true,
              component: <OpenLink id={2} type={"utilisation"} />,
              metadata: {
                text: voiciCommentMutiliser
              },
              trigger: "52"
            },
            {
              id: "513",
              asMessage: true,
              component: <OpenLink id={2} type={"utilisateurs"} />,
              metadata: {
                text: savoirQuiMutilise
              },
              trigger: "52"
            },
            {
              id: "514",
              asMessage: true,
              component: <OpenLink id={2} type={"projets"} />,
              metadata: {
                text: projetsRealisesGraceAMoi
              },
              trigger: "52"
            },
            {
              id: "515",
              asMessage: true,
              component: <OpenLink id={2} type={"all"} />,
              metadata: {
                text: voirToutesLesInfosMeConcernant
              },
              trigger: "52"
            },
            {
              id: "52",
              options: [
                {
                  value: 1,
                  label: "J'aimerai en savoir plus sur toi",
                  trigger: "50"
                },
                {
                  value: 2,
                  label: "Je souhaite découvrir une nouvelle machine",
                  trigger: "2"
                }
              ]
            },
            {
              id: "6",
              message:
                "Je suis Félicie UV-LEF200, la plus brillante des imprimantes ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
              trigger: "60"
            },
            {
              id: "60",
              options: [
                {
                  value: 1,
                  label: "Connaitre mes compétences",
                  trigger: "611"
                },
                {
                  value: 2,
                  label: "Savoir comment m'utiliser",
                  trigger: "612"
                },
                { value: 3, label: "Savoir qui m'utilise", trigger: "613" },
                {
                  value: 4,
                  label: "Les projets réalisés grace à moi :) ",
                  trigger: "614"
                },
                {
                  value: 5,
                  label: "Voir toutes les informations me concernant ",
                  trigger: "615"
                }
              ]
            },
            {
              id: "611",
              asMessage: true,
              component: <OpenLink id={3} type={"comp"} />,
              metadata: {
                text: maListeDeCompetence
              },
              trigger: "62"
            },
            {
              id: "612",
              asMessage: true,
              component: <OpenLink id={3} type={"utilisation"} />,
              metadata: {
                text: voiciCommentMutiliser
              },
              trigger: "62"
            },
            {
              id: "613",
              asMessage: true,
              component: <OpenLink id={3} type={"utilisateurs"} />,
              metadata: {
                text: savoirQuiMutilise
              },
              trigger: "62"
            },
            {
              id: "614",
              asMessage: true,
              component: <OpenLink id={3} type={"projets"} />,
              metadata: {
                text: projetsRealisesGraceAMoi
              },
              trigger: "62"
            },
            {
              id: "615",
              asMessage: true,
              component: <OpenLink id={3} type={"all"} />,
              metadata: {
                text: voirToutesLesInfosMeConcernant
              },
              trigger: "62"
            },
            {
              id: "62",
              options: [
                {
                  value: 1,
                  label: "J'aimerai en savoir plus sur toi",
                  trigger: "60"
                },
                {
                  value: 2,
                  label: "Je souhaite découvrir une nouvelle machine",
                  trigger: "2"
                }
              ]
            },
            {
              id: "7",
              message:
                "Je suis Fabio FAB-ENDER1 le plus costaud des découpeurs ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
              trigger: "70"
            },
            {
              id: "70",
              options: [
                {
                  value: 1,
                  label: "Connaitre mes compétences",
                  trigger: "711"
                },
                {
                  value: 2,
                  label: "Savoir comment m'utiliser",
                  trigger: "712"
                },
                { value: 3, label: "Savoir qui m'utilise", trigger: "713" },
                {
                  value: 4,
                  label: "Les projets réalisés grace à moi :) ",
                  trigger: "714"
                },
                {
                  value: 5,
                  label: "Voir toutes les informations me concernant ",
                  trigger: "715"
                }
              ]
            },
            {
              id: "711",
              asMessage: true,
              component: <OpenLink id={4} type={"comp"} />,
              metadata: {
                text: maListeDeCompetence
              },
              trigger: "72"
            },
            {
              id: "712",
              asMessage: true,
              component: <OpenLink id={4} type={"utilisation"} />,
              metadata: {
                text: voiciCommentMutiliser
              },
              trigger: "72"
            },
            {
              id: "713",
              asMessage: true,
              component: <OpenLink id={4} type={"utilisateurs"} />,
              metadata: {
                text: savoirQuiMutilise
              },
              trigger: "72"
            },
            {
              id: "714",
              asMessage: true,
              component: <OpenLink id={4} type={"projets"} />,
              metadata: {
                text: projetsRealisesGraceAMoi
              },
              trigger: "72"
            },
            {
              id: "715",
              asMessage: true,
              component: <OpenLink id={4} type={"all"} />,
              metadata: {
                text: voirToutesLesInfosMeConcernant
              },
              trigger: "72"
            },
            {
              id: "72",
              options: [
                {
                  value: 1,
                  label: "J'aimerai en savoir plus sur toi",
                  trigger: "70"
                },
                {
                  value: 2,
                  label: "Je souhaite découvrir une nouvelle machine",
                  trigger: "2"
                }
              ]
            },
            {
              id: "8",
              message:
                "Je suis Norbert LASER-SP500, avec moi la découpe est précise ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
              trigger: "80"
            },
            {
              id: "80",
              options: [
                {
                  value: 1,
                  label: "Connaitre mes compétences",
                  trigger: "811"
                },
                {
                  value: 2,
                  label: "Savoir comment m'utiliser",
                  trigger: "812"
                },
                { value: 3, label: "Savoir qui m'utilise", trigger: "813" },
                {
                  value: 4,
                  label: "Les projets réalisés grace à moi :) ",
                  trigger: "814"
                },
                {
                  value: 5,
                  label: "Voir toutes les informations me concernant ",
                  trigger: "815"
                }
              ]
            },
            {
              id: "811",
              asMessage: true,
              component: <OpenLink id={5} type={"comp"} />,
              metadata: {
                text: maListeDeCompetence
              },
              trigger: "82"
            },
            {
              id: "812",
              asMessage: true,
              component: <OpenLink id={5} type={"utilisation"} />,
              metadata: {
                text: voiciCommentMutiliser
              },
              trigger: "82"
            },
            {
              id: "813",
              asMessage: true,
              component: <OpenLink id={5} type={"utilisateurs"} />,
              metadata: {
                text: savoirQuiMutilise
              },
              trigger: "82"
            },
            {
              id: "814",
              asMessage: true,
              component: <OpenLink id={5} type={"projets"} />,
              metadata: {
                text: projetsRealisesGraceAMoi
              },
              trigger: "82"
            },
            {
              id: "815",
              asMessage: true,
              component: <OpenLink id={5} type={"all"} />,
              metadata: {
                text: voirToutesLesInfosMeConcernant
              },
              trigger: "82"
            },
            {
              id: "82",
              options: [
                {
                  value: 1,
                  label: "J'aimerai en savoir plus sur toi",
                  trigger: "80"
                },
                {
                  value: 2,
                  label: "Je souhaite découvrir une nouvelle machine",
                  trigger: "2"
                }
              ]
            },
            {
              id: "15",
              message: "the end",
              end: true
            }
          ]}
          floating={true}
          opened={opened}
          toggleFloating={this.toggleFloating}
        />
      </div>
    );

    // if (this.props.botId === 0 || this.props.botId === undefined) {
    //   console.log("IIIINNNNN");
    //   return (
    //     <div className="application">
    //       {/* {console.log("CHAT return this.props.opened => " + this.props.opened)}
    //       {console.log("CHAT return this.props.id => " + this.props.botId)} */}
    //       <ChatBot
    //         // mute possible par le user
    //         //   headerTitle="Speech Synthesis"
    //         //   speechSynthesis={{ enable: true, lang: 'fr' }}

    //         steps={[
    //           {
    //             id: "1",
    //             message:
    //               "Salut à toi, ami makers ! Avec quelle super machine veux-tu communiquer ?",
    //             trigger: "2"
    //           },
    //           {
    //             id: "2",
    //             options: [
    //               { value: 1, label: "Albert LASER-SP100", trigger: "4" },
    //               { value: 2, label: "Cathy PRINT-CAMM1", trigger: "5" },
    //               { value: 3, label: "Félicie UV-LEF200", trigger: "6" },
    //               { value: 4, label: "Fabio FAB-ENDER1 ", trigger: "7" },
    //               { value: 5, label: "Norbert LASER-SP500 ", trigger: "8" }
    //             ]
    //           },
    //           {
    //             id: "4",
    //             message:
    //               "Je suis Albert LASER-SP100, la (presque) plus laser de toutes les imprimantes laser. Maintenant que nous sommes amis, voici comment mieux me connaître : ",
    //             trigger: "40"
    //           },
    //           {
    //             id: "40",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaître mes compétences",
    //                 trigger: "411"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "412"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "413" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grâce à moi :) ",
    //                 trigger: "414"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "415"
    //               }
    //             ]
    //           },
    //           {
    //             id: "411",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkAlbert} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "412",
    //             asMessage: true,
    //             component: (
    //               <Link to="/machine">
    //                 {" "}
    //                 <OpenLink link={utiliserAlbert} />{" "}
    //               </Link>
    //             ),
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "413",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseAlbert} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "414",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsAlbert} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "415",
    //             asMessage: true,
    //             component: <OpenLink link={infosAlbert} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "42",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "40"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "2"
    //               }
    //             ]
    //           },
    //           {
    //             id: "5",
    //             message:
    //               "Je suis Cathy PRINT-CAMM1 la plus chipie des imprimantes ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "50"
    //           },
    //           {
    //             id: "50",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "511"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "512"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "513" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "514"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "515"
    //               }
    //             ]
    //           },
    //           {
    //             id: "511",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkCathy} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "512",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserCathy} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "513",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseCathy} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "514",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsCathy} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "515",
    //             asMessage: true,
    //             component: <OpenLink link={infosCathy} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "52",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "50"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "2"
    //               }
    //             ]
    //           },
    //           {
    //             id: "6",
    //             message:
    //               "Je suis Félicie UV-LEF200, la plus brillante des imprimantes ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "60"
    //           },
    //           {
    //             id: "60",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "611"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "612"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "613" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "614"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "615"
    //               }
    //             ]
    //           },
    //           {
    //             id: "611",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkFélicie} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "612",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserFélicie} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "613",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseFélicie} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "614",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsFélicie} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "615",
    //             asMessage: true,
    //             component: <OpenLink link={infosFélicie} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "62",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "60"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "2"
    //               }
    //             ]
    //           },
    //           {
    //             id: "7",
    //             message:
    //               "Je suis Fabio FAB-ENDER1 le plus costaud des découpeurs ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "70"
    //           },
    //           {
    //             id: "70",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "711"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "712"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "713" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "714"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "715"
    //               }
    //             ]
    //           },
    //           {
    //             id: "711",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkFabio} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "712",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserFabio} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "713",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseFabio} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "714",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsFabio} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "715",
    //             asMessage: true,
    //             component: <OpenLink link={infosFabio} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "72",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "70"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "2"
    //               }
    //             ]
    //           },
    //           {
    //             id: "8",
    //             message:
    //               "Je suis Norbert LASER-SP500, avec moi la découpe est précise ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "80"
    //           },
    //           {
    //             id: "80",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "811"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "812"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "813" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "814"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "815"
    //               }
    //             ]
    //           },
    //           {
    //             id: "811",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkNorbert} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "812",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserNorbert} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "813",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseNorbert} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "814",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsNorbert} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "815",
    //             asMessage: true,
    //             component: <OpenLink link={infosNorbert} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "82",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "80"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "2"
    //               }
    //             ]
    //           },
    //           {
    //             id: "15",
    //             message: "the end",
    //             end: true
    //           }
    //         ]}
    //         floating={true}
    //         opened={opened}
    //         toggleFloating={this.toggleFloating}
    //       />
    //     </div>
    //   );
    // } else if (this.props.botId === 2) {
    //   console.log("ELLLLLSSSSSSSEEEEEE");
    //   let botIdForCahtBot = this.props.botId
    //   return (
    //     <div className="application2">
    //       <ChatBot
    //         // mute possible par le user
    //         //   headerTitle="Speech Synthesis"
    //         //   speechSynthesis={{ enable: true, lang: 'fr' }}
    //         steps={[
    //           {
    //             id: "200",
    //             options: [
    //               { value: 1, label: "Albert LASER-SP100", trigger: "4" },
    //               { value: 2, label: "Cathy PRINT-CAMM1", trigger: "5" },
    //               { value: 3, label: "Félicie UV-LEF200", trigger: "6" },
    //               { value: 4, label: "Fabio FAB-ENDER1 ", trigger: "7" },
    //               { value: 5, label: "Norbert LASER-SP500 ", trigger: "8" }
    //             ]
    //           },
    //           {
    //             id: "4",
    //             message:
    //               "Je suis Albert LASER-SP100, la (presque) plus laser de toutes les imprimantes laser. Maintenant que nous sommes amis, voici comment mieux me connaître : ",
    //             trigger: "40"
    //           },
    //           {
    //             id: "40",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaître mes compétences",
    //                 trigger: "411"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "412"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "413" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grâce à moi :) ",
    //                 trigger: "414"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "415"
    //               }
    //             ]
    //           },
    //           {
    //             id: "411",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkAlbert} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "412",
    //             asMessage: true,
    //             component: (
    //               <Link to="/machine">
    //                 {" "}
    //                 <OpenLink link={utiliserAlbert} />{" "}
    //               </Link>
    //             ),
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "413",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseAlbert} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "414",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsAlbert} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "415",
    //             asMessage: true,
    //             component: <OpenLink link={infosAlbert} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "42"
    //           },
    //           {
    //             id: "42",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "40"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "200"
    //               }
    //             ]
    //           },
    //           {
    //             id: "5",
    //             message:
    //               "Je suis Cathy PRINT-CAMM1 la plus chipie des imprimantes ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "50"
    //           },
    //           {
    //             id: "50",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "511"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "512"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "513" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "514"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "515"
    //               }
    //             ]
    //           },
    //           {
    //             id: "511",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkCathy} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "512",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserCathy} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "513",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseCathy} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "514",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsCathy} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "515",
    //             asMessage: true,
    //             component: <OpenLink link={infosCathy} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "52"
    //           },
    //           {
    //             id: "52",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "50"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "200"
    //               }
    //             ]
    //           },
    //           {
    //             id: "6",
    //             message:
    //               "Je suis Félicie UV-LEF200, la plus brillante des imprimantes ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "60"
    //           },
    //           {
    //             id: "60",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "611"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "612"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "613" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "614"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "615"
    //               }
    //             ]
    //           },
    //           {
    //             id: "611",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkFélicie} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "612",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserFélicie} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "613",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseFélicie} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "614",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsFélicie} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "615",
    //             asMessage: true,
    //             component: <OpenLink link={infosFélicie} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "62"
    //           },
    //           {
    //             id: "62",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "60"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "200"
    //               }
    //             ]
    //           },
    //           {
    //             id: "7",
    //             message:
    //               "Je suis Fabio FAB-ENDER1 le plus costaud des découpeurs ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "70"
    //           },
    //           {
    //             id: "70",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "711"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "712"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "713" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "714"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "715"
    //               }
    //             ]
    //           },
    //           {
    //             id: "711",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkFabio} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "712",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserFabio} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "713",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseFabio} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "714",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsFabio} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "715",
    //             asMessage: true,
    //             component: <OpenLink link={infosFabio} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "72"
    //           },
    //           {
    //             id: "72",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "70"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "200"
    //               }
    //             ]
    //           },
    //           {
    //             id: "8",
    //             message:
    //               "Je suis Norbert LASER-SP500, avec moi la découpe est précise ! Maintenant que nous sommes amis, voici comment mieux me connaitre : ",
    //             trigger: "80"
    //           },
    //           {
    //             id: "80",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "Connaitre mes compétences",
    //                 trigger: "811"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Savoir comment m'utiliser",
    //                 trigger: "812"
    //               },
    //               { value: 3, label: "Savoir qui m'utilise", trigger: "813" },
    //               {
    //                 value: 4,
    //                 label: "Les projets réalisés grace à moi :) ",
    //                 trigger: "814"
    //               },
    //               {
    //                 value: 5,
    //                 label: "Voir toutes les informations me concernant ",
    //                 trigger: "815"
    //               }
    //             ]
    //           },
    //           {
    //             id: "811",
    //             asMessage: true,
    //             component: <OpenLink link={competenceLinkNorbert} />,
    //             metadata: {
    //               text: maListeDeCompetence
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "812",
    //             asMessage: true,
    //             component: <OpenLink link={utiliserNorbert} />,
    //             metadata: {
    //               text: voiciCommentMutiliser
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "813",
    //             asMessage: true,
    //             component: <OpenLink link={quiUtiliseNorbert} />,
    //             metadata: {
    //               text: savoirQuiMutilise
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "814",
    //             asMessage: true,
    //             component: <OpenLink link={realisationsNorbert} />,
    //             metadata: {
    //               text: projetsRealisesGraceAMoi
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "815",
    //             asMessage: true,
    //             component: <OpenLink link={infosNorbert} />,
    //             metadata: {
    //               text: voirToutesLesInfosMeConcernant
    //             },
    //             trigger: "82"
    //           },
    //           {
    //             id: "82",
    //             options: [
    //               {
    //                 value: 1,
    //                 label: "J'aimerai en savoir plus sur toi",
    //                 trigger: "80"
    //               },
    //               {
    //                 value: 2,
    //                 label: "Je souhaite découvrir une nouvelle machine",
    //                 trigger: "200"
    //               }
    //             ]
    //           },
    //           {
    //             id: "15",
    //             message: "the end",
    //             end: true
    //           }
    //         ]}
    //         floating={true}
    //         opened={opened}
    //         toggleFloating={this.toggleFloating}
    //       />
    //     </div>
    //   );
    // } else {
    //   <p>loading</p>
    // }
  }
}

export default Chat;
