import React, { useState, useRef, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useCart } from "../page/Cartcontext";

function Products() {
    const [items, setItems] = useState([]);
    const scrollRef = useRef(null);
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        fetch("https://clothing-db-8.onrender.com/Allproduct")
            .then((res) => res.json())
            .then((data) => setItems(data.slice(0, 6)))
            .catch((e) => console.log("Error fetching products:", e));
    }, []);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 250; // smaller scroll for mobile
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    const openPopup = (product) => {
        setSelectedProduct(product);
        setSelectedSize(null);
    };

    const closePopup = () => {
        setSelectedProduct(null);
        setSelectedSize(null);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }
        addToCart({ ...selectedProduct, size: selectedSize });
        closePopup();
    };

    return (
        <div className="relative w-full bg-gray-100 py-6 md:py-8 overflow-hidden rounded-2xl">

            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 hover:scale-110 transition"
            >
                <SlArrowLeft className="text-xl md:text-2xl" />
            </button>

            {/* Scrollable Product Cards */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-8 no-scrollbar scroll-smooth"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 flex-shrink-0 w-52 sm:w-60 md:w-64 cursor-pointer"
                        onClick={() => openPopup(item)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 sm:h-52 md:h-56 object-contain"
                        />
                        <div className="mt-2">
                            <h2 className="font-semibold text-gray-800 text-sm line-clamp-2">{item.title}</h2>
                            <p className="text-gray-500 text-sm">${item.price}</p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                openPopup(item);
                            }}
                            className="w-full mt-2 bg-black text-white py-1.5 sm:py-2 rounded hover:bg-gray-800 transition"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 hover:scale-110 transition"
            >
                <SlArrowRight className="text-xl md:text-2xl" />
            </button>

            {/* Popup Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 sm:px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-md relative">

                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 md:top-3 md:right-3 text-gray-500 hover:text-black text-lg"
                        >
                            ✕
                        </button>

                        {/* Product Info */}
                        <img
                            src={selectedProduct.img}
                            alt={selectedProduct.title}
                            className="w-full h-52 sm:h-56 md:h-64 object-contain mb-4"
                        />
                        <h2 className="text-lg sm:text-xl font-bold">{selectedProduct.title}</h2>
                        <p className="text-gray-500 mb-2">{selectedProduct.category || ""}</p>
                        <p className="text-md sm:text-lg font-semibold mb-4">${selectedProduct.price}</p>

                        {/* Size Selection */}
                        {selectedProduct.sizes && (
                            <div className="mb-4">
                                <p className="font-medium mb-2">Select Size:</p>
                                <div className="flex gap-2 flex-wrap">
                                    {selectedProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-3 py-1 sm:px-4 sm:py-2 border transition ${selectedSize === size ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Add to Cart */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
