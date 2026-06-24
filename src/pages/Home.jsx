import React, { useState, useEffect, useContext } from 'react';
// import { products } from '../api/products';
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { getProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import BannerSlider from '../components/BannerSlider';
import { useNavigate } from 'react-router-dom';
import {categories} from "../api/category"
import { IoArrowForward } from "react-icons/io5";
import FeaturedProducts from './FeaturedProducts';
import SaleBanner from '../components/saleBanner';
import WhyChoose from '../components/WhyChoose';
import ClientReview from '../components/ClientReview';
import Subscribe from '../components/Subscribe';
import Faq from '../components/Faq';
import Footer from '../components/Footer';



const Home = () => {
  const navigate = useNavigate(); 
    const homeCategories = categories.slice(0,5);
const { wishlist, handleWishlist } = useContext(WishlistContext);
const { handleAddToCart } = useContext(CartContext);
  




  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

const [selectCategory, setSelectCategory] = useState("All");
const [priceRange, setPriceRange] = useState("All");
const [searchTerm, setSearchTerm] = useState("");
const [sortBy, setSortBy] = useState("default");

const filterProducts = products.filter(item => {
  const categoryMatch = selectCategory === "All" || item.category === selectCategory;

  const priceMatch = 
  priceRange === "All" ||
  (priceRange === "low" && item.price < 1000) ||
  (priceRange === "medium" && item.price <= 2500) ||
  (priceRange === "high" && item.price > 5000);

  const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

return categoryMatch && priceMatch && searchMatch;

});



const sortedProducts = [...filterProducts];

if (sortBy === "lowToHigh") {
  sortedProducts.sort((a,b) => a.price - b.price);
}

 if (sortBy === "highToLow") {
  sortedProducts.sort((a,b) => b.price - a.price);
} 

 if (sortBy === "rating") {
  sortedProducts.sort((a,b) => b.rating - a.rating);
}

if (loading) {
  return <div className="text-center py-20">Loading Products...</div>;
}

if (error) {
  return <div className="text-center py-20 text-red-500">{error}</div>;
}
  return (
    <div>
      <BannerSlider/>

      <div className='p-4 max-w-7xl mx-auto py-14 sm:px-6 lg:px-8'>
        <h1 className="text-3xl font-extrabold mb-6 border-b-[1px] pb-2 border-green-600">
          All Products
        </h1>

        <div className='flex justify-between mb-10'>
 <div className="flex gap-2">
  <button
    onClick={() => setSelectCategory("All")}
    className={`px-3 py-2 border rounded transition ${
      selectCategory === "All"
        ? "bg-green-600 text-white border-green-600"
        : "bg-white text-black"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setSelectCategory("Electronics")}
    className={`px-3 py-2 border rounded transition ${
      selectCategory === "Electronics"
        ? "bg-green-600 text-white border-green-600"
        : "bg-white text-black"
    }`}
  >
    Electronics
  </button>

  <button
    onClick={() => setSelectCategory("Accessories")}
    className={`px-3 py-2 border rounded transition ${
      selectCategory === "Accessories"
        ? "bg-green-600 text-white border-green-600"
        : "bg-white text-black"
    }`}
  >
    Accessories
  </button>
</div>

    <div className='flex items-center gap-5'>
      <div className=''>
      <input type="text" placeholder='Search Products..' value= {searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='p-2 rounded border font-body w-36'/>
      </div>
     <select  onChange={(e) => setPriceRange(e.target.value)} className='border rounded p-2 font-body'>
      <option value= "All">All</option>
      <option value="low">Low (Under 1000)</option>
      <option value="medium">Medium (1000-2500)</option>
      <option value="high">High (Above 5000)</option>
    </select>

      <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='p-2 rounded border font-body'>
        <option value="default">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="rating">Rating: High to Low</option>
      </select>
    </div>
    </div>

  

        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {sortedProducts.slice(0,4).map((item) => (
            <ProductCard 
              key={item.id} 
              product={item}  
              handleAddToCart={handleAddToCart}
              handleWishlist={handleWishlist}
              isInWishlist={wishlist.some(p => p.id === item.id)} 
            />
          ))}
        </div>
      </div>

      <div className='p-4 mt-4 max-w-7xl mx-auto py-14 sm:px-6 lg:px-8 bg-gradient-to-br from-green-200 via-white to-green-100'>
        <div>
          <h2 className='text-3xl font-extrabold mb-10 border-b-[1px] pb-2 border-green-600'>Shop by Category</h2>
        </div>
        <div className='grid grid-cols-5 gap-4'>
           {homeCategories.map((cat) => (
            <div key={cat.id} onClick={ () => navigate(`/category/${cat.slug}`)} className='group bg-black rounded p-4shadow hover:shadow-md transition aspect-[3/3.5] relative overflow-hidden cursor-pointer' >
              <img src={cat.image} alt={cat.title} className='h-full w-full object-cover rounded group-hover:scale-105 transition duration-300 '/>
          
          <div className='absolute rounded inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent   group-hover:from-[#22A45D]/80 group-hover:via-[#22A45D]/50 group-hover:to-transparent
        transition-all duration-300'></div>

        <div className='absolute top-[10px] right-[10px] w-10 h-10  bg-white/90 text-black rounded-full 
          flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>

          <IoArrowForward size={18} className='transition-transform duration-300 group-hover:-rotate-45'/>

        </div>

            
              <div className='absolute bottom-2 left-0 right-0 m-auto text-center'>
                  <h3 className='text-lg font-medium text-white drop-shadow-md'>{cat.title}</h3> 
                  <p className='text-gray-600 text-sm text-white drop-shadow-md'>{cat.items} items</p>
              </div>
           
              </div>
          ))}

        </div>
      
      </div>

      <FeaturedProducts
       filterProducts={filterProducts}
         wishlist={wishlist}
       handleAddToCart={handleAddToCart}
       handleWishlist={handleWishlist}
  
      />

      <SaleBanner/>
      <WhyChoose/>
      <ClientReview/>
      <Subscribe/>
      <Faq/>
  
    </div>
  );
};

export default Home;