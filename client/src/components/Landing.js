import React from "react";
import "../css/Landing.css";
// import SearchBox from "./SearchBox";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { HiPlusSm } from "react-icons/hi";
// import CardList from "./Cardlist";
// import { robots } from "../robots";
import { Link } from 'react-router-dom';
import homePic from '../assets/landingpage.png';

const Landing = () =>{
    return(
        <Container fluid className="mt-3 w-75"> 
            <Row>
                <div>
                    <h1 className="text-white fw-bold ">Next-gen Robot for Hire App</h1>
                    <h2 className="gradient-text fw-bold">for modern productivity</h2>
                    <div className="mt-4">
                    <p className="text-white">A platform that displays and recommends different robots that are suitable for different jobs as well as various statistics 
                    that represent the robot's capabilities so that customers can easily choose the best robot for them.</p>
                    </div>
                </div>
            </Row>
            <Row className="d-block center">
                <button className="bn31"><span className="bn31span">Sign in</span></button>
            </Row>
            <img src={homePic} className="img-fluid" width="500"/>
        </Container>
    );
}

export default Landing;