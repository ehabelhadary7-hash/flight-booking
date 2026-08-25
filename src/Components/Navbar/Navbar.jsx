import React from 'react'
import Staly from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isRegistered = localStorage.getItem('isRegistered');
  const loggedIn = localStorage.getItem('loggedIn');

  return (
    <>
    {/* <div className="announcement bg-black text-primary-content p-2 hidden md:flex justify-center items-center gap-8 lg:gap-32">
      <p>اتصال خدمه عملاء يومي من 10 ص إلى 11 م</p>
      <p>ضمان على المنتجات المختارة</p>
      <p>شحن سريع علي كل المحافظات</p>
      
    </div> */}

          <div className="navbar px-4 md:px-8 lg:px-24 py-2 bg-base-100 shadow-sm z-50">

          {/* Logo */}
      <Link to="/">
      <div className="flex gap-4 flex-wrap justify-between items-center">
        <img src="./../../../imge/logo2.avif" alt="logo" className="w-20 md:w-20 lg:w-20 rounded-full " />
      </div>
      </Link>

      {/* Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <ul className="menu menu-horizontal  items-center font-regular text-lg font-sans flex gap-4">

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/Flights" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>Flights</NavLink>
          </li>

          <li>
            <NavLink to="/About" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>About</NavLink>
          </li>

          <li>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>Contact</NavLink>
          </li>

        </ul>
      </div>

        <div className="dropdown lg:hidden flex-1 justify-end items-center">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>Home</NavLink></li>
            <li><NavLink to="/Flights" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>Flights</NavLink></li>
            <li><NavLink to="/About" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>About</NavLink></li>
            <li><NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-sky-400' : ''}>Contact</NavLink></li>
          </ul>

      </div>

          <div >
            {isRegistered === 'true' && loggedIn === 'true' ? (
              <Link to="/Profile" className="btn btn-ghost">
                Profile
              </Link>
            ) : (
              <Link to="/Login" className="btn btn-ghost">
                Login
                <i className="fa-regular fa-user"></i>
              </Link>
            )}
          </div>



    </div>

</>
  )
}

export default Navbar