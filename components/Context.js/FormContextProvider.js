import React from 'react'
import { createContext, useState } from 'react';
import HomePage from '../HomePage';
import Add from '../newNav'


export const FormContext = createContext();


const FormContextProvider = (props) => {

    const [userApplication, setUserApplication] = useState({
        compName: "",
        jobRole: "",
        jobStatus: ""
    });

    

    const [record, setRecord] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUserApplication({ ...userApplication, [name]: value })
    };

    const SaveData = (e) => {
        // e.preventDefault();
        const newData = { ...userApplication, id: new Date().getTime().toString(), name: userApplication }
        
        setRecord([...record, newData]);
        console.log(record);
        setUserApplication(null);
        
        
     
    }
  
    // delete the items
    const deleteItem = (index) => {
        const updateditems = record.filter((curElem) => {
            return index !== curElem.id;
        });
        setRecord(updateditems);
    }

  
    const updateUser = (id, updatedUser) => {
        setRecord(record.map((record) => record.id === id ? updatedUser : record))
    }

    return (
        <FormContext.Provider record={record} value={{ userApplication, setUserApplication, record, setRecord, SaveData, deleteItem, handleInput, updateUser }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider