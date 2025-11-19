import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Consulting from '../pages/services/Consulting'
import Staffing from '../pages/services/Staffing'
import Training from '../pages/services/Training'
import ITSolutions from '../pages/services/ITSolutions'
import Industries from '../pages/Industries'
import Careers from '../pages/Careers'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import { Routes, Route } from 'react-router-dom'
function Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/consulting' element={<Consulting />} />
            <Route path='/services/staffing' element={<Staffing />} />
            <Route path='/services/training' element={<Training />} />
            <Route path='/services/it-solutions' element={<ITSolutions />} />
            <Route path='/industries' element={<Industries />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            
        </Routes>
    </div>
  )
}

export default Routers
