import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
      <footer className="bg-green-900 text-white py-4 mt-auto">
  <p className="text-sm md:text-base">© 2025 Farmer E-Commerce | All rights reserved</p>
  <nav aria-label="Footer Navigation" className="flex justify-center space-x-4 mt-2">
    <Link to="/AboutPage" className="hover:underline" aria-label="About Us Page">About Us</Link>
    <Link to="/ContactPage" className="hover:underline" aria-label="Contact Page">Contact</Link>
    
  </nav>
</footer>

  )
}

export default Footer;
