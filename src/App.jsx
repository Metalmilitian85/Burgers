import React from 'react'
import './index.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Locations from './Components/Locations'
import Contact from './Components/Contact'
import Careers from './Components/Careers'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import Food from './Components/Food'
import Foodinfo from './Components/Foodinfo'
import Cart from './Components/Cart'
import { CartProvider } from './Context/CartContext'

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/food" element={<Food />} />
            <Route path="/food/:id" element={<Foodinfo />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
