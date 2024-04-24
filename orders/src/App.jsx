import { useState } from 'react'
import Orders from './assets/components/Orders'
import './App.css'
import Navbar from './assets/components/Navbar'
import Form from './assets/components/Form'

function App() {

  return (
    <>
      <Navbar />
      <Orders />
      <Form />
    </>
  )
}

export default App
