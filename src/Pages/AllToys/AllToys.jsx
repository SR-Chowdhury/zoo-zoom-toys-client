import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {

    const allToys = useLoaderData();

    const [toys, setToys] = useState(allToys);
    const [filteredToys, setFilteredToys] = useState(toys);

    const handleSearch = event => {

        const searchTerm = event.target.value.toLowerCase();
        const filtered = toys.filter((toy) =>
            toy.name.toLowerCase().includes(searchTerm)
        );

        if (searchTerm.length === 0) {
            return setToys(allToys);
        }

        setFilteredToys(filtered.length > 0 ? filtered : allToys);
        setToys(filteredToys);
    }


    return (
        <div className='MyToyContainer'>
            <div className='container mx-auto' data-aos="fade-up">
                {/* {
                    toys.length === 0 && <h1 className='text-center text-lg mb-5' style={{ color: 'var(--color-1)' }}>[ Nothing Added Yet ]</h1>
                } */}

                <div className='text-end mb-5'>
                    <input type="text" onChange={handleSearch} placeholder="Search By Toy Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Seller Name</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, index) =>
                                    <tr key={index}>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={toy.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{toy?.name}</td>
                                        <td className='uppercase'>{toy.category}</td>
                                        <td>{toy.price}</td>
                                        <td>{toy?.sellerName}</td>
                                        <td>{toy.quantity}</td>
                                        <td>
                                            <Link to={`/all-toys/${toy._id}`}><button className='primaryBtn'>View Details</button></Link>
                                        </td>
                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;