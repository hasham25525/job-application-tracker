
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import EditInfo from './EditInfo';
import { FormContext } from './Context.js/FormContextProvider';

const Form = () => {

  const userApplication = useContext(FormContext);

  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setUserApplication({ ...userApplication, [name]: value })
  };

  const SaveData = (e) => {
    e.preventDefault();
    const newData = { ...userApplication, id: new Date().getTime().toString(), name: userApplication }
    console.log(record);
    setRecord([...record, newData]);
    document.getElementById("myForm").style.display = "none";
  }
  const Cancel = (e) => {
    e.preventDefault();
    document.getElementById("myForm").style.display = "none";

  }

  // delete the items
  const deleteItem = (index) => {
    const updateditems = record.filter((curElem) => {
      return index !== curElem.id;
    });
    setRecord(updateditems);
  }
  //edit the item
  const editItem = (id) => {
    let newEditItem = record.find((curElem) => {
      return curElem.id === id;
    })
    console.log(newEditItem);
  }

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

      {/* <div className='container '>
        <div className='col-md-6'>
          {
            record.map((curElem) => {
              return (
                <div className='mycont '>
                  <div className=' p-5'>
                    <p><b>Company Name: </b>{curElem.compName}</p>
                    <p><b>Job Role:</b> {curElem.jobRole}</p>
                    <p><b>Application Status:</b> {curElem.jobStatus}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> */}

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
                      <EditInfo />
                      <Button className='btn btn-danger mx-1 px-2' onClick={() => deleteItem(curElem.id)}>Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Form