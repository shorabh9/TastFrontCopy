import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin"; // Import API logic

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const { handleLogin, isLoading, error } = useLogin(); // Get API logic

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(user); // Call the API function
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
               
                {error && <p className="text-center text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
