import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(sessionStorage.getItem("cart")) || { cartItems: [], totalNumber: 0, refresh: false };

let initialState = storedCart;

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let item = action.payload;
            let existingItem = state.cartItems.find(i => i.name === item.name && i.email === item.email);
            
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cartItems.push({ ...item, isAddedCart: true });
            }
            state.totalNumber++;
            sessionStorage.setItem("cart", JSON.stringify(state));
        },
        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.name !== action.payload.name);
            state.totalNumber = Math.max(0, state.totalNumber - 1);
            sessionStorage.setItem("cart", JSON.stringify(state));
        },
        refreshCart: (state) => {
            state.refresh = !state.refresh;
            sessionStorage.setItem("cart", JSON.stringify(state));
        },
        
    }
});

export const { deleteItem, addToCart, refreshCart } = cartSlice.actions;
export default cartSlice.reducer;
