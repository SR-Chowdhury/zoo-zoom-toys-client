import React from 'react';
import img1 from '../../../../public/assets/img/g1.webp';
import img2 from '../../../../public/assets/img/g2.png';
import img3 from '../../../../public/assets/img/g3.webp';
import img4 from '../../../../public/assets/img/g4.png';
import img5 from '../../../../public/assets/img/g5.webp';
import img6 from '../../../../public/assets/img/g6.png';
import imgg1 from '../../../../public/assets/img/gg1.webp';
import './Galleries.css';

const Gallaries = () => {
    return (

        <div className='gallerySection'>
            <div className='container mx-auto'>
                <h1 className='sectionTitle text-center'>Gallery</h1>
                <div className='w-1/2 mx-auto text-center my-5 gallerySectionTag'>
                    <p className='mb-10'><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit recusandae delectus aliquid asperiores fugiat aspernatur quia repudiandae officiis quam?</i></p>
                </div>
                <div className='gallaryContainer'>
                    <div data-aos="fade-down" data-aos-easing="linear" className="card galleryCard w-96 drop-shadow-md">
                        <figure className='p-5'><img src={img1} alt="Cat Toys" /></figure>
                        <div className="gallaryCardBody">
                            <div className="gallerySmallImg">
                                <img src={imgg1} alt="" />
                            </div>
                            <div className='galleryInfoBody'>
                                <h2 className="card-title gallaryTitle">Cat Toys</h2>
                                <p className='text-justify mt-3 galleryInfo'>Toys that are made with special wool that are non-toxic</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" className="card w-96 drop-shadow-md">
                        <figure className='p-5'><img src={img2} alt="Cat Toys" /></figure>
                        <div className="gallaryCardBody">
                            <div className="gallerySmallImg">
                                <img src={imgg1} alt="" />
                            </div>
                            <div className='galleryInfoBody'>
                                <h2 className="card-title gallaryTitle">Bear Toys</h2>
                                <p className='text-justify mt-3 galleryInfo'>Toys that are made with special wool that are non-toxic</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" className="card w-96 drop-shadow-md">
                        <figure className='p-5'><img src={img3} alt="Cat Toys" /></figure>
                        <div className="gallaryCardBody">
                            <div className="gallerySmallImg">
                                <img src={imgg1} alt="" />
                            </div>
                            <div className='galleryInfoBody'>
                                <h2 className="card-title gallaryTitle">Dog Toys</h2>
                                <p className='text-justify mt-3 galleryInfo'>Toys that are made with special wool that are non-toxic</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down" data-aos-easing="linear" className="card w-96 drop-shadow-md">
                        <figure className='p-5'><img src={img4} alt="Cat Toys" /></figure>
                        <div className="gallaryCardBody">
                            <div className="gallerySmallImg">
                                <img src={imgg1} alt="" />
                            </div>
                            <div className='galleryInfoBody'>
                                <h2 className="card-title gallaryTitle">Dinosaur Toys</h2>
                                <p className='text-justify mt-3 galleryInfo'>Toys that are made with special wool that are non-toxic</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" className="card w-96 drop-shadow-md">
                        <figure className='p-5'><img src={img5} alt="Cat Toys" /></figure>
                        <div className="gallaryCardBody">
                            <div className="gallerySmallImg">
                                <img src={imgg1} alt="" />
                            </div>
                            <div className='galleryInfoBody'>
                                <h2 className="card-title gallaryTitle">Cow Toys</h2>
                                <p className='text-justify mt-3 galleryInfo'>Toys that are made with special wool that are non-toxic</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" className="card w-96 drop-drop-shadow-md">
                        <figure className='p-5'><img src={img6} alt="Cat Toys" /></figure>
                        <div className="gallaryCardBody">
                            <div className="gallerySmallImg">
                                <img src={imgg1} alt="" />
                            </div>
                            <div className='galleryInfoBody'>
                                <h2 className="card-title gallaryTitle">Horse Toys</h2>
                                <p className='text-justify mt-3 galleryInfo'>Toys that are made with special wool that are non-toxic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Gallaries;