import { Row, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import '../css/RobotView.css';

const RobotView = () => {
    const location = useLocation();
    const robot = location.state.robot;

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
                            <p className='id-txt'><strong>ID#{robot.id}</strong></p>
                            <img className='robot-img' src={`https://robohash.org/${robot.id}`} alt=''/>
                        </div>
                        <div className='info-container'>
                            <div className='info-txt'>
                                <h1 className='view-robot-name'>{robot.robotname}</h1>
                                <hr className='underline' />
                                <p className='v_txt_2'><em>Created : {robot.created} | Updated : {robot.updated}</em></p>
                                <p className='v_txt_1'>Capabilities :</p>
                                <p className='v_txt_2'>{robot.capabilities}</p>
                            </div>
                        </div>
                    </span>
                </Container>
            </Container>
        </div>
    );
}

export default RobotView;