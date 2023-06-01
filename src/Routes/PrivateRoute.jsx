import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='w-screen mx-auto p-8 text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace />
};

export default PrivateRoute;