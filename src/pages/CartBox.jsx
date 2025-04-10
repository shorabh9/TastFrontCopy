import React from 'react';
import { motion } from 'framer-motion';

const CartBox = ({ id, name, price, img, quantity, onRemove }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className='relative p-5 overflow-hidden text-white transition-all duration-300 bg-gray-900 border border-purple-400 shadow-2xl w-80 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-3xl hover:shadow-3xl'>
      
      {/* Background effect */}
      <div className='absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_10%,_transparent_70%)] opacity-30 pointer-events-none'></div>
      
      <button 
        onClick={onRemove} 
        className='absolute px-3 py-1 text-sm font-medium text-white transition duration-300 bg-red-600 rounded-lg shadow-md cursor-pointer top-3 right-3 hover:bg-red-700 '>
        Remove ✖
      </button>
      
      <div className='flex flex-col items-center'>
        <img src={img} className='w-24 h-24 border-4 border-white rounded-full shadow-lg' alt={name} />
        <h2 className='mt-3 text-lg font-semibold'>{name}</h2>
      </div>
      
      <div className='flex items-center justify-between mt-5 text-sm'>
        <button className='px-4 py-2 transition rounded-lg shadow-md cursor-pointer cubg-green-600 dation-300 cur hover:bg-green-700 '>Buy Now</button>
        <div className='px-4 py-2 bg-blue-600 rounded-lg shadow-md'>Qty: {quantity}</div>
        <div className='px-4 py-2 bg-yellow-600 rounded-lg shadow-md'>${price * quantity}</div>
      </div>
    </motion.div>
  );
};

export default CartBox;
