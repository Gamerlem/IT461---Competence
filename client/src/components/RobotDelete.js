import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import '../css/deleteStyle.css';
 
const RobotDelete = ({showModal, hideModal,deleteHandler, name}) => {

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
            <img src={require('../assets/warning.png')} alt="warning" className="responsive"/>
            Delete Robot?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><div>Are you sure you want to delete <span className = "roboName">{name}</span> ?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="cancel" size ="customSize" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="delete" size="customSize" onClick={deleteHandler}>
            Delete
          </Button>

        </Modal.Footer>
      </Modal>
    );

}
 
export default RobotDelete;