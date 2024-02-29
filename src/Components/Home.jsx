import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';

const Home = () => {
    const authInfo = useContext(authContext)

    return (
        <div className='h-[650px] flex justify-center items-center'>
            <div>
                <h1 className="text-3xl font-bold underline">
                    Home Page
                </h1>
                <p> {authInfo.name} </p>
            </div>
        </div>
    );
};

export default Home;