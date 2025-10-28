import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from '../page/Home';
import { CartProvider, useCart } from '../page/Cartcontext';
import Account from '../page/Account';
import Women from '../page/Women';
import Men from '../page/Men';
import Footer from '../page/Footer';
import ProductList from '../components/Productlists';
import Cart from '../page/Cart';

// 👇 Inner content so we can access the context
function LayoutContent() {
    const { showPopup } = useCart(); // read popup state from context

    return (
        <div>
            {/* ✅ Global popup */}
            {showPopup && (
                <div className="fixed top-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-[999] animate-bounce">
                    ✅ Added to Cart!
                </div>
            )}

            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logo" element={<Home />} />
                <Route path="/Women" element={<Women />} />
                <Route path="/Men" element={<Men />} />
                <Route path="/Search" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
        </div>
    );
}

// 👇 Wrap LayoutContent with Router + CartProvider
function Layout() {
    return (
        <CartProvider>
            <Router>
                <LayoutContent />
            </Router>
        </CartProvider>
    );
}

export default Layout; // ✅ exported as default
