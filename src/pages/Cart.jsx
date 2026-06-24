import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";


const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  
const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  const increaseQnty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  };

  const decreaseQnty = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      item => item.id !== id
    );

    setCart(updatedCart);

    window.dispatchEvent(
      new CustomEvent("showToast", {
        detail: "Removed Item 🛍️"
      })
    );
  };

  const moveToWishlist = (product) => {
    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      item => item.id === product.id
    );

    if (!exists) {
      wishlist.push(product);
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    const updatedCart = cart.filter(
      item => item.id !== product.id
    );

    setCart(updatedCart);

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

    window.dispatchEvent(
      new CustomEvent("showToast", {
        detail: "Moved to Wishlist ❤️"
      })
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

return (
  <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">

    <h1 className="text-3xl font-bold mb-8 border-b border-gray-200 pb-4">
      Shopping Cart 🛒
    </h1>

    {cart.length === 0 ? (
      <div className="text-center py-20">
        <h2 className="text-6xl mb-4">🛒</h2>

        <p className="text-gray-500 text-lg">
          Your cart is empty
        </p>
      </div>
    ) : (
      <>
        {cart.map((item) => (
          <div
            key={item.id}
            className="
            bg-white
            rounded-2xl
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
            p-6
            mb-5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
          "
          >
            {/* Product Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-green-600 font-bold text-lg mt-1">
                ₹{item.price}
              </p>

              <p className="text-gray-500 text-sm">
                Quantity: {item.quantity}
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row items-center gap-4">

              <div
                className="
                flex
                items-center
                gap-4
                border
                border-gray-200
                rounded-full
                px-3
                py-2
              "
              >
                <button
                  onClick={() => increaseQnty(item.id)}
                  className="
                  w-8 h-8
                  rounded-full
                  bg-green-100
                  text-green-600
                  hover:bg-green-600
                  hover:text-white
                  transition
                  flex
                  items-center
                  justify-center
                "
                >
                  <FaPlus size={12} />
                </button>

                <span className="font-semibold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => decreaseQnty(item.id)}
                  className="
                  w-8 h-8
                  rounded-full
                  bg-red-100
                  text-red-600
                  hover:bg-red-600
                  hover:text-white
                  transition
                  flex
                  items-center
                  justify-center
                "
                >
                  <FaMinus size={12} />
                </button>
              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => removeItem(item.id)}
                  className="
                  px-4
                  py-2
                  rounded-lg
                  bg-red-50
                  text-red-600
                  hover:bg-red-600
                  hover:text-white
                  transition
                "
                >
                  Remove
                </button>

                <button
                  onClick={() => moveToWishlist(item)}
                  className="
                  px-4
                  py-2
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  transition
                "
                >
                  Move to Wishlist ❤️
                </button>

              </div>
            </div>
          </div>
        ))}

        {/* Total Section */}
        <div
          className="
          mt-8
          bg-white
          rounded-2xl
          shadow-sm
          p-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
        "
        >
          <div>
            <p className="text-gray-500">
              Total Amount
            </p>

            <h2 className="text-3xl font-bold text-green-600">
              ₹{total}
            </h2>
          </div>

     <button
  onClick={() => navigate("/checkout")}
  className="
  bg-green-600
  text-white
  px-8
  py-3
  rounded-xl
  hover:bg-green-700
  transition
"
>
  Proceed to Checkout
</button>
        </div>
      </>
    )}
  </div>
);
};

export default Cart;