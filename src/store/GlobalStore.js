import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reduxSlices/cartSlice"; // ✅ Ensure correct path
import userReducer from "../reduxSlices/UserSlice.mjs"; // ✅ Ensure correct path

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});

export default store; // ✅ Make sure this export exists
