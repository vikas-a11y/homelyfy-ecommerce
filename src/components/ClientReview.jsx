import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import {review} from "../api/review";



const ClientReview = () => {

  const [currnetIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
  if (currnetIndex >= review.length - 3) {
    setCurrentIndex(0);
  } else {
    setCurrentIndex(currnetIndex + 1);
  }
};

const prevSlide = () => {
  if (currnetIndex <= 0) {
    setCurrentIndex(review.length - 3);
  } else {
    setCurrentIndex(currnetIndex - 1);
  }
};

useEffect(() => {
  const interval = setInterval (() => {
    nextSlide();
  }, 3000);

  return () => clearInterval(interval);
}, [currnetIndex]);

  return (
    <div>
        <div className='relative p-4 max-w-7xl mx-auto py-14 sm:px-6 lg:px-8 bg-gradient-to-br from-green-200 via-white to-green-100'>
            <h2 className='text-4xl font-extrabold  pb-2 border-green-600 border-b-[1px]'>What Our Customers Says</h2>

                 <div className='absolute flex gap-4 right-[40px] top-[50px]'>
           <button
                onClick={prevSlide}
                className=" bg-white shadow-md w-10 h-10 rounded-full z-10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                  <IoChevronBack size={20} />
              </button>

              <button
                onClick={nextSlide}
                className=" bg-white shadow-md w-10 h-10 rounded-full z-10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                 <IoChevronForward size={20} />
              </button>
             </div>
            <div className='relative mt-10 overflow-hidden'>

          
                 <div className='flex gap-4 transition-all duration-300' style={{transform: `translateX(calc(-${currnetIndex} * (100% / 3 + 16px / 3)))`}}>
             
             {review.map((review) => 

                   <div key={review.id} className='w-[calc((100%-32px)/3)] flex-shrink-0 bg-white shadow-md hover:shadow-lg  transition-all duration-300 p-6 rounded-xl relative'>
                    <div>
                        < FaQuoteLeft className='text-green-600' size={20} />
                    </div>
                     <p className='text-base text-gray-500 line-clamp-3'>{review.para}</p>

                     <div className='flex gap-2 mt-4'>
                       {[...Array(review.rating)].map((_, index) =>
                    
                    <FaStar key={index} size={18} className="text-yellow-400" />
                    )}
                     </div>

                     <div className='flex items-center gap-4 mt-4 border-t-[1px] border-gray-200 pt-3'>
                        <div className='w-12 h-12 rounded-full overflow-hidden bg-gray-200'>
                           <img className="w-full h-full object-cover"   src={review.image}  alt={review.name} />
                        </div>
                        <div className='w-[70%]'>
                            <h4 className='text-md font-semibold text-green-500'>{review.name}</h4>
                            <p className='text-xs text-gray-500'>{review.comment}</p>
                        </div>
                     </div>
                </div>
            
            )}

            
             </div>  

            
            </div>
          

            <div>

                
            </div>
        </div>
    </div>
  )
}

export default ClientReview;