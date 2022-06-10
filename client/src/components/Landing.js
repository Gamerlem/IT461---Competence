import React from "react";
import "../css/Landing.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import homePic from '../assets/landingpage.png';
import useAuth from '../hooks/useAuth';

const Landing = () =>{
    const { auth, setAuth } = useAuth();
    let lbutton;
    if(auth.user){
        lbutton = <Link to="/robots"><button className="bn31"><span className="bn31span">Show me</span></button></Link>;
    }else{
        lbutton = <Link to="/login"><button className="bn31"><span className="bn31span">Sign in</span></button></Link>
    }
    return(
        <Container fluid className="mt-3 w-75 l-container"> 
            <Row>
                <div>
                    <h1 className="text-white fw-bold l-h1">Next-gen Robot for Hire App</h1>
                    <h2 className="gradient-text fw-bold l-h2">for modern productivity</h2>
                    <div className="mt-4">
                    <p className="text-white l-p">A platform that displays and recommends different robots that are suitable for different jobs as well as various statistics 
                    that represent the robot's capabilities so that customers can easily choose the best robot for them.</p>
                    </div>
                </div>
            </Row>
            <Row className="d-block center">
                {lbutton}
            </Row>
            <img src={homePic} className="img-fluid"/>
        </Container>
    );
}

export default Landing;