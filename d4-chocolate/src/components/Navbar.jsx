
import React, { useState } from 'react';
import logo from '../../image/logo.png';
import '../../input.css';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(3); // عدد المنتجات في السلة

  return (
    <nav className="bg-transparent text-white w-full fixed top-0 left-0 z-10 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4 rounded-xl ring-2 ring-yellow-400">
        {/* Logo */}
        <div className="flex items-center space-x-4 bg-gray-900/80 px-3 py-1 rounded-full shadow-inner">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full border border-yellow-400 p-1" />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-yellow-400 transition duration-300 text-white">HOME</a>
          <a href="#shop" className="hover:text-yellow-400 transition duration-300 text-white">SHOP</a>
          <a href="#about" className="hover:text-yellow-400 transition duration-300 text-white">ABOUT</a>
          <a href="#contact" className="hover:text-yellow-400 transition duration-300 text-white">CONTACT</a>
        </div>

        {/* Search Bar & Cart */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-900/80 px-3 py-1 rounded-full shadow-inner">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />

          </div>

          {/* Cart */}
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

