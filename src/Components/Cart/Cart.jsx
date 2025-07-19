import React from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const Cart = ({
  activePanel,
  handleClose,
  cart = [],
  removeItem,
  quantityIncrement,
  quantityDecrement,
  subtotal,
  orderTotal,
  shippingFee,
  setOrderSummary
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 left-auto w-[400px] border border-zinc-300 py-7 transform transition-transform duration-300 ${
        activePanel === 'cart' ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Heading */}
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center">Your Cart</h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll px-5">
        {cart.length === 0 ? (
          <p className="text-zinc-800 text-center">Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div
              key={product.id || index}
              className={`flex items-center gap-3 px-5 py-3 border-y border-zinc-300 rounded ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              {/* Cart Image */}
              <div className="w-20 h-20 bg-zinc-200 rounded overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>

              {/* Product Detail */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-zinc-800 text-md">{product.name}</h4>
                  <button
                    className="w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center cursor-pointer active:bg-red-700"
                    onClick={() => removeItem(product)}
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div>
                    {product.onSale && (
                      <span className="text-zinc-500 font-semibold text-sm line-through mr-2">
                        ${product.oldprice?.toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold text-sm">${product.price?.toFixed(2)}</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <button
                      className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-sm cursor-pointer active:bg-blue-700"
                      onClick={() => quantityDecrement(product)}
                    >
                      <FaMinus />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-sm cursor-pointer active:bg-blue-700"
                      onClick={() => quantityIncrement(product)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Total */}
      <div className="px-10 border-y border-zinc-300 py-3">
        <div className="flex justify-between">
          <span className="text-zinc-800">Subtotal</span>
          <span className="text-zinc-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800">Shipping & Handling</span>
          <span className="text-zinc-800">${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-zinc-300">
          <span className="text-lg text-blue-600 font-bold">Order Total</span>
          <span className="text-lg text-blue-600 font-bold">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 px-10 mt-4">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className={`text-white flex-1 h-[7vh] rounded ${
            cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 cursor-pointer active:bg-blue-700'
          }`}
          disabled={cart.length === 0}
          onClick={setOrderSummary}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
