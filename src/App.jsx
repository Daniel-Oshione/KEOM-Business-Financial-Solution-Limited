import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import NavLinks from './components/nav.jsx'
import HomePage from './Pages/Home.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'

function App() {
  return (
    <>
    <div className="App !pl-10 !pr-10">
      <NavLinks />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </div>
    </>
  )
}

export default App
