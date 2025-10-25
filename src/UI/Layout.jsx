import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from '../page/Home'
import { CartProvider } from '../page/Cartcontext'
import Account from '../page/Account'
import Women from '../page/Women'
import Men from '../page/Men'
import Footer from '../page/Footer'
// import Product_search from '../components/Product_search'
import ProductList from '../components/Productlists'
import Cart from '../page/Cart'


function Layout() {
    return (
        <div>
            <CartProvider>
            <Router>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<Home />} /> 
                        <Route path='/logo' element={<Home />} />
                        <Route path='/Women' element={<Women />} />
                        <Route path='/Men' element={<Men/>} />
                        <Route path='/Search' element={<ProductList/>} />
                        <Route path='/cart' element={<Cart/>} />
                        <Route path='/account' element={<Account/>} />
                    </Routes>
                <Footer/>
            </Router>
            </CartProvider>
        </div>
    ) 
}

export default Layout