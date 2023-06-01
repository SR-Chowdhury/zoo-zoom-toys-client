import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useSetTitle from '../../Hook/useSetTitle';

const UpdateToy = () => {

    useSetTitle('Update A Toy');
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    console.log(toy)

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const formData = { name, image, price, rating, sellerName, sellerEmail, category, quantity, details };
        // console.log(formData);

        fetch(`https://animal-toys-server-phi.vercel.app/custom-toy/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Toy Successfully Updated!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    form.reset();
                    navigate('/my-toy');
                }
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className='max-w-screen-md mx-auto'>
            <div className='addToyContainer'>
                <form onSubmit={handleUpdateToy}>
                    <div className="space-y-12">

                        <div className="pb-12">

                            <h1 className='sectionTitle text-center'>Update Product</h1>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Product Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            defaultValue={toy?.name}
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                        Category
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="category"
                                            name="category"
                                            defaultValue={toy?.category}
                                            className="block px-2.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value={toy?.category}>{toy?.category}</option>                                        
                                            <option value="teddyBear">Teddy Bear</option>
                                            <option value="dinosaur">Dinosour</option>
                                            <option value="cat">Cat</option>
                                            <option value="dog">Dog</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="sellerName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Seller Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="sellerName"
                                            defaultValue={user?.displayName}
                                            id="sellerName"
                                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="sellerEmail" className="block text-sm font-medium leading-6 text-gray-900">
                                        Seller Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="sellerEmail"
                                            readOnly
                                            defaultValue={user?.email}
                                            id="sellerEmail"
                                            className="block px-2.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Photo URL
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="image"
                                            defaultValue={toy?.image}
                                            id="photo"
                                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="price"
                                            defaultValue={toy?.price}
                                            min={0}
                                            id="price"
                                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
                                        Rating
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="rating"
                                            max={5}
                                            min={0}
                                            defaultValue={toy?.rating}
                                            id="rating"
                                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="available-quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                        Available Quantity
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="quantity"
                                            min={0}
                                            defaultValue={toy?.quantity}
                                            id="available-quantity"
                                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="details" className="block text-sm font-medium leading-6 text-gray-900">
                                        Details
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="details"
                                            name="details"
                                            defaultValue={toy?.details}
                                            rows={3}
                                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                           
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about product details.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to={'/'}><button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button></Link>
                        <button type="submit" className="primaryBtn"> Update Product </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;