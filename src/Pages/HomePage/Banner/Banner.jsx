import React from 'react';
import bannerImage from '../../../../public/assets/img/home-banner.webp';
import './Banner.css';

const Banner = () => {
    return (
        <div className='relative w-full'>
            <div>
                <img src={bannerImage} alt="Home - Banner Image" className='w-full' />
            </div>
            <div className='absolute home-banner-container flex items-center h-full left-0 top-0'>
                <div data-aos="fade-right" className='bannerInSmallScreen space-y-5 pl-10 w-2/3'>
                    <h1 className='text-6xl bannerTitle font-bold'>Zoo-Zoom Toys</h1>
                    <h2 className='text-5xl bannerSubTitle font-bold'>Accessories cart</h2>
                    <p className='w-1/2 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda illo quaerat laborum neque repellendus non rem? Odit, aliquam ea laboriosam itaque id temporibus eos.
                    </p>
                    <div className='bannerBtn'>
                        <button className='primaryBtn'>View Collection</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;