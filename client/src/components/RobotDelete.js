import React from 'react'
import { Modal, Button } from "react-bootstrap";
import './deleteStyle.css';
 
const DeleteRobot = ({showModal, hideModal}) => {

    return (
        <Modal 
            show={showModal}
            onHide={hideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header >
          <Modal.Title>
            <img src={require('./warning.png')} alt="warning" className="responsive"/>
            Delete Robot?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><div>Are you sure you want to delete <span className = "roboName">RoboPrim</span> ?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="cancel" size ="customSize" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="delete" size="customSize" onClick={hideModal }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );

}
 
export default DeleteRobot;