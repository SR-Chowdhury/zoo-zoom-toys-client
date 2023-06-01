import React from 'react';
import img from '../../../public/assets/404.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <div className='text-center mt-5'>
                <Link to={'/'}><button className='primaryBtn'>Back To Home</button></Link>
            </div>

            <img src={img} alt="404" className='' />
        </div>
    );
};

export default ErrorPage;