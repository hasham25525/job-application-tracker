import React, { useState , useContext} from 'react';
 import Form from 'react-bootstrap/Form';
 import { FormContext } from './Context.js/FormContextProvider';
const Add = () => {

    const userApplication = useContext(FormContext);
    const { record, SaveData, Cancel, deleteItem,  handleInput} = useContext(FormContext);

  return (
    <>


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
    
    </>
  )
}

export default Add