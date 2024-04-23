/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Productdetail from "../compnents/Productdetail";
import potRoastImage from '../images/dote.png';
import lasagnaImage from '../images/lasagna.png';

import '../App.css';

const homemadeFoodProducts = [
    {
      id: 'potroast',
      name: 'Pot Roast',
      description: 'Slow-cooked pot roast with carrots and potatoes.',
      price: 9.99,
      image: potRoastImage
    },
    {
      id: 'lasagna',
      name: 'Lasagna',
      description: 'Layers of pasta, cheese, and homemade meat sauce.',
      price: 7.99,
      image: lasagnaImage
    }
];

const Pizza = () => {
    const [cart, setCart] = useState([]);
    const [addedProducts, setAddedProducts] = useState(new Set()); // Track added products

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Add product to cart
        setAddedProducts((prevSet) => new Set(prevSet.add(product.id))); // Add product id to addedProducts set
        console.log(`Added ${product.name} to cart`);
    };

    return (
        <Link to="/" className="h-screen pt-10 flex justify-center items-center bg-yellow-500">
            <div className="py-10"> {/* Added padding */}
                <h1 className="text-bold text-4xl text-center p-5">Pizza</h1>
                <div className="flex justify-center items-center">
                    {homemadeFoodProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 pb-10 mb-10">
                            {homemadeFoodProducts.map((product) => (
                                <Productdetail
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    onAddToCart={() => handleAddToCart(product)}
                                    isAdded={addedProducts.has(product.id)}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl font-bold">No products found.</p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Pizza;
