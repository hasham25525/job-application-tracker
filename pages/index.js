import Form from '@/components/Form'
import Nav from '@/components/Nav'
import React from 'react'
import FormContextProvider from '@/components/Context.js/FormContextProvider'

const index = () => {
  return (
    <>
      <Nav />
      <FormContextProvider>
      <Form />
      </FormContextProvider>
    </>
  )
}

export default index