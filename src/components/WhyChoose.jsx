import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const WhyChoose = () => {
  return (
    <div>
        <div className='p-4 max-w-7xl mx-auto py-14 sm:px-6 lg:px-8 '>
            <h2 className='text-4xl font-extrabold  pb-4 border-green-600'>Why Choose Us</h2>
            <p className='text-xl font-normal mb-10 text-gray-500'>We Provide the best experince with our amazing services.</p>

            <div className='grid grid-cols-4 gap-4'>

           <div className="group relative bg-white px-6 py-7 border border-gray-200 border-b-2 border-b-green-600 hover:border-b-transparent rounded-3xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">

                {/* Animated Border */}
                <span className="absolute inset-0 rounded-3xl border-2 border-green-600 
                [clip-path:inset(100%_0_0_0)] 
                group-hover:[clip-path:inset(0_0_0_0)] 
                transition-all duration-700 ease-in-out pointer-events-none"></span>

                <div className='relative p-4 bg-green-100 rounded-full text-green-600 w-fit mb-4 shadow-md'>
                    <FaTruck size={25} />
                </div>

                <div className='relative'>
                    <h3 className='text-xl font-bold mb-2'>Free Delivery</h3>
                    <p className='text-gray-600 text-md'>
                    Free Delivery on all order above ₹499
                    </p>
                </div>
                </div>

                  <div className="group relative bg-white px-6 py-7 border border-gray-200 border-b-2 border-b-green-600 hover:border-b-transparent rounded-3xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">

                {/* Animated Border */}
                <span className="absolute inset-0 rounded-3xl border-2 border-green-600 
                [clip-path:inset(100%_0_0_0)] 
                group-hover:[clip-path:inset(0_0_0_0)] 
                transition-all duration-700 ease-in-out pointer-events-none"></span>

                    <div className='relative p-4 bg-green-100 rounded-full text-green-600 w-fit mb-4 shadow-md'>
                       <FaShieldAlt size={25} />
                    </div>
                    <div className='relative'>
                        <h3 className='text-xl font-bold mb-2'>Secure Payments</h3>
                        <p className='text-gray-600 text-md'>100% Secure payments on Homelyfy</p>
                    </div>
                </div>

                 <div className="group relative bg-white px-6 py-7 border border-gray-200 border-b-2 border-b-green-600 hover:border-b-transparent rounded-3xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">

                {/* Animated Border */}
                <span className="absolute inset-0 rounded-3xl border-2 border-green-600 
                [clip-path:inset(100%_0_0_0)] 
                group-hover:[clip-path:inset(0_0_0_0)] 
                transition-all duration-700 ease-in-out pointer-events-none"></span>

                    <div className='relative p-4 bg-green-100 rounded-full text-green-600 w-fit mb-4 shadow-md'>
                      <TbReplace size={25} />
                    </div>
                    <div className='relative'>
                        <h3 className='text-xl font-bold mb-2'>Easy Returns</h3>
                        <p className='text-gray-600 text-md'>Hassle free Returns on all order above ₹499</p>
                    </div>
                </div>

                
                 <div className="group relative bg-white px-6 py-7 border border-gray-200 border-b-2 border-b-green-600 hover:border-b-transparent rounded-3xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">

                {/* Animated Border */}
                <span className="absolute inset-0 rounded-3xl border-2 border-green-600 
                [clip-path:inset(100%_0_0_0)] 
                group-hover:[clip-path:inset(0_0_0_0)] 
                transition-all duration-700 ease-in-out pointer-events-none"></span>
                
                    <div className='relative p-4 bg-green-100 rounded-full text-green-600 w-fit mb-4 shadow-md'>
                       <RiCustomerService2Fill size={25} />
                    </div>
                    <div className='relative'>
                        <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>
                        <p className='text-gray-600 text-md'>We are always here to help you and support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose