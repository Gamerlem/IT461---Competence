import React from "react";
import "../css/Landing.css"
import SearchBox from "./SearchBox";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HiPlusSm } from "react-icons/hi";
import CardList from "./Cardlist";
import { robots } from "../robots";
import { Link } from 'react-router-dom';


const Landing = () => {
    return(
        <Container fluid className="w-75 mt-3">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <h1 className="label">Your Robots for Hire</h1>
                </Col>
                <Col className="m-auto" lg={6} md={12} sm={12}>
                    <div className="action-container">
                        <Link to ="/createBot">
                            <button className="bn37">
                                <span className="btn-text">Create</span>
                                <HiPlusSm className="add-icon"/>
                            </button>
                        </Link>
                        <SearchBox />
                    </div>
                </Col>
            </Row>
            <CardList robots = {robots} />
        </Container>
    );
}

export default Landing;