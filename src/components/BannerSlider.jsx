import React, { useState, useEffect } from 'react';
import { banners } from '../api/bannerdata';

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Images */}
      {banners.map((banner, index) => (
        <img
          key={banner.id}
          src={banner.image}
          alt="banner"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Buttons */}
      <button
        onClick={() => setCurrent(current === 0 ? banners.length - 1 : current - 1)}
        className='absolute left-5 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full z-20'
      >
        ❮
      </button>

      <button
        onClick={() => setCurrent((current + 1) % banners.length)}
        className='absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full z-20'
      >
        ❯
      </button>
    </div>
  );
};

export default BannerSlider;