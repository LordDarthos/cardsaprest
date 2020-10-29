import React, { useState, useEffect } from 'react';
import { Container, Modal } from 'react-bootstrap';
import ImportForm from './Form';

const ImportModal = ({isModalOpen, handleModalClose, handleOnSubmit}) => {
 
    return (
        <Modal show={isModalOpen} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ImportForm handleSubmit={handleOnSubmit} handleHide={handleModalClose}  />
              </Modal.Body>
              <Modal.Footer>
                  :'D
              </Modal.Footer>
            </Modal>
    )
            
}

export default ImportModal