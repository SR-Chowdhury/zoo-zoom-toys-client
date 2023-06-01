import React from 'react';
import './Partners.css';
import img1 from '../../../../public/assets/logo/1.avif';
import img2 from '../../../../public/assets/logo/2.avif';
import img3 from '../../../../public/assets/logo/3.avif';
import img4 from '../../../../public/assets/logo/4.webp';
import img5 from '../../../../public/assets/logo/5.avif';
import img6 from '../../../../public/assets/logo/6.avif';

const Partners = () => {
    return (
        <div className='partnersSection'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-center sectionTitle'>Our Partners</h1>
                    <p className='text-muted text-center text-2xl sectionTag'><i>- Only the best products -</i></p>
                </div>
                <div className='logoSection'>
                    <div data-aos="flip-left">
                        <img src={img1} alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img src={img2} alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img src={img3} alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img src={img4} alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img src={img5} alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;