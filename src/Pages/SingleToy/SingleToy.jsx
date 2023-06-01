import React from 'react';
import './SingleToy.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaArrowRight } from "react-icons/fa";
import useSetTitle from '../../Hook/useSetTitle';

const SingleToy = () => {

    const { id } = useParams();
    const toy = useLoaderData();
    const { _id, name, image, price, rating, details, quantity, sellerEmail, sellerName } = toy;
    useSetTitle(name);

    return (
        <div>
            <div className='container mx-auto'>
                <div className="singleToyContainer">
                    <div className="singleToySection p-10 singleToyLeftSection rounded-3xl">
                        <img src={image} alt="Single Image" className='w-full' />
                    </div>
                    <div className="singleToySection">
                        <div className='space-y-7'>
                            <h1 className='singleToyName'>{name}</h1>
                            <h3 className='singleToyPrice'>Price    : ${price}</h3>
                            <h3 className='singleToyRating flex items-center'>
                                <Rating style={{ maxWidth: 150 }} value={rating} readOnly />&nbsp;{rating} Star
                            </h3>
                            <h3 className='singleToyQuantity'>Available Quantity : {quantity}</h3>
                            <h4 className='singleToySellerName'>Seller Name  : {sellerName}</h4>
                            <h4 className='singleToySellerEmail'>Seller Email : {sellerEmail}</h4>
                            <p className='singleToyDetails text-justify'>{details}</p>
                            {/* <div>
                                <Link ><button className='flex items-center primaryBtn'>View Product &nbsp;&nbsp; <FaArrowRight /></button></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;