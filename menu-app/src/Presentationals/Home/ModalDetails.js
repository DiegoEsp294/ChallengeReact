import React from 'react';
import '../../css/Home.css';
import { Modal } from 'react-bootstrap';

function ModalDetails({ 
    show, 
    closeButton,
    totalAmount,
    preparationTime,
    avg_healthScore
  }) {
    return (
      <Modal 
        show={show} 
        centered
        onHide={closeButton}
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <h5 className="card-text">total amount: ${totalAmount}</h5>
            <h5 className="card-text">Preparation time: {preparationTime}</h5>
            <h5 className="card-text">healt Score: {avg_healthScore}</h5>
            <h5 className="card-text">Vegan: 2</h5>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default ModalDetails;