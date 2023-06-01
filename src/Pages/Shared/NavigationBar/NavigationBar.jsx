import React, { useContext } from 'react';
import './NavigationBar.css';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../../../public/assets/avatar.png';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {

        logOut()
            .then( () => {
                Swal.fire({
                    title: 'Successfully Log out',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate('/');
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-white rounded-xl zoo-zoom-nav">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/all-toys'}>All Toys</Link></li>
                            {
                                user &&
                                <>
                                    <li><Link to={'/my-toy'}>My Toys</Link></li>
                                    <li><Link to={'/add-toy'}>Add a Toy</Link></li>
                                </>
                            }
                            <li><Link to={'/blog'}>Blogs</Link></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl"><strong>Zoo-Zoom Toys</strong></a> */}
                    <Link to={'/'}><strong>Zoo-Zoom Toys</strong></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/all-toys'}>All Toys</Link></li>
                        {
                            user &&
                            <>
                                <li><Link to={'/my-toy'}>My Toys</Link></li>
                                <li><Link to={'/add-toy'}>Add a Toy</Link></li>
                            </>
                        }
                        <li><Link to={'/blog'}>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ? 
                                    <img src={user?.photoURL} /> :
                                    <img src={avatar} />
                                }
                            </div>
                        </label>
                        <ul tabIndex={1} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {
                                        user && <span className='text-red-400'>{user.displayName}</span>
                                    }
                                </a>
                            </li>
                            {
                                user ?
                                    <>
                                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to={'/login'}>Login</Link></li>
                                        <li><Link to={'/register'}>Register</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;