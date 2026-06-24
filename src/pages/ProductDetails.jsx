import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProductById } from "../services/productService";


function ProductDetails() {

  const {id} = useParams ();
    const navigate = useNavigate();

  const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const { handleAddToCart } = useContext(CartContext);

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);


if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>{error}</div>;
}


if (!product) {
  return (
    <div className="text-center text-2xl font-bold mt-10">
      Product not found
    </div>
  );
}



  return (
    <div className=''>
       <div className="p-10 bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow flex gap-10">
        
        {/* Image */}
        <img
          src={product.image}
          alt=""
          className="w-80 h-80 object-cover rounded"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-500 mb-2">{product.category}</p>
          <p className="text-xl text-green-600 font-bold mb-2">
            ₹{product.price}
          </p>
          <p className="text-yellow-500 mb-4">⭐ {product.rating}</p>

          <p className="text-gray-600 mb-6">
            This is a high-quality product designed for daily use. Best in class
            and highly recommended.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
                <button onClick={() => {
  handleAddToCart(product);
  navigate("/checkout");
}} className='border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded w-full mt-3 center p-2 cursor-pointer font-medium transition-all duration-300 ease-in-out'>
       Buy Now
      </button>

       <button onClick={() => handleAddToCart(product)} className="mt-3 w-full bg-green-600  hover:text-green-600 hover:bg-white border border-green-600 cursor-pointer font-medium text-white p-2 rounded transition-all duration-300 ease-in-out">
        Add to Cart
      </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ProductDetails;