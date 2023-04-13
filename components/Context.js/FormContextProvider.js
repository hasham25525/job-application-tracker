import React from 'react'
import { createContext, useState } from 'react'

export const FormContext = createContext();



const FormContextProvider = (props) => {

    const [userApplication, setUserApplication] = useState({
        compName: "",
        jobRole: "",
        jobStatus: ""
      });

  return (
   <FormContext.Provider value={userApplication}>
    {props.children}
   </FormContext.Provider>
  )
}

export default FormContextProvider