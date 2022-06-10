import React from "react";
import "../css/Home.css"
import SearchBox from "./SearchBox";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HiPlusSm } from "react-icons/hi";
import CardList from "./Cardlist";
import { Link } from 'react-router-dom';



const Home = ({bots, getBots, deleteHandler}) => {
    const paginationHandler = (e) => {
        
        e.preventDefault();
        const name = e.target.getAttribute('data-name');
        if (name in bots?.metadata?.links) {
            const url = bots.metadata.links[name];
            getBots(url);
        }
    }
    return(
        <Container fluid className="w-75 mt-3">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <h1 className="label">Your Robots for Hire</h1>
                </Col>
                <Col className="m-auto" lg={6} md={12} sm={12}>
                    <div className="action-container">
                        <Link to ="/robots/create">
                            <button className="bn37">
                                <span className="btn-text">Create</span>
                                <HiPlusSm className="add-icon"/>
                            </button>
                        </Link>
                        <SearchBox />
                    </div>
                </Col>
            </Row>
            
            {bots?.data?.length
                ? (
                    <>
                   <CardList robots = {bots} deleteHandler = {deleteHandler} />
                    {bots?.metadata?.links?.previous ? 
                        <a
                            href="#"
                            data-name="previous"
                            onClick={paginationHandler}
                            className="backker"
                        >&lt;Back</a>
                        : ''
                    }
                    {bots?.metadata?.links?.next ? 
                        <a
                            href="#"
                            data-name="next"
                            onClick={paginationHandler}
                            className="backker"
                        > Next&gt; </a>
                        : ''
                    }
                    </>
                ) : <p>No robots to display</p>
            }
        </Container>
    );
}

export default Home;