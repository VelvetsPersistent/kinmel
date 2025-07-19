import React from 'react';
import Sweater from '../../assets/Sweater.png';

const Wishlist = ({ activePanel, handleClose, wishlist = [], addToCart }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 left-auto w-[400px] border border-zinc-300 py-7 transform transition-transform duration-300 ${
        activePanel === 'wishlist' ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Heading */}
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center">Your WishList</h3>
      </div>

      {/* Wishlist Items */}
      <div className="flex-1 flex flex-col gap-2 px-5 overflow-y-auto">
        {wishlist.length === 0 ? (
          <p className="text-zinc-800 text-center">Your wishlist is empty</p>
        ) : (
          wishlist.map((product, index) => (
            <div
              key={product.id || index}
              className="flex items-center gap-3 bg-white px-5 py-3 border-y border-zinc-300 rounded"
            >
              {/* Product Image */}
              <div className="w-20 h-20 bg-zinc-200 rounded overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>

              {/* Product Detail */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-zinc-800 text-md">{product.name}</h4>
                  <p className="text-xs text-zinc-500">Added: {product.addedDate || 'Today'}</p>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div>
                    {product.onSale && (
                      <span className="text-zinc-500 font-semibold text-sm line-through mr-2">
                        ${product.oldprice?.toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold text-sm">
                      ${product.price?.toFixed(2)}
                    </span>
                  </div>

                  <button
                    className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full active:bg-blue-700"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={() => console.log('Clear wishlist logic')}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
