import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Register() {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    
    const [user, setUser] = useState({
        firstname: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        location: "",
    });
    
    const [error, setError] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/about');
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await axios.post("https://tastcopyback.onrender.com/registeruser", user);
            alert("Registration successful!");
            setUser({
                firstname: "",
                lastName: "",
                email: "",
                password: "",
                phone: "",
                location: "",
            });
            navigate('/about');

        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
                {error && <p className="text-center text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} className="w-full p-2 border rounded" />
                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <input type="number" name="phone" placeholder="Contact Number" value={user.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <input type="text" name="location" placeholder="Location" value={user.location} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
