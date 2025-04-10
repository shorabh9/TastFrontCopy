import React, { useEffect, useState } from "react";
import CartBox from  '../pages/CartBox';
import { useSelector } from "react-redux"; // Assuming email is stored in Redux
import axios from "axios";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
   // Get logged-in user email
  const { isAuthenticated, email } = useSelector(state => state.user.user);
  const userEmail = email || JSON.parse(sessionStorage.getItem("user"))?.email;


  useEffect(() => {
    if (isAuthenticated && userEmail) {
      fetchCartItems();
    }
  }, [isAuthenticated && userEmail]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://tastcopyback.onrender.com/cart?email=${userEmail}`);

      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/cart`, { data: { _id: id } });
      setCartItems(prevItems => prevItems.filter(item => item._id !== id)); // Remove item from UI
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        cartItems.map((item) => (
          <CartBox
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
            onRemove={() => handleRemove(item._id)}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
