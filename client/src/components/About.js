import React from "react";
import "../css/Landing.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import homePic from '../assets/landingpage.png';
import useAuth from '../hooks/useAuth';

const About = () =>{
    return(
        <Container fluid className="mt-3 w-75 l-container"> 
            <Row>
                <div>
                    <h2 className="gradient-text fw-bold l-h2">About Page</h2>
                    <div className="mt-4">
                    <p className="text-white l-p">
A robot is the product of the robotics field, where programmable machines are built that can assist humans or mimic human actions. Robots were originally built to handle monotonous tasks (like building cars on an assembly line), but have since expanded well beyond their initial uses to perform tasks like fighting fires, cleaning homes and assisting with incredibly intricate surgeries. Each robot has a differing level of autonomy, ranging from human-controlled bots that carry out tasks that a human has full control over to fully-autonomous bots that perform tasks without any external influences.</p>
                    </div>
                </div>
            </Row>
            <img src={homePic} className="img-fluid"/>
        </Container>
    );
}

export default About;