import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-3xl font-bold mb-8">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Billing Details */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Billing Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="border p-3 rounded-lg"
              />

              <textarea
                rows="4"
                placeholder="Full Address"
                className="border p-3 rounded-lg md:col-span-2"
              ></textarea>

            </div>

            {/* Payment Method */}
            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-4">
                Payment Method
              </h3>

              <div className="space-y-3">

                <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" defaultChecked />
                  Cash on Delivery (COD)
                </label>

                <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" />
                  UPI Payment
                </label>

                <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" />
                  Credit / Debit Card
                </label>

              </div>

            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">

            <h2 className="text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="space-y-4">

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b pb-3"
                    >
                      <div>
                        <h4 className="font-medium">
                          {item.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-6 border-t pt-4">

                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="flex justify-between text-xl font-bold mt-4">
                    <span>Total</span>
                    <span className="text-green-600">
                      ₹{total}
                    </span>
                  </div>

                  <button
                    className="
                    w-full
                    mt-6
                    bg-green-600
                    text-white
                    py-3
                    rounded-xl
                    hover:bg-green-700
                    transition
                  "
                  >
                    Place Order
                  </button>

                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;