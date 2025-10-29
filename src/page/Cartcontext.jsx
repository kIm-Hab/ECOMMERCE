import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the Cart Context
const CartContext = createContext();

// 2️⃣ CartProvider to wrap around your app
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);          // stores cart items
    const [showPopup, setShowPopup] = useState(false); // notification popup

    // 3️⃣ Add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if product with same title & size already exists
            const existing = prevCart.find(
                (item) => item.title === product.title && item.size === product.size
            );

            if (existing) {
                // Increment quantity if it exists
                return prevCart.map((item) =>
                    item.title === product.title && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // Add new product with quantity 1
            return [...prevCart, { ...product, quantity: 1 }];
        });

        // 🔔 Show temporary popup notification
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    // 4️⃣ Remove product from cart
    const removeFromCart = (product) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) => !(item.title === product.title && item.size === product.size)
            )
        );
    };

    // 5️⃣ Update product quantity
    const updateQuantity = (product, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.title === product.title && item.size === product.size
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + amount), // minimum 1
                    }
                    : item
            )
        );
    };

    // 6️⃣ Provide context values to children
    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, showPopup }}
        >
            {children}
        </CartContext.Provider>
    );
}

// 7️⃣ Custom hook to use cart context easily
export const useCart = () => useContext(CartContext);
