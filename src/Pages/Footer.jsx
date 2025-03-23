import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-green-900 text-white py-4 mt-auto">
      <p>© 2025 Farmer E-Commerce | All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div></footer>
  )
}

export default Footer;
