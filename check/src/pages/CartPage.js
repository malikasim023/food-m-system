import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// Sample cart items
const cartItems = [
    { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 5.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 7.49, quantity: 3 }
];

const CartPage = () => {
    const [cart, setCart] = useState(cartItems);

    // Handler to remove item from cart
    const handleRemove = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    // Handler to change item quantity
    const handleChangeQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            return; // Optionally handle quantities less than 1 as invalid or remove the item
        }
        setCart(prevCart => prevCart.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    // Calculate total
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <main>
            <section className="h-screen bg-yellow-500 px-10 pt-20">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <table className="w-full border-collapse border border-black mx-auto">
                    <thead>
                        <tr>
                            <th className="border border-black text-center">Item</th>
                            <th className="border border-black text-center">Price</th>
                            <th className="border border-black text-center">Quantity</th>
                            <th className="border border-black text-center">Total</th>
                            <th className="border border-black text-center">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="py-6 text-xl text-center">No product is added to cart.</td>
                            </tr>
                        ) : (
                            cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="border border-black p-2 text-center">{item.name}</td>
                                    <td className="border border-black p-2 text-center">${item.price.toFixed(2)}</td>
                                    <td className="border border-black p-2 text-center">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            className="w-16 p-1"
                                            onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value, 10))}
                                        />
                                    </td>
                                    <td className="border border-black p-2 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="border border-black p-2 text-center">
                                        <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => handleRemove(item.id)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {cart.length > 0 && (
                    <div className="cart-total mt-4 text-end">
                        <strong>Total: ${total.toFixed(2)}</strong>
                        <Link to="/checkout">
                            <button className="bg-green-500 text-white py-2 px-4 rounded ml-2">Checkout</button>
                        </Link>
                    </div>
                )}
                {cart.length === 0 && (
                    <div className="text-center mt-4">
                        <Link to="/"><button className="bg-blue-500 text-white py-2 px-4 rounded mx-auto block">Start Shopping</button></Link>
                    </div>
                )}
            </section>
        </main>
    );
};

export default CartPage;
