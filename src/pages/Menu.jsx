import React, { useState, useEffect, useRef } from 'react';
import Logout from '../components/Logout';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref to the entire menu

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const openProfile = () => {
    navigate('/profile');
  }

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Profile Icon */}
      <div
        onClick={toggleMenu}
        className="cursor-pointer bg-cyan-200 flex items-center justify-center w-[50px] h-[50px] rounded-full text-[25px]"
      >
        👤
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <a
              
              onClick={openProfile}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Review
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Setting
            </a>
            <Logout/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
