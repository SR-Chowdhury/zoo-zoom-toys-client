import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/assets/img/login.jpg';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { updateProfile } from 'firebase/auth';
import useSetTitle from '../../Hook/useSetTitle';

const Register = () => {

    useSetTitle('Register');
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const formData = { name, email, password };
        // console.log(formData);
        if (password.length < 6) {
            setError('Password length at least 6 characters');
        }

        createUser(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Successfully User Created!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                const loggedUser = result.user;
                updateUserProfile(loggedUser, name, photo);

                setError('');
                form.reset();
            })
            .catch(err => setError(err.message))
    }

    const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then( () => console.log('name successfully updated'))
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
                            <h1 className='loginTitle'>Register Account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL <sup>(Optional)</sup> </span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            {
                                error && <p className='label-text-alt text-center text-red-600'>{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="primaryBtn">Register</button>
                            </div>
                            <p className='text-center'>Already Have an Account? <Link to="/login" style={{color: 'var(--link-color)'}}>Login</Link></p>
                            <SocialLogin/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;