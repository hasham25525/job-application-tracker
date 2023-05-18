
import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import EditInfo from './EditInfo';
import MyNav from './MyNav'
import { FormContext } from './Context.js/FormContextProvider';

const HomePage = () => {

  const userApplication = useContext(FormContext);
  const { record, SaveData, Cancel, deleteItem, handleInput } = useContext(FormContext);

  // const [name, setName] = useState(record.name)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className='container '>
        <form className='col-sm-4 mx-auto shadow p-3 rounded' id='myForm' style={{ display: 'none' }} >
          <div className="mb-3 mt-3">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control" id="compName" name="compName"
              value={userApplication.compName}
              onChange={handleInput} />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Job Role</label>
            <input type="text" className="form-control" id="role" name="jobRole"
              value={userApplication.jobRole}
              onChange={handleInput} />
          </div>
          <div className="dropdown mb-3">
            Application Status:
            <select className="form-select" aria-label="status" name="jobStatus"
              value={userApplication.jobStatus}
              onChange={handleInput}>
              <option hidden={true}>Select Status</option>
              <option disabled="disabled" default={true}> Select Status</option>
              <option>Applied</option>
              <option>Rejected</option>
              <option>Interviewed</option>
              <option>Technical</option>
              <option>Offer</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success  mx-1" onClick={SaveData}> Submit</button>
          <button className="btn btn-danger mx-1 " onClick={Cancel}> Cancel</button>
        </form>
      </div>

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
                    <td className='p-2'> {curElem.jobRole}</td>
                    <td className='p-2'>{curElem.jobStatus}</td>
                    <td>

                      <Button variant='primary' onClick={handleShow} >Edit</Button>
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control className="form-control" id="compName" name="compName" value={userApplication.compName} />
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
          <Button variant="primary">Done</Button>
        </Modal.Footer>
      </Modal>
}

      </div>




    </>
  )
}

export default HomePage