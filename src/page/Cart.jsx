import React from "react";
import { useCart } from "./Cartcontext";

function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    // Calculate total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
            <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
                    <div className="space-y-6">
                        {cart.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border-b pb-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-gray-800">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-500 hover:text-red-700 font-medium"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-8 border-t pt-6 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Total:</h2>
                        <p className="text-2xl font-bold">${total.toFixed(2)}</p>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={clearCart}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                        >
                            Clear Cart
                        </button>
                        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
