import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ShopCard = ({toy}) => {

    const { _id, name, price, rating, image} = toy;
    const { user } = useContext(AuthContext);

    return (

        <div data-aos="zoom-in" className="card shopCard card-compact w-96 bg-base-100 drop-shadow">
            <div className='p-5'>
                <figure className='shopCardImg rounded-lg'><img src={image} alt="Shop Image" /></figure>
            </div>

            <div className="card-body text-center">
                <h1 className='productName'>{name}</h1>
                <div className="ratingDiv mx-auto">
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                </div>
                <h3 className='text-xl my-3'>${price}</h3>
                <div>
                    {
                        user ?
                        <Link to={`/toys/${_id}`}><button className='primaryBtn w-full'>View Details</button></Link>
                        :
                        <Link to={`/toys/${_id}`}><button onClick={ () => {
                            Swal.fire({
                                title: 'Please Login First',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        }} className='primaryBtn shopViewBtn w-full'>View Details</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ShopCard;