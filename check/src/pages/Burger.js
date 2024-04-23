import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Productdetail from "../compnents/Productdetail";
import burgerImage from '../images/burger.png';
import friesImage from '../images/bote.png';

const fastFoodProducts = [
    {
        id: 'burger',
        name: 'Classic Burger',
        description: 'A juicy beef patty with lettuce, tomato, and cheese.',
        price: 5.99,
        image: burgerImage
    },
    {
        id: 'fries',
        name: 'French Fries',
        description: 'Crispy golden fries with a sprinkle of salt.',
        price: 2.99,
        image: friesImage
    }
];

const Burger = () => {
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
                <h1 className="text-bold text-4xl text-center p-5">Burger</h1>
                <div className="flex justify-center items-center">
                    {fastFoodProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 pb-10 mb-10">
                            {fastFoodProducts.map((product) => (
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

export default Burger;
