import React, { useEffect } from 'react'
import { useAuth } from '../store/Auth'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const { logOutUser } = useAuth();

    useEffect(() => {
        logOutUser();
    }, [logOutUser])

    return <Navigate to="/login" />
}

export default Logout