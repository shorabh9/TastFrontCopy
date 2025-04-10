import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reduxSlices/userSlice"; // Import the logout action
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post("https://tastcopyback.onrender.com/logout", {}, {
        withCredentials: true,
      });

      if (response.status === 200) {
        alert("Logout successfully");
        dispatch(logoutUser()); // Dispatch logout action
        navigate("/"); // Redirect to login page after logout
      }
    } catch (err) {
      console.error("Logout failed:", err.response?.data?.message || err.message);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <a
      className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
      onClick={handleLogout}
    >
      Logout
    </a>
  );
};

export default Logout;
