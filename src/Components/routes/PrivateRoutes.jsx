import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const authInfo = useContext(authContext);
    const {user} = authInfo; 
    return (
        <div>
            {
                user ? children : <Navigate to="/login"></Navigate> 
            }
        </div>
    );
};

export default PrivateRoutes;