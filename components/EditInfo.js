import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 import Form from 'react-bootstrap/Form';
 
function EditInfo() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow} >Edit</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group className="mb-3">
        <Form.Label>Company Name</Form.Label>
        <Form.Control className="form-control" id="compName" name="compName"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Job Role</Form.Label>
        <Form.Control className="form-control" id="jobRole" name="jobRole"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Status</Form.Label>
        <Form.Select >
        <option hidden={true}>Select Status</option>
              <option disabled="disabled" default={true}> Select Status</option>
              <option>Applied</option>
              <option>Rejected</option>
              <option>Interviewed</option>
              <option>Technical</option>
              <option>Offer</option>
        </Form.Select>
      </Form.Group>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditInfo;