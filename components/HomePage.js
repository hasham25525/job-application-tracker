
import React, { useState, useContext } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap/';
import { FormContext } from './Context.js/FormContextProvider';
import FormContextProvider from './Context.js/FormContextProvider';

const HomePage = () => {

  const { record, deleteItem, SaveData } = useContext(FormContext);

  // const [name, setName] = useState(record.name)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [rowEdit, setRowEdit]= useState(null);
  const handleEditRow =(id)=>{
    setRowEdit(id);
    handleShow();
}

  
  return (
    <>

      <div className='container'>
        <table className=' table table-hover table-bordered p-3 col-md-8 my-3 '>
          <tbody className='align-items-center '>
            <tr>
              <th className=''>Company Name</th>
              <th className=''>Job Role</th>
              <th className=''>Job Status</th>
              {/* <th className=''>Actions </th> */}
            </tr>
            {
              record.map((curElem) => {
                return (
                  <tr key={curElem.id}>
                    <td className='p-2'>{curElem.compName}</td>
                    <td className='p-2'>{curElem.jobRole}</td>
                    <td className='p-2'>{curElem.jobStatus}</td>
                    <td>

                      <Button variant='primary' onClick={()=> handleEditRow(curElem.id)} >Edit</Button>
                      <Button className='btn btn-danger mx-1 px-2' onClick={() => deleteItem(curElem.id)}>Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


      { 
      
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        defaultValue={rowEdit!==null && record[rowEdit]}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control className="form-control" id="compName" name="compName" value={record.compName} onChange={handleEditRow}  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Job Role</Form.Label>
            <Form.Control className="form-control" id="jobRole" name="jobRole" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Status</Form.Label>
            <Form.Select >
              <option hidden={true} >Select Status</option>
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
          <Button variant="primary" onClick={SaveData}>Done</Button>
        </Modal.Footer>
      </Modal>
}

      </div>




    </>
  )
}

export default HomePage