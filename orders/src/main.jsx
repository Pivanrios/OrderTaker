import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Orders from './assets/components/Orders.jsx';
import Form from './assets/components/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
        <Route path='orders' element={<Orders/>}/>
        <Route path='/' element={<Form/>}/>
      </Routes>
  </BrowserRouter>,
)
