import React from "react";
import { useCart } from "./Cartcontext";

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                    {cart.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
                        >
                            {/* Product image & title */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-semibold text-sm clamp-2 w-[160px]">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">${item.price}</p>
                                    {item.size && (
                                        <p className="text-gray-400 text-sm">Size: {item.size}</p>
                                    )}
                                </div>
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-end gap-3 ">
                                <button
                                    onClick={() => updateQuantity(item, -1)}
                                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                                >
                                    −
                                </button>
                                <span className="font-medium w-6 text-center">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => updateQuantity(item, +1)}
                                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                                >
                                    +
                                </button>
                            </div>

                            {/* Remove button */}
                            <button
                                onClick={() => removeFromCart(item)}
                                className="text-red-500 hover:text-red-700 font-semibold"
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    {/* Cart summary */}
                    <div className="text-right mt-6">
                        <h2 className="text-xl font-semibold">
                            Total: $
                            {cart
                                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                .toFixed(2)}
                        </h2>
                        <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
