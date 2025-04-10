import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authenticateUser } from "../reduxSlices/UserSlice.mjs";

export default function useLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (user) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await axios.post("https://tastcopyback.onrender.com/loginuser", user, {
                withCredentials: true,
            });

            if (response) {
                alert("Login successful");
                dispatch(authenticateUser({ user: response.data }));
                navigate("/");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { handleLogin, isLoading, error };
}
