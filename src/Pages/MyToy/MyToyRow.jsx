import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy, handleDelete }) => {

    const { _id, name, category, image, price, sellerName, quantity } = toy;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td className='uppercase'>{category}</td>
            <td>{price}</td>
            <td>{sellerName}</td>
            <td>{quantity}</td>
            <td>
                <Link className='text-warning' to={`/custom-toy/${_id}`}>Edit</Link>
                &nbsp; | &nbsp; <Link onClick={() => handleDelete(_id)} className='text-red-600'>Delete</Link>
            </td>
        </tr>

    );
};

export default MyToyRow;