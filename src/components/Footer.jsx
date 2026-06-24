import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-gray-900 text-white '>
       <div className='max-w-7xl mx-auto p-12 pb-0'>
           <div className='grid grid-cols-5 gap-14'>
                <div>
                    <h2 className='text-2xl font-bold mb-4'><Link to= "/">HOMELYFY</Link> </h2>
              <p className="text-sm mb-2 leading-[1.6]">
                HOMELYFY is your trusted online shopping destination for quality home and kitchen essentials, offering practical products at affordable prices.
              </p>
                    
                </div>

                <div className=''>
                   <h2 className='text-lg font-bold mb-1'>Quick Links</h2>
                    <div className='border-b-2 border-green-500 w-10 mb-4'></div>
                   <ul className='flex flex-col '>
                     <li className='text-base mb-2 text-gray-100 hover:text-green-500'><Link to="/">Home</Link></li>
                     <li className='text-base mb-2 text-gray-100 hover:text-green-500'><Link to="/products">Products</Link></li>
                     <li className='text-base mb-2 text-gray-100 hover:text-green-500'><Link to="/contact">Contact</Link></li>
                     <li className='text-base mb-2 text-gray-100 hover:text-green-500'><Link to="/deal">Deals</Link></li>
                     <li className='text-base mb-2 text-gray-100 hover:text-green-500'><Link to="/wishlist">Wishlist</Link></li>
                   </ul>
                </div>

                <div >
                 <h2 className='text-lg font-bold mb-1'>Customer Services</h2>
                 <div className='border-b-2 border-green-500 w-10 mb-4'></div>
              <ul className="flex flex-col">
  <li className="text-base mb-2 text-gray-100 hover:text-green-500">
    <Link to="/shipping-policy">Shipping Policy</Link>
  </li>

  <li className="text-base mb-2 text-gray-100 hover:text-green-500">
    <Link to="/return-policy">Return Policy</Link>
  </li>

  <li className="text-base mb-2 text-gray-100 hover:text-green-500">
    <Link to="/privacy-policy">Privacy Policy</Link>
  </li>

  <li className="text-base mb-2 text-gray-100 hover:text-green-500">
    <Link to="/terms-of-service">Terms of Service</Link>
  </li>
</ul>
                 
                </div>

                <div className=''>
                    <h2 className='text-lg font-bold mb-1'>Contact Us</h2>
                    <div className='border-b-2 border-green-500 w-10 mb-4'></div>
                    <p className='text-sm mb-4'>123 Main Street</p>
                    <p className='text-sm mb-4'>Anytown, USA 12345</p>
                    <p className='text-sm mb-4'>555-555-5555</p>
                    <p className='text-sm mb-4'>[EMAIL_ADDRESS]</p>
                </div>

                <div>
                  <h2 className='text-lg font-bold mb-1'>We Accept</h2>
                  <div className='border-b-2 border-green-500 w-10 mb-4'></div>
                  <div className='flex flex-row-2 flex-wrap gap-2'>
                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
    <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
    <img src="https://img.icons8.com/color/48/rupay.png" alt="RuPay" />
 
                  </div>
                </div>
           </div>

        
       </div>
          <div className='mt-8 text-center bg-gray-600 p-2'>
            <p className='text-sm text-gray-400'>Copyright @2026 Homelyfy. All rights reserved.</p>
           </div>
    </div>
  )
}

export default Footer;