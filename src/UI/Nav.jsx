import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../page/Cartcontext";
import logo from "../image/logo.jpg";

function Nav() {
    const { cart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="w-10 h-10" />
            </NavLink>

   
            {/* Icons: Home, Search, Cart */}
            <div className="flex items-center gap-4">
                <NavLink to="/" className="text-black">
                    <i className="fa-solid fa-house w-6 h-6"></i>
                </NavLink>
                <NavLink to="/Search" className="text-black">
                    <i className="fa-solid fa-magnifying-glass w-6 h-6"></i>
                </NavLink>
                <div className="hidden md:flex gap-3">
                <NavLink
                    to="/Men"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-bold border-b-2 border-black pb-1 text-decoration-none"
                            : "text-black transition font-medium text-decoration-none"
                    }
                >
                    Men
                </NavLink>
                <NavLink
                    to="/Women"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-bold border-b-2 border-black pb-1 text-decoration-none"
                            : "text-black transition font-medium text-decoration-none"
                    }
                >
                    Women
                </NavLink>
                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-extarbold border-b-2 border-black pb-1 text-decoration-none"
                            : "text-black transition font-bold text-decoration-none"
                    }
                >
                    <i class="fa-solid fa-user"></i>
                </NavLink>
                    </div>
                <div className="relative">
                    <NavLink to="/cart" className="text-black">
                        <FaShoppingCart className="w-6 h-6" />
                    </NavLink>
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                            {cart.length}
                        </span>
                    )}
                </div>

                {/* Hamburger Menu - mobile only */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden">
                    <NavLink
                        to="/Men"
                        onClick={() => setMenuOpen(false)}
                        className="text-black font-medium hover:text-gray-700 text-decoration-none"
                    >
                        Men
                    </NavLink>
                    <NavLink
                        to="/Women"
                        onClick={() => setMenuOpen(false)}
                        className="text-black font-medium hover:text-gray-700 text-decoration-none"
                    >
                        Women
                    </NavLink>
                    <NavLink
                        to="/account"
                        onClick={() => setMenuOpen(false)}
                        className="text-black font-medium hover:text-gray-700 text-decoration-none"
                    >
                        Account
                    </NavLink>
                </div>
            )}
        </nav>
    );
}

export default Nav;
