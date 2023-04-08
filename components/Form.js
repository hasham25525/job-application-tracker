import React, { useState } from 'react'; 



function SaveData() {
  document.getElementById("myForm").style.display = "none";
}
function Cancel() {
  document.getElementById("myForm").style.display = "none";

}



const Form = () => {

  const [userApplication, setUserApplication] = useState({
    compName: "",
    jobRole: "",
    jobStatus: ""
  });


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value
    console.log(name, value);
  
    setUserApplication({...userApplication, [name]:value})
  };
  
  return (
    <>
      <div className='container '>
        <form className='col-sm-4 mx-auto ' id='myForm' style={{ display: 'none' }} >
          <div className="mb-3 mt-3">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control" id="compName" name="comp-name"
              value={userApplication.compName}
              onChange={handleInput} />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Job Role</label>
            <input type="text" className="form-control" id="role" name="role"
              value={userApplication.jobRole}
              onChange={handleInput} />
          </div>
          <div className="dropdown mb-3">
            Application Status:
            <select className="form-select" aria-label="status" name="app-status"
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
    </>
  )
}

export default Form