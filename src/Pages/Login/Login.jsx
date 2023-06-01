import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../public/assets/img/login.jpg';
import './Login.css';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useSetTitle from '../../Hook/useSetTitle';



const Login = () => {

    useSetTitle('Login');
    const { singIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formData = { email, password };
        // console.log(formData);
        if (password.length < 6) {
            setError('Password length at least 6 characters');
        }

        singIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Successfully Loge in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                const loggedUser = result.user;
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))
    }


    return (
        <div className='loginContainer'>
            <div className="hero min-h-screen">
                <div className="hero-content flex">
                    <div className='heroSection bg-red-50'>
                        <img src={img} className='w-full' alt="Login Image" />
                    </div>
                    <div className="heroSection card max-w-sm drop-shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className='loginTitle'>Login into Account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {
                                    error && <p className='label-text-alt text-center text-red-600'>{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="primaryBtn">Login</button>
                            </div>
                            <p className='text-center'>New in this website? <Link to="/register" style={{color: 'var(--link-color)'}}>Register</Link></p>
                            <SocialLogin/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;