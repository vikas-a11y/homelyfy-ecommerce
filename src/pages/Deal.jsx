import React, { useState, useEffect } from "react";
import { FaBolt, FaTag, FaClock } from "react-icons/fa";
import { getProducts } from "../services/productService";

const Deal = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Loading Deals...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaBolt className="mx-auto text-5xl mb-4" />

          <h1 className="text-5xl font-bold mb-4">
            Flash Sale
          </h1>

          <p className="text-lg opacity-90">
            Limited Time Offers - Save Big Today
          </p>

          <div className="flex justify-center items-center gap-3 mt-6 text-xl font-semibold">
            <FaClock />
            <span>Ends in 12 : 35 : 20</span>
          </div>
        </div>
      </div>

      {/* Deal of the Day */}
      {products.length > 0 && (
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-10">

            <div>
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
                Deal of the Day
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-3">
                {products[0].name}
              </h2>

              <p className="text-gray-600 mb-4">
                Premium quality product with exclusive
                discount available today.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-400 line-through text-xl">
                  ₹{products[0].price + 500}
                </span>

                <span className="text-green-600 text-3xl font-bold">
                  ₹{products[0].price}
                </span>

                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  20% OFF
                </span>
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Shop Now
              </button>
            </div>

            <img
              src={products[0].image}
              alt={products[0].name}
              className="w-80 h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Flash Sale Products */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <FaTag className="text-green-600 text-2xl" />

          <h2 className="text-3xl font-bold">
            Flash Sale Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="line-through text-gray-400">
                    ₹{item.price + 500}
                  </span>

                  <span className="text-green-600 font-bold text-xl">
                    ₹{item.price}
                  </span>
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Grab Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deal;