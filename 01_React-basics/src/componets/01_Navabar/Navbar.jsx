import React from 'react';
import logo from "../../assets/logo.png";


const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-30 py-4 bg-white shadow-md">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700 font-medium text-2xl">
        <a href="#" className="hover:text-blue-500 transition">Home</a>
        <a href="#" className="hover:text-blue-500 transition">Contact</a>
        <a href="#" className="hover:text-blue-500 transition">Phone</a>
      </div>

      {/* Login */}
      <div>
        <button className="bg-blue-600 text-2xl text-white px-5 py-3 rounded hover:bg-blue-700 transition">
          Login
        </button>
      </div>

    </div>
  );
};

export default Navbar;
