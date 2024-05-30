import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import './global.css'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
