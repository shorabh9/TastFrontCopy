import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, refreshCart } from '../reduxSlices/cartSlice'; 
import { authenticateUser} from '../reduxSlices/UserSlice.mjs'
import axios from 'axios';

function FoodItem({ name, description, image, price, userEmail }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false); // State to track if item is in cart
  const dispatch = useDispatch();

 const { isAuthenticated, email } = useSelector(state => state.user.user);
 const refresh = useSelector(state => state.cart.refresh);

 const checkIfAddedToCart = async () => {
  try {
    const response = await axios.get(`https://tastcopyback.onrender.com/cart?email=${email}`);
    const cartItems = response.data;
    const itemExists = cartItems.some(item => item.name === name);
    setIsAdded(itemExists);
  } catch (error) {
    console.error("Error checking cart items:", error);
  }
};

useEffect(() => {
  if (isAuthenticated && email) {
    checkIfAddedToCart(); // Check cart status on mount & refresh
  }
}, [isAuthenticated, email, refresh]);

const handleAddToCart = async () => {
  if (!isAuthenticated) {
    alert("Please log in to add items to the cart.");
    return;
  }

  const cartItem = { email, name, price, quantity, img: image, isAddedCart: true };

  try {
    let response = await axios.post('https://tastcopyback.onrender.com/cart', cartItem);
    if (response.status === 201) {
      dispatch(addToCart(cartItem)); // Add to Redux
      dispatch(refreshCart()); // Trigger refresh in Cart.jsx
    }
  } catch (error) {
    console.log("Error adding to cart:", error);
  }
};


  return (
    <div className="relative p-6 overflow-hidden transition-transform duration-300 border border-gray-300 shadow-2xl bg-gradient-to-br from-gray-100 to-gray-300 backdrop-blur-lg rounded-2xl w-80 hover:shadow-xl hover:scale-105">
      {/* Food Image */}
      <div className="relative w-full overflow-hidden rounded-lg h-44">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      {/* Content Section */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-bold text-gray-900">{name}</h1>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-4 cursor-pointer">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-16 p-2 text-gray-900 transition-all bg-gray-200 border border-gray-400 rounded-md cursor-pointer focus:ring focus:ring-gray-400 hover:bg-gray-300"
        >
          {[1, 2, 3, 4].map(num => (
            <option key={num} className='cursor-pointer' value={num}>{num}</option>
          ))}
        </select>

        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`px-5 py-2 rounded-lg cursor-pointer text-white text-sm font-semibold transition-all duration-300 shadow-md ${
            isAdded 
              ? 'bg-green-500 hover:bg-green-600 shadow-green-300' 
              : 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-green-500 hover:to-green-700 shadow-orange-300 hover:shadow-green-400'
          }`}
        >
          {isAdded ? '🛒 GO TO CART' : '🛒 ADD TO CART'}
        </button>
      </div>
      
      {/* Price Tag */}
      <div className="absolute px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full shadow-lg cursor-pointer top-3 right-3 animate-bounce">
        ${price}
      </div>
    </div>
  );
}

export default FoodItem;
