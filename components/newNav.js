import Nav from 'react-bootstrap/Nav';
import React, { useState , useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormContext } from './Context.js/FormContextProvider';
import { Form } from 'react-bootstrap';

function Add(props) {
    
    const userApplication = useContext(FormContext);
    const { record, SaveData, Cancel, deleteItem,  handleInput} = useContext(FormContext);

    return (
      <Modal
        {...props}
        size="md"

       
      >
        <Modal.Header closeButton>
          <Modal.Title >
            Add Applicant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <Form.Group className="mb-3">
        <Form.Label>Company Name</Form.Label>
        <Form.Control className="form-control" id="compName" name="compName" 
         value={userApplication.compName}
         onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Job Role</Form.Label>
        <Form.Control className="form-control" id="jobRole" name="jobRole"  
         value={userApplication.jobRole}
         onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Status</Form.Label>
        <Form.Select name="jobStatus" value={userApplication.jobStatus}
              onChange={handleInput}>
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
          <Button variant='secondary' onClick={props.onHide}>Close</Button>
          <Button variant='success' onClick={SaveData}>Add</Button>

        </Modal.Footer>
      </Modal>
    );
  }
const MyNav = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
      <nav className="navbar  navbar-light bg-body-tertiary " >
                 <div className="container-fluid">
                     <a className="navbar-brand">
                         Job Application Tracker
                     </a>
                     <a className="d-flex" >

                         <Button variant="primary" onClick={() => setModalShow(true)} >Add Job</Button>
                     </a>
                     <form className="d-flex">
                         <input className="form-control me-2" type="text" placeholder="Search" />
                         <button className="btn btn-light" type="button">Search</button>
                     </form>
                 </div>
             </nav>
       
  
        <Add
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
    }
export default MyNav;