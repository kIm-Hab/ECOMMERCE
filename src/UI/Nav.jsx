import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../page/Cartcontext";


function Nav() {
    const { cart } = useCart();

    return (
        <nav className="flex justify-around items-center px-2 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <NavLink to="/" className="text-4xl font-extrabold text-decoration-none text-black mr-170">
                <img src="src\image\logo.jpg" alt="" className=" w-[50px] "/>
            </NavLink>

            {/* Nav Links */}
            <div className="flex items-center gap-6">
                <NavLink
                    to="/Women"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-semibold border-b-2 border-black pb-1 text-decoration-none "
                            : "text-black transition text-decoration-none "
                    }
                >
                    Women
                </NavLink>

                <NavLink
                    to="/Men"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-semibold border-b-2 border-black pb-1 text-decoration-none "
                            : "text-black transition text-decoration-none bg-test"
                    }
                >
                    Men
                </NavLink>

                <NavLink
                    to="/Search"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-semibold border-b-2 border-black pb-1 text-decoration-none "
                            : "text-black transition text-decoration-none "
                    }
                >
                    <i class="fa-solid fa-magnifying-glass w-6 h-6"></i>
                </NavLink>

                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-semibold border-b-2 border-black pb-1 text-decoration-none "
                            : "text-black transition text-decoration-none "
                    }
                >
                    <i class="fa-solid fa-user w-6 h-6"></i>
                </NavLink>

                {/* Cart Icon with Badge */}
                <div className="relative">
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                        isActive
                            ? "text-black font-semibold border-b-2 border-black pb-1 text-decoration-none "
                            : "text-black transition text-decoration-none "
                    }
                    >
                        <FaShoppingCart className="w-6 h-6" />
                    </NavLink>

                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                            {cart.length}
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
