import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Header = () => {
    const authInfo = useContext(authContext);
    const { user, signOutUser } = authInfo;
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign Out done')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className='mx-2' to="/">Home</Link>
                        <Link className='mx-2' to="/login">Login</Link>
                        <Link className='mx-2' to="/register">Register</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">AuthMaster</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link className='mx-2' to="/">Home</Link>
                    <Link className='mx-2' to="/login">Login</Link>
                    <Link className='mx-2' to="/register">Register</Link>
                    {
                        user && <Link className='mx-2' to="/orders">Orders</Link>
                    }
                    
                </ul>
            </div>
            <div className="navbar-end">
                <p> {user && user.email} </p>
                {
                    user && <a onClick={handleSignOut} className="btn">Sign Out</a>
                }

            </div>
        </div>
    );
};

export default Header;