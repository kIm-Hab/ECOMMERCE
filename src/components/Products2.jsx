import React, { useRef }  from "react";
// import ProductCard from "./Productcard";
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

function Products() {
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
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 300; // how far to move per click
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full bg-gray-100 py-8 overflow-hidden">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10  rounded-full p-2 hover:scale-105 transition"
            >
                <SlArrowLeft className="text-2xl"/>
            </button>

            {/* Scrollable Cards */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth px-16 pb-10"
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-xl hover:shadow-black transition-all duration-300 p-3 flex-shrink-0 w-64 "
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
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10  rounded-full p-2  hover:scale-105 transition"
            >
                <SlArrowRight className="text-2xl"/>
            </button>
        </div>
    );
}

export default Products;
