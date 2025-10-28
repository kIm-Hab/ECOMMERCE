import React, { useEffect, useState } from 'react';
import { useCart } from '../page/Cartcontext';

function Women() {
    const [data, setData] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch("https://clothing-db-2.onrender.com/products") // your API
            .then(res => res.json())
            .then((allData) => {
                // Only keep products with category "Women"
                const womenData = allData.filter(item => item.category === "Women");
                setData(womenData);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className='flex gap-[16px] p-[20px]'>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {data.map((card) => (
                    <div
                        key={card.id}
                        className='backdrop-blur-md shadow-lg rounded-2xl p-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-gray-300'
                    >
                        <img src={card.img} alt={card.title} className='w-[100%] h-auto rounded-2xl' />
                        <h3 className="line-clamp-2">{card.title}</h3>
                        <p>{card.price} $</p>
                        <button
                            onClick={() => addToCart(card)}
                            className='bg-black rounded-[8px] py-1 px-3 text-white mt-2 hover:-translate-y-1.5 duration-300'
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Women;
