import React, { useEffect, useState } from 'react';
import { useCart } from '../page/Cartcontext';

function Women() {
  const [products, setProducts] = useState([]); // only women products
  const [selectedProduct, setSelectedProduct] = useState(null); // popup product
  const [selectedSize, setSelectedSize] = useState(null); // size selection
  const { addToCart } = useCart();

  // Fetch all products, then filter to "women" category
  useEffect(() => {
    fetch("https://clothing-db-8.onrender.com/Allproduct")
      .then(res => res.json())
      .then(allData => {
        const womenProducts = allData.filter(
          item => item.category?.toLowerCase() === "women"
        );
        setProducts(womenProducts);
      })
      .catch(e => console.log("Error fetching products:", e));
  }, []);

  // Open product popup
  const openPopup = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null);
  };

  // Close popup
  const closePopup = () => {
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  // Add selected product and size to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...selectedProduct, size: selectedSize });
    closePopup();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-black transition-all duration-300 p-3 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-contain rounded-lg"
            />
            <div className="mt-2">
              <h2 className="font-semibold text-gray-800 text-sm line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm">${item.price}</p>
            </div>
            <button
              onClick={() => openPopup(item)}
              className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Product Details */}
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-64 object-contain rounded mb-4"
            />
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-500 mb-2">{selectedProduct.category}</p>
            <p className="text-lg font-semibold mb-4">${selectedProduct.price}</p>

            {/* Size Selection */}
            {selectedProduct.sizes && (
              <div className="mb-4">
                <p className="font-medium mb-2">Select Size:</p>
                <div className="flex gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-1 transition ${
                        selectedSize === size
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

export default Women;
