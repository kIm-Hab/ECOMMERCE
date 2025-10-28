import React, { useState } from "react";
import { useCart } from "../page/Cartcontext";

function ProductList() {
    const allProducts = [
        {
            image:
                "https://cdn.shopify.com/s/files/1/0413/5393/7050/files/MKT25Q2-SS0051_2_500x.jpg?v=1756093205",
            title: "Classic White T-Shirt",
            price: 19.99,
            Category: "Women",
            sizes: ["S", "M", "L", "XL"],
        },
        {
            image:
                "https://m.media-amazon.com/images/I/71zT0tJ2CjL._UY1100_.jpg",
            title: "Casual Denim Jacket",
            price: 49.99,
            Category: "Women",
            sizes: ["S", "M", "L"],
        },
        {
            image:
                "https://www.sportsdirect.com/images/imgzoom/53/53019301_xxl.jpg",
            title: "Stylish Hoodie",
            price: 39.99,
            Category: "Men",
            sizes: ["M", "L", "XL"],
        },
        {
            image:
                "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg",
            title: "Relaxed Fit Shirt",
            price: 29.99,
            Category: "Men",
            sizes: ["S", "M", "L"],
        },
    ];

    const Gender = ["All", "Men", "Women"];
    const [search, setSearch] = useState("");
    const [selectedGender, setSelectedGender] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useCart();

    // Filter products
    const filtered = allProducts.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesGender =
            selectedGender === "All" || item.Category === selectedGender;
        const matchesPrice =
            item.price >= priceRange[0] && item.price <= priceRange[1];
        return matchesSearch && matchesGender && matchesPrice;
    });

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }
        addToCart({ ...selectedProduct, size: selectedSize });
        setSelectedProduct(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-6">
            {/* Search + Filter Section */}
            <div className="max-w-5xl mx-auto mb-8 bg-white p-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    {/* Season Filter */}
                    <select
                        value={selectedGender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-black"
                    >
                        {Gender.map((gender, i) => (
                            <option key={i} value={gender}>
                                {gender}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Product Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
                {filtered.length > 0 ? (
                    filtered.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProduct(item)}
                            className="bg-white rounded-xl shadow-md hover:shadow-black transition-all duration-300 p-3 cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-contain rounded-lg"
                            />
                            <div className="mt-2">
                                <h2 className="text-md font-semibold text-gray-800 truncate">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500 text-sm">${item.price}</p>
                            </div>
                            <button onClick={() => setSelectedProduct(item)}>View Details</button>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

            {/* Popup Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
                        >
                            ✕
                        </button>

                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                        <p className="text-gray-500 mb-2">{selectedProduct.season}</p>
                        <p className="text-lg font-semibold mb-4">${selectedProduct.price}</p>

                        {/* Size Selection */}
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

export default ProductList;
