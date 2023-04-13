import MyNav from '@/components/MyNav'
import React from 'react'
import FormContextProvider from '@/components/Context.js/FormContextProvider'
import HomePage from '@/components/HomePage'

const index = () => {
  return (
    <>
    <FormContextProvider>
 
      <HomePage />
      </FormContextProvider>
    </>
  )
}

export default index