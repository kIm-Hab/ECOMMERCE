import React, { useEffect, useState } from "react";
import { useCart } from "../page/Cartcontext";

function ProductList() {
    const { addToCart } = useCart();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedGender, setSelectedGender] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const Gender = ["All", "Men", "Women"];

    useEffect(() => {
        fetch("https://clothing-db-6.onrender.com/Allproduct")
            .then(res => res.json())
            .then(allData => setData(allData))
            .catch(err => console.log("Error loading API:", err));
    }, []);

    const filtered = data.filter(item => {
        const matchesSearch = item.title?.toLowerCase().includes(search.toLowerCase());
        const matchesGender =
            selectedGender === "All" ||
            item.category?.toLowerCase() === selectedGender.toLowerCase();
        return matchesSearch && matchesGender;
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
        <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-6">
            {/* Search + Filter */}
            <div className="max-w-5xl mx-auto mb-8 bg-white p-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
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

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

                {filtered.length > 0 ? (
                    filtered.map(item => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedProduct(item)}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 cursor-pointer"
                        >
                            <img src={item.img} alt={item.title} className="w-full h-56 object-contain" />
                            <div className="mt-2">
                                <h2 className="text-md font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
                                <p className="text-gray-500 text-sm">${item.price}</p>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedProduct(item); }}
                                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mt-3"
                            >
                                View Details
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found.</p>
                )}
            </div>

            {/* Popup */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
                        <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg">✕</button>
                        <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-64 object-contain mb-4" />
                        <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                        <p className="text-gray-500 mb-2 capitalize">{selectedProduct.category}</p>
                        <p className="text-lg font-semibold mb-4">${selectedProduct.price}</p>

                        {selectedProduct.sizes && (
                            <div className="mb-4">
                                <p className="font-medium mb-2">Select Size:</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProduct.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 border-1 transition ${selectedSize === size ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button onClick={handleAddToCart} className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;
