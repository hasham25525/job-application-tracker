
import React, { useState, useContext } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap/';
import { FormContext } from './Context.js/FormContextProvider';
import FormContextProvider from './Context.js/FormContextProvider';
import Model from './Model';

const HomePage = () => {

  const { record, setRecord, setUserApplication, userApplication, deleteItem, SaveData } = useContext(FormContext);

  const [modalData, setModalData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleEditRow = (index) => {
    const editedItem = record.find((curElem) => {
      return curElem.id === index;
    })
    // setUserApplication(editedItem);
    setModalData(editedItem);
    handleShow();
  }

  console.log("rec",record)


  const [rowEdit, setRowEdit] = useState([]);

  const edited = (e) => {
    setRowEdit(rowEdit.map((modalData, id) => {
      if (id !== handleEditRow)
        return setRecord(modalData);
    }))
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
              <th className=''>Actions </th>
            </tr>
            {
              record.map((curElem) => {
                return (
                  <tr key={curElem.id}>
                    <td className='p-2' >{curElem.compName}</td>
                    <td className='p-2'>{curElem.jobRole}</td>
                    <td className='p-2'>{curElem.jobStatus}</td>
                    <td>

                      <Button variant='primary' onClick={() => { handleEditRow(curElem.id); setModalData(curElem) }} >Edit</Button>
                      <Button className='btn btn-danger mx-1 px-2' onClick={() => deleteItem(curElem.id)}>Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


        <Model
          show={show}
          handleClose={handleClose}
          modalData={modalData}
          edited={edited}
          setModalData={setModalData}
          setRecord={setRecord}
          record={record}
        />

      </div>

    </>
  )
}

export default HomePage

