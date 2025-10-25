import React from "react";

function ProductCard({ image, title, price }) {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-20">
            {/* Container with max width and spacing */}
            <div className="grid grid-cols-3 gap-4 max-w-5xl w-full">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="mt-2">
                            <h2 className="text-sm font-semibold text-gray-800 truncate">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 text-xs">${item.price}</p>
                        </div>
                        <button className="w-full mt-3 bg-black text-white py-1.5 rounded-lg hover:bg-gray-800 transition text-sm">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
