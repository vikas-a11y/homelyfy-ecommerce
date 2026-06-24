import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'
import Category from './pages/Category'
import Checkout from './pages/Checkout'
import Deal from './pages/Deal'
import Footer from './components/Footer'
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


function App() {


  return (
    <>

         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/product/:id" element = {<ProductDetails/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/category/:name" element={<Category/>} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/deal" element={<Deal/>} />
         <Route path="/shipping-policy" element={<ShippingPolicy />} />
<Route path="/return-policy" element={<ReturnPolicy />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>


     <Footer/>
       <LanguageSwitcher />
       
    </>
  )
}

export default App;
