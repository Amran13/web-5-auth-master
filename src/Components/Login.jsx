import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {
    const authInfo = useContext(authContext)
    const {setUser, signIn,} = authInfo
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        //signIn with firebase
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(err => {
            console.error(err)
        })

    }
    return (
        <div className="hero min-h-5/6 bg-base-200 py-6">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login  </h1>
                </div>
                <div className="card shrink-0 w-[450px] shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <Link className='mt-2' to="/register">New to AuthMaster?</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;