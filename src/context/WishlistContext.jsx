import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setWishlist(storedWishlist);
  }, []);

  const handleWishlist = (product) => {
  let updatedWishlist = [...wishlist];

  const existing = updatedWishlist.find(
    (item) => item.id === product.id
  );

  if (existing) {
    updatedWishlist = updatedWishlist.filter(
      (item) => item.id !== product.id
    );

    window.dispatchEvent(
      new CustomEvent("showToast", {
        detail: "removed_wishlist",
      })
    );
  } else {
    updatedWishlist.push(product);

    window.dispatchEvent(
      new CustomEvent("showToast", {
        detail: "added_wishlist",
      })
    );
  }

  setWishlist(updatedWishlist);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(updatedWishlist)
  );

  window.dispatchEvent(new Event("wishlistUpdated"));
};

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        handleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};