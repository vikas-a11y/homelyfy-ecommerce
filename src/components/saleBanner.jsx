import React, {useEffect, useState} from 'react'
import saleBg from '/assets/images/sale-bg.jpg'
import { IoArrowForward } from "react-icons/io5";

const SaleBanner = () => {

    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

useEffect(() => {
  const targetDate = new Date("June 30, 2026 00:00:00");

  const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
      (difference % (1000 * 60)) / 1000
    );

    setTimeLeft({ days, hours, minutes, seconds });
  }, 1000);

  return () => clearInterval(interval);
}, []);
  return (
    <div>
        <div className='relative'>
            <div className='min-h-[300px] bg-cover  px-10 py-14 flex items-center bg-[center_-310px]' style={{backgroundImage: `url(${saleBg})`}}>

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
              <div className='relative text-white'>
             <span className='text-green-600 text-xs font-semibold px-3 py-[5px] rounded-full bg-white shadow-md mb-4 font-heading inline-block'>Limited Time Offer</span>
                <h2 className='text-4xl font-extrabold mb-3 leading-[50px]' >SUMMER SALE <br /> <b className='text-4xl text-green-500'>UP TO 60%</b> <br />  IS LIVE</h2>
                <p className='mb-6'>Hurry up limited stock available</p>

                <button className='bg-white  hover:bg-green-600 hover:text-white cursor-pointer text-green-600 px-6 py-2 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300'>Shop Now <IoArrowForward /></button>
              </div>

          <div className="flex gap-4 mt-6">

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 text-center">
                <h2 className="text-2xl font-bold text-white">{timeLeft.days}</h2>
                <p className="text-sm text-gray-300">Days</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 text-center">
                <h2 className="text-2xl font-bold text-white">{timeLeft.hours}</h2>
                <p className="text-sm text-gray-300">Hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 text-center">
                <h2 className="text-2xl font-bold text-white">{timeLeft.minutes}</h2>
                <p className="text-sm text-gray-300">Min</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 text-center">
                <h2 className="text-2xl font-bold text-white">{timeLeft.seconds}</h2>
                <p className="text-sm text-gray-300">Sec</p>
            </div>

            </div>

            <div className='absolute right-8 bottom-10'>
                <p className='bg-green-600/80 w-[90px] h-[90px] rounded-full flex items-center text-center justify-center text-white font-bold text-md font-heading p-2 leading-5'>Best Deals</p>
            </div>
               
            </div>
           
        </div>
    </div>
  )
}

export default SaleBanner;