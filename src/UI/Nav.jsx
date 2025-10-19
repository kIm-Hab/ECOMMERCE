import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        
        <div className=' flex justify-between sticky top-0 z-50 shadow-md px-5 bg-white'>
            <div>
                <NavLink to="/logo" className=' font-extrabold text-black text-decoration-none'>
                    <h1 id='logo'>PHH</h1>
                </NavLink>
            </div>
            <div>
                <ul className=' flex gap-3'>
                    <li className=' mt-3'><NavLink to={`/Men`}  className=' font-extrabold text-black text-decoration-none hover:border-b-2' id='Men&Women'>
                        Men
                    </NavLink></li>
                    <li className=' mt-3'><NavLink to={`/Women`}  className=' font-extrabold text-black text-decoration-none hover:border-b-2' id='Men&Women'>
                        Women
                    </NavLink></li>
                </ul>
            </div>
                    <ul className=' flex gap-3'>
                    <NavLink to={`/cart`}>
                        <li className=' mt-3 text-black'><i class="fa-solid fa-cart-shopping"></i></li>
                    </NavLink>
                    <NavLink to={`/account`}>
                        <li className=' mt-3 text-black'><i className=" far fa-user"></i></li>
                    </NavLink>
                    </ul>
        </div>
    )
}

export default Nav