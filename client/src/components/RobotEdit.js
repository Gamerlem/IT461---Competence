import '../css/RobotEdit.css'
import Header from './Header';
import { Row, Col, Container, Form } from "react-bootstrap"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RobotEdit = ({updateHandler}) => {
    const location = useLocation();
    const robot = location.state.robot;
    console.log(robot);
    const [name, setName] = useState(robot.robotname);
    const [cap, setCap] = useState(robot.capabilities);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Name is required!");
            return;
        }
        if (!cap ) {
            alert("Capabilities are required!");
            return;
        }
        robot.robotname = name;
        robot.capabilities = cap;
        updateHandler(robot);
        navigate('/robots');
    }

    return (
        <div>
            <Container fluid className="w-75 mt-3">
                <Row className='mb-3'>
                    <Col className="p-0" lg={12} md={12} sm={12}>
                        <Link to ="/robots">
                            <h1 className="back label">&lt;Back</h1>
                        </Link>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col className="p-0" lg={12} md={12} sm={12}>
                        <h1 className="label">Your Robot for Hire</h1>
                    </Col>
                </Row>
                <Form onSubmit = {formHandler}>
                    <Row className='border-gradient'>
                        <Col className="m-auto p-0" lg={5} md={5} sm={12}>
                            <div className='container'>
                                <span className='col'>
                                    <div className='img-container'>
                                        <Row>
                                            <Col lg={6} md={6} sm={6}>
                                                <p className='name-txt'><strong>{robot.robotname}</strong></p>
                                                <p className='date-txt'><strong>{robot.created}</strong></p>
                                            </Col>
                                            <Col lg={6} md={6} sm={6}>
                                                <p className='id-txt'><strong>ID#{robot.id}</strong></p>
                                            </Col>
                                        </Row>
                                        <img className='robot-img' src={`https://robohash.org/${robot.id}`} alt=''/>
                                    </div>
                                </span>
                            </div>
                        </Col>
                        <Col className="m-auto text-white form-container" lg={7} md={7} sm={12}>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label className='text-left p-0'>Name</Form.Label>
                                <Form.Control type="text" name='name' defaultValue={robot.robotname} onChange={(e)=>{setName(e.target.value)}} />
                            </Form.Group>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label className='text-left p-0'>Capabilities</Form.Label>
                                <Form.Control as="textarea" rows={3} name='capabilities' defaultValue={robot.capabilities} onChange={(e)=>{setCap(e.target.value)}} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col lg={12} md={12} sm={12} className="text-right p-0" >
                            <button className="bn37">
                                <span className="btn-text">Update  <img className="btn-img" src={require('../assets/update.png')} /></span>
                            </button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default RobotEdit;