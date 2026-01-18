import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Compliance from './pages/Compliance'
import Contact from './pages/Qoute'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsappButton'

const App = () => {
  return (
    <div>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App