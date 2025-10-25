import React from "react";

function Product_search({ category }) {
    const items = [
        { title: "Classic White T-Shirt", price: 19.99, category: "Men", image: "https://..." },
        { title: "Casual Denim Jacket", price: 49.99, category: "Men", image: "https://..." },
        { title: "Summer Dress", price: 39.99, category: "Women", image: "https://..." },
        { title: "Cozy Sweater", price: 29.99, category: "Women", image: "https://..." },
    ];

    // filter by category
    const filteredItems = category ? items.filter(i => i.category === category) : items;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex overflow-x-auto gap-6 no-scrollbar">
                {filteredItems.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 flex-shrink-0 w-64"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-lg" />
                        <div className="mt-2">
                            <h2 className="text-md font-semibold text-gray-800 truncate">{item.title}</h2>
                            <p className="text-gray-500 text-sm">${item.price}</p>
                        </div>
                        <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product_search;
