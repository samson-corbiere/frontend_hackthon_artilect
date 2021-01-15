import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CardSquare from '../components/CardSquare';
import PrincipalTitle from '../components/PrincipalTitle';
//import data from "../static/projet.json";
import styled from 'styled-components';
import axios from 'axios';

const CardsContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  margin-bottom: 40%
`
class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projectListData: [],
        };
      }

    getProjectList() {
        const url = "http://localhost:5000/api/projects";
        axios.get(url)
        .then((response) => response.data)
        .then((projectListArray) => this.setState({ projectListData: projectListArray }))
      }


      componentDidMount() {
          this.getProjectList() 
      }
  
        render(){
            
        const { projectListData } = this.state;
        console.log("projectListData", projectListData)
                return (
                    <div>
                    <PrincipalTitle textTitle={"Les projets"} />
                        <CardsContainer>
                            {projectListData.map(e =>
                                <Link to={`/projectMachineUser/${e.id}`}  style={{ textDecoration: "none" }}>
                                    <CardSquare
                                    image_project={e.image}
                                    title={e.project_name}
                                    status={e.status}
                                    photo_machine={e.url_photo}
                                    name_machine={e.pseudo} />
                                </Link>
                            )}
                        </CardsContainer>
                </div>
            );
        }
}


export default ProjectsList;