import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { test, expect } from "vitest";

test("navbar render correctly", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/products/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/deals/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/wishlist/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/login/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/cart/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/homelyfy/i).length).toBeGreaterThan(0);
});
