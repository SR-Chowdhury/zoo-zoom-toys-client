import React from 'react';
import './Advertise.css';
import advertiseImg from '../../../../public/assets/img/g2.png';
// import advertiseImg from '../../../../public/assets/img/advertise.webp';
// import advertiseImg from '../../../../public/assets/img/advertise.png';
import img1 from '../../../../public/assets/img/Pink-Teddy-Bear-PNG-Clipart.png';
import img2 from '../../../../public/assets/img/horse.jpg';
import img3 from '../../../../public/assets/img/dinasoure.webp';
import img4 from '../../../../public/assets/img/dogs.png';

const Advertise = () => {
    return (
        <div className='advertiseContainer container mx-auto'>
            <div data-aos="fade-down" className="ad-section">
                <h1 className='sectionTitle mb-5 advertiseTitle'>What do we offer?</h1>
                <div className='space-y-12'>
                    <div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className='w-[250px]'><img src={img1} alt="Teddy Bear Image" className='w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Teady Bear</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo necessitatibus debitis laboriosam pariatur optio voluptatum.</p>
                                {/* <div className="card-actions justify-end">
                                <button className="primaryBtn">View Details</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className='w-[250px]'><img src={img2} alt="Teddy Bear Image" className='w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Horse</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo necessitatibus debitis laboriosam pariatur optio voluptatum.</p>
                                {/* <div className="card-actions justify-end">
                                <button className="primaryBtn">View Details</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className='w-[250px]'><img src={img3} alt="Teddy Bear Image" className='w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Dinosaur</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo necessitatibus debitis laboriosam pariatur optio voluptatum.</p>
                                {/* <div className="card-actions justify-end">
                                <button className="primaryBtn">View Details</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className='w-[250px]'><img src={img4} alt="Teddy Bear Image" className='w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Dogs</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo necessitatibus debitis laboriosam pariatur optio voluptatum.</p>
                                {/* <div className="card-actions justify-end">
                                <button className="primaryBtn">View Details</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="ad-section">
                <img src={advertiseImg} alt="Advertise Image" className='w-full' />
            </div>
        </div>
    );
};

export default Advertise;