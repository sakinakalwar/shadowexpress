import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from "./Pages/Navbar"
function App() {
  return (
    <>
    <Routes>
      <Route path='nav' element={<Navbar/>}/>
    </Routes>
    </>
  )
}

export default App
