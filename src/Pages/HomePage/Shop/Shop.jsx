import React from 'react';
import './Shop.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from '../../Shared/ShopCard/ShopCard';

const Shop = ({ allToys }) => {

    return (
        <div className='shopSection'>
            <div className='container mx-auto'>
                <div className='shopTitleDiv'>
                    <h1 className='text-center sectionTitle'>Best Sellers</h1>
                    <p className='text-muted text-center text-2xl sectionTag'><i>- Quality Products -</i></p>
                </div>
                <div>
                    {/* <Tabs>
                        <TabList className="uppercase ">
                            <Tab>All</Tab>
                            <Tab>teddy bear</Tab>
                            <Tab>horse</Tab>
                            <Tab>dogs</Tab>
                            <Tab>cat</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>All</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Teddy Bear</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Horese</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Dogs</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Cat</h2>
                        </TabPanel>
                    </Tabs> */}
                    <Tabs>
                        <TabList>
                            <Tab>ALL</Tab>
                            <Tab>TEDDY BEAR</Tab>
                            <Tab>DINOSAUR</Tab>
                            <Tab>CAT</Tab>
                            <Tab>DOG</Tab>
                        </TabList>

                        {/* All */}
                        <TabPanel>
                            <div className='shopCardContainer'>
                                {
                                    allToys.map(toy =>
                                        <ShopCard
                                            key={toy._id}
                                            toy={toy}
                                        />
                                    )
                                }
                            </div>
                        </TabPanel>

                        {/* Teddy Bear */}
                        <TabPanel>
                            <div className='shopCardContainer'>
                                {
                                    allToys.map(toy =>
                                        toy.category === 'teddyBear' && <ShopCard
                                            key={toy._id}
                                            toy={toy}
                                        />
                                    )
                                }
                            </div>
                        </TabPanel>

                        {/* Dinosaur */}
                        <TabPanel>
                            <div className='shopCardContainer'>
                                {
                                    allToys.map(toy =>
                                        toy.category === 'dinosaur' && <ShopCard
                                            key={toy._id}
                                            toy={toy}
                                        />
                                    )
                                }
                            </div>
                        </TabPanel>

                        {/* Cat */}
                        <TabPanel>
                            <div className='shopCardContainer'>
                                {
                                    allToys.map(toy =>
                                        toy.category === 'cat' && <ShopCard
                                            key={toy._id}
                                            toy={toy}
                                        />
                                    )
                                }
                            </div>
                        </TabPanel>

                        {/* Dog */}
                        <TabPanel>
                            <div className='shopCardContainer'>
                                {
                                    allToys.map(toy =>
                                        toy.category === 'dog' && <ShopCard
                                            key={toy._id}
                                            toy={toy}
                                        />
                                    )
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Shop;