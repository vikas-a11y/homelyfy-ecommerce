import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeWishlist = (product) => {
    const updated = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const handleMoveToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    //remove wishlist

    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    //update navbar

    window.dispatchEvent(new Event("cartUpdated"));

    window.dispatchEvent(
      new CustomEvent("showToast", {
        detail: "Added to Cart 🛍️",
      }),
    );
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-6 border-b-[1px] border-gray-300 pb-2">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty 😢</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              handleWishlist={removeWishlist}
              handleMoveToCart={handleMoveToCart}
              isWishlistPage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
