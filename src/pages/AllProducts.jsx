import React, { useState, useEffect, useContext } from 'react'
import { WishlistContext } from "../context/WishlistContext";
import {getProducts} from "../services/productService";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";



const AllProducts = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const { wishlist, handleWishlist } = useContext(WishlistContext);
const { handleAddToCart } = useContext(CartContext);



const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 4;

const totalPages = Math.ceil(
  products.length / productsPerPage
);


const lastProductIndex = currentPage * productsPerPage;
const firstProductIndex = lastProductIndex - productsPerPage

const currentProducts = products.slice (
  firstProductIndex, lastProductIndex
);

useEffect(() => {
  const fetchProducts = async () => {
    try{
      const data = await getProducts();
      setProducts (data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);


if (loading) return <h2>Loading...</h2>;
if (error) return <h2>{error}</h2>;



 return (
  <div className="max-w-7xl mx-auto p-5">
    <h1 className="text-3xl font-bold mb-6 border-b-[1px] pb-2 border-green-600">
      All Products
    </h1>

    <div className="grid grid-cols-4 gap-5">
      {currentProducts.map((item) => (
  <ProductCard
    key={item.id}
    product={item}
    handleAddToCart={handleAddToCart}
    handleWishlist={handleWishlist}
    isInWishlist={wishlist.some(
      (p) => p.id === item.id
    )}
  />
))}
    </div>
    <div className="flex justify-center gap-3 mt-8">
  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-4 py-2 border rounded ${
        currentPage === index + 1
          ? "bg-green-600 text-white"
          : ""
      }`}
    >
      {index + 1}
    </button>
  ))}
</div>
  </div>
);
}

export default AllProducts;