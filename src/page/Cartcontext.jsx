import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find(
                (item) => item.title === product.title && item.size === product.size
            );
            if (existing) {
                return prevCart.map((item) =>
                    item.title === product.title && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });

        // 🔔 Trigger notification
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    const removeFromCart = (product) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) => !(item.title === product.title && item.size === product.size)
            )
        );
    };

    const updateQuantity = (product, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.title === product.title && item.size === product.size
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + amount),
                    }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, showPopup }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
