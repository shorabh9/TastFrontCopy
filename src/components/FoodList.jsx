import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';

function FoodList() {
  const [foodItems, setFoodItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('https://tastcopyback.onrender.com/fooditems') // Adjust your API endpoint
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch((err) => console.error('Error fetching food items:', err));
  }, []);

  // Filter food items based on the search query
  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='rounded-lg bg-gradient-to-r from-yellow-200 via-red-200 to-pink-300 shadow-xlr'>
      {/* Search Input */}
      <div className='flex justify-end w-full p-10'>
        <input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-lg border w-full max-w-[400px] border-gray-300 focus:ring focus:ring-gray-400 bg-gray-100"
        />
      </div>

      {/* Food Items List */}
      <div className="flex flex-wrap justify-center gap-5 pb-10 ">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodItem
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.img}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-lg font-semibold text-gray-600">No food items found.</p>
        )}
      </div>
    </div>
  );
}

export default FoodList;
