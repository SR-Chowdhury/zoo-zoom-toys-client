import React, { useContext, useEffect, useState } from 'react';
import MyToyRow from './MyToyRow';
import './MyToy.css';
import useSetTitle from '../../Hook/useSetTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToy = () => {

    useSetTitle('My Toy');

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {

        fetch(`https://animal-toys-server-phi.vercel.app/custom-toy?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(err => console.log(err.message))

    }, []);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://animal-toys-server-phi.vercel.app/custom-toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = toys.filter(item => item._id !== id);
                            setToys(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        console.log(data)
                    })
                    .catch(err => console.log(err => err.message))
            }
        })
    }

    const handleSortChange = (event) => {
        const sortType = event.target.value;
        let sortedToys = [...toys];

        if (sortType === 'ascending') {
            sortedToys = [...toys].sort((a, b) => a.price - b.price);
        } else if (sortType === 'descending') {
            sortedToys = [...toys].sort((a, b) => b.price - a.price);
        }

        setToys(sortedToys);
    };

    return (
        <div className='MyToyContainer'>
            <div className='container mx-auto' data-aos="fade-up">
                {
                    toys.length === 0 && <h1 className='text-center text-lg mb-5' style={{ color: 'var(--color-1)' }}>[ Nothing Added Yet ]</h1>
                }
                <div className='text-end mb-5'>
                    <select onChange={handleSortChange} className="select w-full max-w-xs select-secondary">
                        <option value={''}>Sort By Price</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>


                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Supplier Name</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, index) => <MyToyRow
                                    key={index}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToy;