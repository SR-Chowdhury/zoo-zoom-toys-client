import React from 'react';
import Banner from '../Banner/Banner';
import Advertise from '../Advertise/Advertise';
import Gallaries from '../Gallaries/Gallaries';
import Shop from '../Shop/Shop';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../Hook/useSetTitle';
import Partners from '../Partners/Partners';

const Home = () => {

    const allToys = useLoaderData();
    useSetTitle('Home');

    return (
        <div>
            <Banner/>
            <Partners/>
            <Gallaries/>
            <Shop allToys={allToys}/>
            <Advertise/>
        </div>
    );
};

export default Home;