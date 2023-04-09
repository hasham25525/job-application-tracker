import React, { useState } from 'react';



const Form = () => {

  const [userApplication, setUserApplication] = useState({
    compName: "",
    jobRole: "",
    jobStatus: ""
  });

  const [record, setRecord] = useState([])



  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setUserApplication({ ...userApplication, [name]: value })
  };

  const SaveData = (e) => {
    e.preventDefault();
    const newData = { ...userApplication, id: new Date().getTime().toString() }
    console.log(record);
    setRecord([...record, newData]);
    document.getElementById("myForm").style.display = "none";
  }
  const Cancel = (e) => {
    e.preventDefault();
    document.getElementById("myForm").style.display = "none";

  }
  return (
    <>
      <div className='container '>
        <form className='col-sm-4 mx-auto ' id='myForm' style={{ display: 'none' }} >
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
          <button type="submit" className="btn btn-success" onClick={SaveData}> Submit</button>
          <button className="btn btn-danger" onClick={Cancel}> Cancel</button>
        </form>
      </div>

      <div className='container '>
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
      </div>

      {/* <table>
        <tbody>
        <tr>
          <td>Company Name</td>
          <td>Job Role</td>
          <td>Job Status</td>
        </tr>
        {
          record.map((curElem) => {
            return (
              <tr>
                <td>{curElem.compName}</td>
                <td> {curElem.jobRole}</td>
                <td>{curElem.jobStatus}</td>
              </tr>
            )
          })
        }
    </tbody>
      </table> */}
    </>
  )
}

export default Form