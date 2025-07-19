import React from 'react';

const OrderSummary = ({
  cart,
  subtotal,
  shippingFee,
  orderTotal,
  setOrderSummary,
  setOrderPlaced,
  setCart,
}) => {
  const handlePlaceOrder = () => {
    setOrderSummary(false);
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40">
      <div className="bg-zinc-100 p-8 w-[600px] rounded-lg border border-zinc-300">
        <h2 className="text-3xl text-zinc-800 font-bold mb-5 text-center">Order Summary</h2>
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-zinc-300">
              <span className="text-zinc-800 py-2">
                {item.name} (x{item.quantity})
              </span>
              <span className="text-zinc-800 py-2">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between pt-3">
            <span className="text-zinc-800">Subtotal</span>
            <span className="text-zinc-800">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-3">
            <span className="text-zinc-800">Shipping & Handling</span>
            <span className="text-zinc-800">${shippingFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pt-3 mb-5 border-t border-zinc-300">
            <span className="text-blue-600 font-bold text-xl">Order Total</span>
            <span className="text-blue-600 font-bold text-xl">${orderTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex mt-10 gap-x-3">
          <button
            className="bg-zinc-800 flex-1 py-3 active:bg-zinc-900 text-white rounded-lg cursor-pointer"
            onClick={() => setOrderSummary(false)}
          >
            Close
          </button>
          <button
            className="bg-blue-800 flex-1 py-3 active:bg-blue-900 text-white rounded-lg cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
