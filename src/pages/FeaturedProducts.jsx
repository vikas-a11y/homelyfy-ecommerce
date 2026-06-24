import ProductCard from '../components/ProductCard';
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const FeaturedProducts = ({
  filterProducts,
  wishlist,
  handleAddToCart,
  handleWishlist,
}) => {
    
    
const featuredProduct = filterProducts[filterProducts.length - 1];

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>

      {/* Header */}
      <div className='mb-12'>

        <p className='text-green-600 font-semibold uppercase tracking-widest text-sm mb-3'>
          Our Picks
        </p>

        <h2 className='text-4xl font-extrabold text-gray-900 mb-4'>
          Featured Products
        </h2>

        <p className='text-gray-500 max-w-2xl text-lg'>
          Handpicked products that combine quality, style and
          functionality for your home.
        </p>

      </div>

      {/* Main Grid */}
<div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>

  {/* Left Big Card */}
<div className='lg:col-span-7 relative overflow-hidden rounded-[32px] min-h-[430px] p-10 flex flex-col justify-between bg-[linear-gradient(135deg,#f8f9f6_0%,#eef2eb_45%,#f6f6f3_100%)]'>

  {/* Left Overlay Gradient */}
  <div className='absolute inset-0 bg-gradient-to-r from-[#f7ffe6] via-[#cfd7c0]/90 to-transparent z-[1]' />

  {/* Badge */}
  <div className='relative z-10'>
    <span className='bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold'>
      BEST SELLER
    </span>
  </div>

  {/* Wishlist Button */}
  <span
    data-testid="wishlist-btn"
    onClick={() => handleWishlist(featuredProduct)}
    className="absolute top-6 right-6 z-20 bg-white p-3 rounded-full shadow-md cursor-pointer"
  >
    {wishlist.some(p => p.id === featuredProduct.id) ? (
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

  {/* Content */}
  <div className='relative z-10 max-w-[320px]'>

    <h2 className='text-5xl font-bold text-gray-900 leading-[50px] mb-4'>
      {featuredProduct.name}
    </h2>

    <p className='text-gray-600 text-lg leading-relaxed mb-5'>
      {featuredProduct.description}
    </p>

    {/* Price */}
    <div className='flex items-center gap-4 mb-6'>
      <span className='text-4xl font-bold text-green-700'>
        ₹{featuredProduct.price}
      </span>

      {featuredProduct.oldPrice && (
        <span className='text-gray-400 line-through text-xl'>
          ₹{featuredProduct.oldPrice}
        </span>
      )}
    </div>

    {/* Button */}
    <button
      onClick={() => handleAddToCart(featuredProduct)}
      className='bg-green-600 hover:bg-green-700 transition-all duration-300 text-white px-8 py-3 rounded-2xl font-semibold text-lg'
    >
      Shop Now
    </button>

  </div>

  {/* Product Image */}
  <img
    src={featuredProduct.image}
    alt={featuredProduct.name}
    className='absolute right-0 bottom-0 h-full w-full object-cover'
  />

</div>

  {/* Right Cards */}
  <div className='lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-2 gap-6'>

  {filterProducts.slice(1,3).map((item) => (
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

<div className='lg:col-span-12 grid sm:grid-cols-4 lg-grid-cols-4 gap-5 mt-8'>
    {filterProducts.slice(3,7).map((item) => (
            <ProductCard 
              key={item.id} 
              product={item}  
              featured={true}
              handleAddToCart={handleAddToCart}
              handleWishlist={handleWishlist}
              isInWishlist={wishlist.some(p => p.id === item.id)} 
            />
          ))}

</div>
    </section>
  )
}

export default FeaturedProducts