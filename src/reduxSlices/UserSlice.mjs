import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(sessionStorage.getItem("user")) || {
    email: "",
    isAuthenticated: false,
    firstname: "",
    location: "",
    phone: "",
  };
  
  let initialState = {
    user: storedUser,
  };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = { email: "", isAuthenticated: false, firstname: "", location: "", phone: "" };
            sessionStorage.removeItem("user");
        },

        authenticateUser: (state, action) => {
            state.user = {
                email: action.payload.user.email,
                firstname: action.payload.user.firstname,
                location: action.payload.user.location,
                phone: action.payload.user.phone,
                isAuthenticated: true
            };

            sessionStorage.setItem("user", JSON.stringify(state.user));
        }
    }
});


export const { logoutUser, authenticateUser } = userSlice.actions;
export default userSlice.reducer;
