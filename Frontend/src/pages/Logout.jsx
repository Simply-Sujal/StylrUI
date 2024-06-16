import React, { useEffect } from 'react'
import { useAuth } from '../store/Auth'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const { logOutUser } = useAuth();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await logOutUser();
                toast.success("Logged out successfully!");
            } catch (error) {
                console.error("Logout failed:", error);
                toast.error("Failed to log out. Please try again.");
            }
        };

        handleLogout();
    }, [logOutUser]);

    return <Navigate to="/login" />
}

export default Logout