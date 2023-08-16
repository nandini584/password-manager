import React from 'react'
import GenerateRandomPswd from '../Components/GenerateRandomPswd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'

const App = () => {
  return (
   <div className=''>
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App