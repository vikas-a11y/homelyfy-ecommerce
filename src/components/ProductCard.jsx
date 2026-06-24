import React from "react";
import { FiHeart } from "react-icons/fi"; // outline
import { FaHeart } from "react-icons/fa"; // filled
import { useNavigate } from "react-router-dom";
 import Wishlist from "../pages/Wishlist";

const ProductCard = ({
  product,
  handleAddToCart,
  handleWishlist,
  isInWishlist,
  handleMoveToCart,
  isWishlistPage,
  featured,

}) => {
  const navigate = useNavigate();

  if (!product) {
    return null;
  }

  return (
    <div>



    {featured ? (


   <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer flex gap-3 relative">
      <div className="">
        <img
          className="w-28 h-full object-cover rounded "
          onClick={() => navigate(`/product/${product.id}`)}
          src={product.image}
          alt={product.name}
        ></img>

        <span
          data-testid="wishlist-btn"
          onClick={() => handleWishlist(product)}
          className="absolute top-2 right-2 bg-white p-[4px] rounded-full shadow-md cursor-pointer"
        >
          {isInWishlist ? (
            <FaHeart
              size={15}
              className="text-red-500 transition-all duration-300 scale-110"
            />
          ) : (
            <FiHeart
              size={15}
              className="text-black hover:text-red-500 transition-all duration-300"
            />
          )}
        </span>
      </div>
       <div>

      
      <div className=" mt-2">
        <h2 className="text-base font-semibold">{product.name}</h2>
 
      </div>
      <p className="text-gray-600 text-sm  capitalize font-medium">
        {product.category}
      </p>
      <p className="text-gray-600 text-md  capitalize font-medium">
        {product.rating}
      </p>
      <p className="text-gray-600 font-semibold">₹{product.price}</p>



{!isWishlistPage && (
  <button
    onClick={() => handleAddToCart(product)}
    className="mt-2 w-full bg-white-600 border border-green-600  hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5 hover:text-white cursor-pointer text-green-600 px-3 py-[6px] rounded font-semibold text-xs text-center transition-all duration-300 ease-in-out"
  >
    Add to Cart
  </button>
)}

      {isWishlistPage && (
        <button
          onClick={() => handleMoveToCart(product)}
          className="mt-3 w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white p-2 rounded font-medium"
        >
          Move to Bag
        </button>
      )}
       </div>
    </div>
     

) : (

      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
      <div className="relative">
        <img
          className="w-full h-52 object-cover rounded "
          onClick={() => navigate(`/product/${product.id}`)}
          src={product.image}
          alt={product.name}
        ></img>

        <span
          data-testid="wishlist-btn"
          onClick={() => handleWishlist(product)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer"
        >
          {isInWishlist ? (
            <FaHeart
              size={18}
              className="text-red-500 transition-all duration-300 scale-110"
            />
          ) : (
            <FiHeart
              size={18}
              className="text-black hover:text-red-500 transition-all duration-300"
            />
          )}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <h2 className="text-md font-semibold">{product.name}</h2>
        <p className="text-gray-600 font-semibold">₹{product.price}</p>
      </div>
      <p className="text-gray-600 text-sm  capitalize font-medium">
        {product.category}
      </p>
      <p className="text-gray-600 text-md  capitalize font-medium">
        {product.rating}
      </p>

{!isWishlistPage && (
  <button
    onClick={() => navigate(`/product/${product.id}`)}
    className="border border-green-500 hover:bg-green-700 text-green-500 hover:text-white hover:shadow-md hover:-translate-y-0.5 rounded w-full mt-3 p-2 cursor-pointer font-medium transition-all duration-300 ease-in-out"
  >
    View Details
  </button>
)}

{!isWishlistPage && (
  <button
    onClick={() => handleAddToCart(product)}
    className="mt-3 w-full bg-green-600 hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-white p-2 rounded font-medium transition-all duration-300 ease-in-out"
  >
    Add to Cart
  </button>
)}

      {isWishlistPage && (
        <button
          onClick={() => handleMoveToCart(product)}
          className="mt-3 w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white p-2 rounded font-medium"
        >
          Move to Bag
        </button>
      )}
    </div>

    )}
     

    </div>
  
  );
};

export default ProductCard;
