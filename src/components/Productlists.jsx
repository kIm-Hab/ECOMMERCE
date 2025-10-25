import React, { useState } from "react";

const ProductList = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const items = [
        {
            image: "https://cdn.shopify.com/s/files/1/0413/5393/7050/files/MKT25Q2-SS0051_2_500x.jpg?v=1756093205",
            title: "Classic White T-Shirt",
            price: 19.99,
        },
        {
            image: "https://m.media-amazon.com/images/I/71zT0tJ2CjL._UY1100_.jpg",
            title: "Casual Denim Jacket",
            price: 49.99,
        },
        {
            image: "https://www.sportsdirect.com/images/imgzoom/53/53019301_xxl.jpg",
            title: "Stylish Hoodies",
            price: 39.99,
        },
        {
            image: "https://www.sportsdirect.com/images/imgzoom/53/53019301_xxl.jpg",
            title: "Stylish Hoodies",
            price: 39.99,
        },
        {
            image: "https://www.sportsdirect.com/images/imgzoom/53/53019301_xxl.jpg",
            title: "Stylish Hoodies",
            price: 39.99,
        },
    ];

    // ✅ Filtered items based on search and category
    const filteredItems = items.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || item.category === category;
        return matchesSearch && matchesCategory;
        
    });


    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Filter Section */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search product..."
                    className="border rounded-lg px-4 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-black"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Category Filter */}
                <select
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
            </div>

            {/* Product Cards */}
            <div className="flex overflow-x-auto gap-6 no-scrollbar">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 flex-shrink-0 w-64"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover rounded-lg"
                            />
                            <div className="mt-2">
                                <h2 className="text-md font-semibold text-gray-800 truncate">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500 text-sm">${item.price}</p>
                            </div>
                            <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No products found</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
