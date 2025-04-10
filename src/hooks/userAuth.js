import { useDispatch } from "react-redux";
import { authenticateUser } from "../reduxSlices/UserSlice.mjs";
import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'

function useAuth() {
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState(null)
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    const authStatus = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://tastcopyback.onrender.com/loginuser/status`, {
                method : 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            setAuthData(data);

            if(data.auth) {
                dispatch(authenticateUser(data));
            }
        } catch (error) {
            console.error('Error in authStatus:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        authStatus();
    },[]);

    return {authData, isLoading, error};
}

export default useAuth;