import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import NavLinks from './components/nav.jsx'
import HomePage from './Pages/Home.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import Footer from './components/footer.jsx'
import NotFound from './Pages/notFound.jsx'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout lets the new route render completely before scrolling
    const scrollTimer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, [pathname]);
  return (
    <>
    <div className="App">
      <NavLinks />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
