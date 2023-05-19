import React from 'react'
import { createContext, useState } from 'react';
import HomePage from '../HomePage';
import Add from '../newNav'


export const FormContext = createContext();



const FormContextProvider = (props, defaultValue) => {

    const [userApplication, setUserApplication] = useState(defaultValue||{
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
        e.preventDefault();
        const newData = { ...userApplication, id: new Date().getTime().toString(), name: userApplication }
        console.log(record);
        setRecord([...record, newData]);
        
    }
  
    // delete the items
    const deleteItem = (index) => {
        const updateditems = record.filter((curElem) => {
            return index !== curElem.id;
        });
        setRecord(updateditems);
    }
    //edit the item
    // const editItem = (id) => {
    //     let newEditItem = record.find((curElem) => {
    //         return curElem.id === id;
    //     })
    //     console.log(newEditItem);
    // }

  
    const updateUser = (id, updatedUser) => {
        setRecord(record.map((record) => record.id === id ? updatedUser : record))
    }

    return (
        <FormContext.Provider value={{ userApplication, setUserApplication, record, setRecord, SaveData, deleteItem, handleInput, updateUser }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider