import React, { useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser, logoutUser } from '../reduxSlices/UserSlice';
import { addToCart, deleteItem } from '../reduxSlices/cartSlice';
import Menu from './Menu';
import B1 from "../assets/B12.jpg";
import B2 from "../assets/B11.jpg";
import B3 from "../assets/B13.jpg";
import B4 from "../assets/B4.jpg";
import B5 from "../assets/B5.jpg";
import B6 from "../assets/B11.jpg";

import B8 from "../assets/B8.jpg";

export default function Header() {

  const dispatch = useDispatch();
  const { isAuthenticated, email } = useSelector(state => state.user.user);
  const [backgroundImage, setBackgroundImage] = useState(B1);
  // const images = [B1, B2, B3, B4, B5, B6, B8]
  const {totalNumber} = useSelector(state => state.cart);

  
  useEffect(() => {
    // Fetch login status from backend
    fetch('https://tastcopyback.onrender.com/loginuser/status', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          dispatch(authenticateUser(data)); // Update Redux state
        }
      })
      .catch(error => console.error('Error fetching login status:', error));
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
};

useEffect(() => {
  const interval = setInterval(() => {
    setBackgroundImage(images[Math.floor(Math.random() * images.length)]);
  }, 2000);
  return () => clearInterval(interval);
}, []);

 return (
    <>
       <div className=" p-10 relative w-full h-[200px] bg-cover bg-center  transition-all duration-500" style={{ backgroundImage:`url(${backgroundImage})` }}>
      <div className="flex flex-col justify-between w-full h-full p-5 ">
        <div className="sm:pb-[10px] pb-[20px] flex-col gap-[20px] sm:flex-row items-center flex justify-center sm:justify-between">
          <div className="font-bold text-white text-[25px]">T<span className='text-red-500'>a</span><span className='text-red-500'>s</span>ty N<span className='text-red-500'>e</span>st</div>
          
          <div>
            {isAuthenticated ? <Menu /> : (
              <div className='flex gap-[20px]'>
                <Link to="/login" className="p-[7px] rounded-xl bg-green-900 text-white hover:bg-green-700 transition">Login</Link>
                <Link to="/Registration" className='p-[7px] rounded-xl bg-green-900 text-white hover:bg-green-700 transition'>Sign Up</Link>
              </div>
            )}
          </div>
        </div>
        <div>
        <ul className="pb-[20px] flex justify-center flex-wrap gap-5 text-lg font-semibold">
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `${isActive ? "text-yellow-400" : "text-white"} 
         hover:text-yellow-300 transition duration-300 
         px-3 py-1 rounded-lg shadow-md`
      }>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/about" 
      className={({ isActive }) => 
        `${isActive ? "text-yellow-400" : "text-white"} 
         hover:text-yellow-300 transition duration-300 
         px-3 py-1 rounded-lg shadow-md`
      }>
      About
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/contact" 
      className={({ isActive }) => 
        `${isActive ? "text-yellow-400" : "text-white"} 
         hover:text-yellow-300 transition duration-300 
         px-3 py-1 rounded-lg shadow-md`
      }>
      Contact
    </NavLink>
  </li>
  <li className='text-[17px]'>
    <NavLink 
      to="/cart" 
      className={({ isActive }) => 
        `${isActive ? "text-yellow-400" : "text-white"} 
         hover:text-yellow-300 transition duration-300 
         px-3 py-1 rounded-lg shadow-md`
      }>
      🛒 Cart (<span className='text-yellow-500'>{totalNumber}</span>)
    </NavLink>
  </li>
</ul>
        </div>
      </div>
    </div>
    </>
  )
}

