import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    let updatedCart = [...cart];

    const existing = updatedCart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      updatedCart.push({
        ...product,
        quantity: 1,
      });
    }

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    window.dispatchEvent(
      new CustomEvent("showToast", {
        detail: "added_cart",
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};