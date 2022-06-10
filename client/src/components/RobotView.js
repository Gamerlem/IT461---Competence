import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/RobotView.css';

const RobotView = () => {
    return (
        <div>
            <Container fluid className='view-body'>
                <Row className='subtitle-view'>
                    <Col lg={12} md={12} sm={12} className='p-0'>
                        <Link to ="/robots" style={{textDecoration:'none'}}>
                            <h1 className="backbtn">&lt;Back</h1>
                        </Link>
                    </Col>
                </Row>
                <Row className='subtitle-view'>
                    <Col lg={12} md={12} sm={12} className='p-0'>
                        <h3>Your Robot for Hire</h3>
                    </Col>
                </Row>
                <Container fluid className='container-robot'>
                    <span className='container-col'>
                        <div className='img-container'>
                            <p className='id-txt'><strong>ID#231</strong></p>
                            <img className='robot-img' src='https://robohash.org/1' alt=''/>
                        </div>
                        <div className='info-container'>
                            <div className='info-txt'>
                                <h1 className='view-robot-name'>RoboPrim</h1>
                                <hr className='underline' />
                                <p className='v_txt_1'>Manufacturer : Lhora</p>
                                <p className='v_txt_2'><em>Created : June 06, 2022 | Updated : June 06, 2022</em></p>
                                <p className='v_txt_1'>Capabilities :</p>
                                <p className='v_txt_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </span>
                </Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-right" >
                        <button className="vp-updatebtn">Update</button>
                        <button className="vp-deletebtn">Delete</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RobotView;