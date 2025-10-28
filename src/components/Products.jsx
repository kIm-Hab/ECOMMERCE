import React, { useState, useRef, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useCart } from "../page/Cartcontext";

function Products() {
    const [items, setItems] = useState([]); // fix: use "items"
    const scrollRef = useRef(null);
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    // Fetch API and show only first 6 products
    useEffect(() => {
        fetch("https://clothing-db-2.onrender.com/products")
            .then(res => res.json())
            .then(data => {
                setItems(data.slice(0, 6)); // only first 6 products
            })
            .catch(e => console.log(e));
    }, []);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 300;
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
        <div className="relative w-full bg-gray-100 py-8 overflow-hidden rounded-2xl">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-105 transition"
            >
                <SlArrowLeft className="text-2xl" />
            </button>

            {/* Scrollable Cards */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth px-16 pb-10"
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md hover:shadow-black transition-all duration-300 p-3 flex-shrink-0 w-64 cursor-pointer"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-56 object-cover rounded-lg"
                        />
                        <div className="mt-2">
                            <h2 className="font-semibold text-gray-800 text-sm line-clamp-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 text-sm">${item.price}</p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                openPopup(item);
                            }}
                            className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-105 transition"
            >
                <SlArrowRight className="text-2xl" />
            </button>

            {/* Popup Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
                        >
                            ✕
                        </button>

                        <img
                            src={selectedProduct.img}
                            alt={selectedProduct.title}
                            className="w-full h-64 object-contain rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                        <p className="text-gray-500 mb-2">{selectedProduct.category || ""}</p>
                        <p className="text-lg font-semibold mb-4">${selectedProduct.price}</p>

                        {/* Sizes */}
                        {selectedProduct.sizes && (
                            <div className="mb-4">
                                <p className="font-medium mb-2">Select Size:</p>
                                <div className="flex gap-2">
                                    {selectedProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 border rounded-lg transition ${selectedSize === size
                                                    ? "bg-black text-white"
                                                    : "bg-white text-black hover:bg-gray-100"
                                                }`}
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
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
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
