import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo & Branding */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold">🍔 Tasty Nest</h1>
            <p className="text-sm mt-1">Delicious food at your doorstep!</p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Menu</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-300"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-white/30 pt-4 text-sm">
          © {new Date().getFullYear()} Tasty Nest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
