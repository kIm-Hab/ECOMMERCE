import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from '../page/Home'
import Cart from '../page/Cart'
import Account from '../page/Account'
import Women from '../page/Women'
import Men from '../page/Men'
import Footer from '../page/Footer'


function Layout() {
    return (
        <div>
            <Router>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<Home />} /> 
                        <Route path='/logo' element={<Home />} />
                        <Route path='/Women' element={<Women />} />
                        <Route path='/Men' element={<Men/>} />
                        <Route path='/cart' element={<Cart/>} />
                        <Route path='/account' element={<Account/>} />
                    </Routes>
                <Footer/>
            </Router>
        </div>
    ) 
}

export default Layout