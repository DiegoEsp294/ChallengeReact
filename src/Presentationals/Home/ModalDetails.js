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
        <Modal.Header closeButton><h5>TOTAL</h5></Modal.Header>
        <Modal.Body className="modal-body">
          <div className="container">
            <div className="row text-left">
              <h3 className="card-text" style={{ marginBlockEnd: '20px' }}>${totalAmount}</h3>
              <h6 className="card-text lead">
                <small> 
                  PREPARATION TIME: <span>{preparationTime}</span> 
                </small>
              </h6>
              <h6 className="card-text lead">
                <small> 
                  HEALT SCORE: <span>{avg_healthScore}</span> 
                </small>
              </h6>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default ModalDetails;