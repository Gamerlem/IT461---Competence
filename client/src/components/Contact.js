import React from "react";
import "../css/Landing.css";
import "../css/Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import homePic from '../assets/landingpage.png';


const Contact = () =>{
    return(
        <Container fluid className="mt-3 w-75 l-container"> 
            <Row>
                <div>
                    <h2 className="gradient-text fw-bold l-h2">Contact Page</h2>
                    <div className="mt-4">
                    <p className="text-white l-p"></p>
                    </div>
                </div>
            </Row>
            <form class="form">
                <p type="Name:"><input placeholder="Write your name here.."></input></p>
                <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
                <button className="bnc">Send Message</button>
            </form>
            <img src={homePic} className="img-fluid"/>

        </Container>
    );
}

export default Contact;