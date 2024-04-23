// Productdetail.js
import React, { useState } from 'react';

const Productdetail = ({ image, name, description, price, onAddToCart }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        onAddToCart();
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1000); // Reset the clicked state after 1 second
    };

    return (
        <div className="bg-white border border-white shadow-xl p-4 m-2 rounded-lg h-160 w-100">
            <div className="flex justify-center items-center">
                <img src={image} alt={name} className="h-80 w-80 object-center" />
            </div>
            <div className="text-center p-5">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="text-lg">{description}</p>
                <p className="text-green-500 text-xl">{price}</p>
                <button
                    className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ${clicked ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={clicked ? null : handleClick}
                >
                    {clicked ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default Productdetail;
