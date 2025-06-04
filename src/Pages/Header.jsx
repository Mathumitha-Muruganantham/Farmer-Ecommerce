import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3"><img src="/Images/logo.png" className="w-10 h-10 rounded-full justify-left"></img>
        <Link to="/"  className="text-2xl align-left font-bold">
          FarmEcom
        </Link></div>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:text-2xl font-bold">
          <Link to="/HomePage" className="hover:text-gray-300">Home</Link>
          <Link to="/Cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/AboutPage" className="hover:text-gray-300">About</Link>
          <Link to="/ContactPage" className="hover:text-gray-300">Contact</Link>
          <Link to="/Choose" className="bg-white text-green-900 px-4 py-2 rounded-md hover:bg-gray-200">
            Register/Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-green-700 p-4 space-y-4">
          <Link to="/HomePage" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Cart" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/AboutPage" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/ContactPage" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/Choose" className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200" onClick={() => setIsOpen(false)}>
            Register/Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
