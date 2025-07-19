import React, { useState } from 'react';
import ProductList from './productList';
import { GoHeartFill } from 'react-icons/go';

const Products = ({ searchTerm, addToCart, addToWishList, wishlist }) => {
  const categories = ['All', 'Mens', 'Womens', 'Kids', 'New Arrivals', 'On Sale'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = ProductList.filter(item => {
    const matchesCategory =
      activeTab === 'All' ||
      (activeTab === 'New Arrivals' && item.newArrival) ||
      (activeTab === 'On Sale' && item.onSale) ||
      activeTab === item.category;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderProducts = filteredItems.map(product => {
    const isWishlisted = wishlist.some(item => item.id === product.id);

    return (
      <div key={product.id} className="bg-zinc-100 p-5 border border-zinc-300 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <button
            className={`text-3xl cursor-pointer ${isWishlisted ? 'text-red-600' : 'text-zinc-300'}`}
            onClick={() => addToWishList(product)}
          >
            <GoHeartFill />
          </button>

          <div>
            {(product.onSale || product.newArrival) && (
              <span className={`px-3 py-1 text-white text-sm rounded ${product.onSale ? 'bg-red-600' : 'bg-green-600'}`}>
                {product.onSale ? 'Sale' : 'New'}
              </span>
            )}
          </div>
        </div>

        {/* Product Image */}
        <div className="bg-red-300 w-full h-[30vh] flex items-center justify-center overflow-hidden rounded">
          <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
        </div>

        {/* Product Details */}
        <div className="text-center mt-3">
          <h3 className="text-[1.4rem] font-semibold">{product.name}</h3>
          <div className="mt-1 mb-5 flex justify-center gap-2 items-center">
            {product.onSale && (
              <span className="text-zinc-500 font-semibold text-lg line-through">${product.oldprice.toFixed(2)}</span>
            )}
            <span className="text-red-600 font-semibold text-lg">${product.price.toFixed(2)}</span>
          </div>
          <button
            className="bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section id="product-section" className="max-w-[1300px] mx-auto px-12 py-10">
      {/* Tabs */}
      <div className="flex gap-3 justify-center items-center mt-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-8 py-2 rounded-full text-lg ${
              activeTab === category ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-12">
        {filteredItems.length === 0 ? (
          <p className="text-center col-span-4 text-zinc-800 text-lg">No product found</p>
        ) : (
          renderProducts
        )}
      </div>
    </section>
  );
};

export default Products;
