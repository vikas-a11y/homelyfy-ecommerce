import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../api/products";
import ProductCard from "../components/ProductCard";


const Category = () => {

  const { name } = useParams();

  const filteredProducts = products.filter(
    (item) => item.categorySlug === name
  );

  // ✅ STATE (MOST IMPORTANT)
  const [wishlist, setWishlist] = useState([]);

  // ✅ load wishlist on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  // 🛒 add to cart
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      exist.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    // 🔥 TOAST
    window.dispatchEvent(
      new CustomEvent("showToast", { detail: "added_cart" })
    );
  };

  // ❤️ wishlist
  const handleWishlist = (product) => {
    let updatedWishlist = [...wishlist];

    const exist = updatedWishlist.find((item) => item.id === product.id);

    if (exist) {
      updatedWishlist = updatedWishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist.push(product);

      // 🔥 TOAST
      window.dispatchEvent(
        new CustomEvent("showToast", { detail: "added_wishlist" })
      );
    }

    setWishlist(updatedWishlist); // ⭐ UI update yahi se hota hai
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // 🔥 sync
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // ❤️ check wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };


  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-8 capitalize border-b-[1px] pb-2 border-green-600">
        {name.replace(/-/g, " ")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
           <ProductCard
            key={item.id}
            product={item}
            handleAddToCart={handleAddToCart}
            handleWishlist={handleWishlist}
            isInWishlist={isInWishlist(item.id)}
            isWishlistPage={false}
          />
        ))}
      </div>

    </div>
  );
};

export default Category;