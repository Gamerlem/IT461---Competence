import {useState} from "react";
import "../css/Card.css"
import 'bootstrap/dist/css/bootstrap.css';
import RobotDelete from "./RobotDelete";
import { Link } from "react-router-dom";

const Card = ({robot, deleteHandler}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteBot = () =>{
        deleteHandler(robot);
        handleClose();
    }

    return(
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img alt="robot" src={`https://robohash.org/${robot.id}`}/>
                </div>
                <div className="contentBx">
                    <h2 className="robot-name">{robot.robotname}</h2>
                    <div className="size">
                        <h3>{robot.created}</h3>
                    </div>
                    <div className="color">
                        <h3>{robot.capabilities}</h3>
                    </div>
                    <div className="btn-container">
                        <Link to={'/robots/edit/${robot.id}'} state={{robot}}> Edit </Link>
                        {/* <button onClick={handleShow}>Delete</button> */}
                        <a href="#" className="a-bot" onClick={handleShow}>Delete</a>
                    </div>
                </div>
            </div>
            <RobotDelete showModal = {show} hideModal={handleClose} deleteHandler={deleteBot} name = {robot.robotname}/>
        </div>
    );
}

export default Card;