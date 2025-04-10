import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHome } from "react-icons/fa";

export default function Profile() {
    const navigate = useNavigate();

    // Get user data from Redux store
    const { firstname, email, phone, location, isAuthenticated } = useSelector(state => state.user.user);

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-teal-400 to-indigo-500">
            <div className="w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">User Profile</h2>
                
                {!isAuthenticated ? (
                    <p className="text-lg text-red-500">You are not logged in!</p>
                ) : (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                            <div className="flex items-center gap-2">
                            <FaUser className="text-blue-500" />
                            <span className="font-semibold">First Name:</span>
                            </div>
                            <span>{firstname}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-red-500" />
                            <span className="font-semibold">Email:</span>
                           </div>
                            
                            <span>{email}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-green-500" />
                            <span className="font-semibold">Phone:</span>
                            </div>
                            
                            <span>{phone}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-orange-500" />
                                <span className="font-semibold">Location:</span>
                            </div>
                            
                            <span>{location}</span>
                        </div>
                    </div>
                )}
                
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center justify-center w-full py-3 mt-6 space-x-2 text-lg font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                    <FaHome />
                    <span>Go to Home</span>
                </button>
            </div>
        </div>
    );
}
