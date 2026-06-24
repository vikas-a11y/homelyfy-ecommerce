import React from 'react'
import {Link} from 'react-router-dom'
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"; // Feather icons
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


export const Navbar = () => {
  const {t} = useTranslation();
  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  updateCart(); // initial load

  window.addEventListener("cartUpdated", updateCart);

  return () => {
    window.removeEventListener("cartUpdated", updateCart);
 
  };
}, []);

const [wishlistCount, setWishlistCount] = useState(0);

useEffect(() => {
  const updateWishlist = () =>{
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length)
  };
  updateWishlist();

  window.addEventListener("wishlistUpdated" , updateWishlist);

  return () => {
    window.removeEventListener("wishlistUpdated" , updateWishlist);
  };
}, []);


const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
};

const [toast, setToast] = useState(null);

useEffect(() => {
  const showToast = (e) => {
    setToast(e.detail);

    setTimeout(() => {
      setToast(null);

    }, 2000);
  };
  window.addEventListener("showToast", showToast);

  return () => {
    window.removeEventListener("showToast", showToast);
  };
}, []);

  return (

    <div className=''>
          <nav className='sticky top-0 z-50 flex items-center justify-between py-4 px-10 shadow-lg bg-white/40 backdrop-blur-lg border border-white/30'>
        <div className='hidden md:flex gap-7'>
          <Link className='text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' to="/">{t('nav.home')}</Link>
           <Link className='text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' to="/products">{t('nav.products')}</Link>
          <Link className='text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' to="/contact">{t('nav.contact')}</Link>
          <Link className='text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' to="/deal">{t('nav.deals')}</Link>
         <Link  className="relative text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold" to="/wishlist">
          {t('nav.wishlist')}
         {wishlistCount > 0 && (
          <span className='absolute top-[-4px] left-[7px] bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs font-medium'>{wishlistCount}</span>
         )}
 
</Link>
        </div >

    
         
        <div className='w-full md:flex gap-10 md:w-[28%] justify-center'>
              <span className='text-2xl md:text-3xl text-green-700 uppercase  font-bold'> <Link className='uppercase' to="/">{t('nav.homelyfy')}</Link></span>
        </div>

        <div className='hidden md:flex align-items-center gap-10 w-[33%] justify-end'>
         <FiSearch className="hover:text-green-600 text-2xl cursor-pointer" />

         <Link className='hidden md:flex items-center hover:text-green-600 gap-2' to= "/login"> 
             <FiUser className=" text-2xl text-black cursor-pointer" />
             <span className='text-md font-semibold'>{t('nav.login')}</span>
        </Link>

        <Link className='hidden md:flex items-center hover:text-green-600 gap-2 relative font-semibold' to ="/cart">
               <FiShoppingCart className=" text-2xl text-black cursor-pointer" />{t('nav.cart')}
               {cartCount > 0 && (
                    <span className='text-md font-medium'>
                    <p className='absolute top-[-4px] left-[7px] bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs font-medium'>{cartCount}</p> </span>
               )}
             
        </Link>

      
        </div>

{toast && (
  <div className="fixed top-20 right-5 z-50">
    <div className="bg-white border-l-4 border-green-500 shadow-xl px-5 py-3 rounded-lg flex items-center gap-3 animate-slideIn">
      
      <span className="text-green-500 text-xl">✔</span>

      <p className="text-gray-800 font-medium">{t(toast)}</p>
    </div>
  </div>
)}

              {/* mobile menu */}
              <div className='md:hidden '>

                                {/* Hamburger button */}
<div className='md:hidden fixed  top-4 right-4 z-60'>
  <button onClick={toggleMobileMenu}>
    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

         <div className={`fixed top-14 z-40 ${mobileMenuOpen ? "right-0" : "-right-64"} w-64 h-full bg-white shadow-lg transition-all duration-300 `}>

     <div className='flex flex-col gap-4 p-4  bg-white'>
          <Link className='block text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' onClick={toggleMobileMenu}  to="/">{t('nav.home')}</Link>
           <Link className='block text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' onClick={toggleMobileMenu} to="/products">{t('nav.products')}</Link>
          <Link className='block text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' onClick={toggleMobileMenu} to="/contact">{t('nav.contact')}</Link>
          <Link className='block text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold' onClick={toggleMobileMenu} to="/deal">{t('nav.deals')}</Link>
         <Link  className="block relative text-md text-uppercase text-black hover:underline hover:text-green-600 font-semibold" to="/wishlist">
          {t('nav.wishlist')}
         {wishlistCount > 0 && (
          <span className='absolute top-[-4px] left-[7px] bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs font-medium'>{wishlistCount}</span>
         )}
 
</Link>
        </div >
         
      </div>
              </div>



    </nav>
    </div>
   
  )
}

export default Navbar;