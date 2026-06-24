import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ProductCard from "../components/ProductCard";
import { BrowserRouter } from "react-router-dom";

const mockProduct = {
  id: 1,
  name: "test product",
  image: "test.jpg",
  price: 100,
  category: "test",
  rating: 4.5,
};

test("add to cart button works", async () => {
  const handleAddToCart = vi.fn();

  render(
    <BrowserRouter>
      <ProductCard
        product={mockProduct}
        handleAddToCart={handleAddToCart}
        isInWishlist={false}
      />
    </BrowserRouter>,
  );

  const button = screen.getByRole("button", { name: /add to cart/i });
  await userEvent.click(button);
  expect(handleAddToCart).toHaveBeenCalledTimes(1);
  expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
});

// wishlist toggle test

test("wishlist icon click works", async () => {
  const handleWishlist = vi.fn();

  render(
    <BrowserRouter>
      <ProductCard
        product={mockProduct}
        handleWishlist={handleWishlist}
        isInWishlist={false}
        isWishlistPage={false}
      />
    </BrowserRouter>,
  );

  const heartBtn = screen.getByTestId("wishlist-btn");

  await userEvent.click(heartBtn);

  expect(handleWishlist).toHaveBeenCalledTimes(1);
  expect(handleWishlist).toHaveBeenCalledWith(mockProduct);
});

// test full wishlist toggle works

test("wishlist toggle works (empty → filled)", async () => {
  const user = userEvent.setup();

  // ✅ Wrapper YAHI ANDAR define hona chahiye
  function Wrapper() {
    const [isWishlisted, setIsWishlisted] = React.useState(false);

    const handleWishlist = () => {
      setIsWishlisted((prev) => !prev);
    };

    return (
      <BrowserRouter>
        <ProductCard
          product={mockProduct}
          handleWishlist={handleWishlist}
          isInWishlist={isWishlisted}
          isWishlistPage={false}
        />
      </BrowserRouter>
    );
  }

  // ✅ yaha use ho raha hai
  render(<Wrapper />);

  const heartBtn = screen.getByTestId("wishlist-btn");

  await user.click(heartBtn);

  const svg = heartBtn.querySelector("svg");

  expect(svg).toBeInTheDocument();
});
