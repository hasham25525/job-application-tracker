import React from 'react'
import { createContext, useState } from 'react'

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
        e.preventDefault();
        const newData = { ...userApplication, id: new Date().getTime().toString(), name: userApplication }
        console.log(record);
        setRecord([...record, newData]);
        // document.getElementById("myForm").style.display = "none";
    }
    const Cancel = (e) => {
        e.preventDefault();
        // document.getElementById("myForm").style.display = "none";

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
        <FormContext.Provider value={{ userApplication, setUserApplication, record, setRecord, SaveData, Cancel, deleteItem, editItem , handleInput}}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider