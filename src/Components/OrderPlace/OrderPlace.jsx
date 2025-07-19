import React from 'react';

const OrderPlace = ({ setOrderPlaced }) => {
  return (
    <section className="flex justify-center items-center bg-black/80 fixed inset-0 z-50">
      <div className="bg-white shadow-xl p-8 text-center w-[90%] max-w-md rounded-lg border border-zinc-300">
        <h2 className="text-3xl text-green-600 font-bold mb-2">Order Placed!</h2>
        <p className="text-zinc-800 mb-6">Thanks for your purchase. Your order has been placed successfully.</p>
        <button
          onClick={() => setOrderPlaced(false)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default OrderPlace;
