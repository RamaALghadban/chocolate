import React from 'react';
import '../../input.css';
import image2 from '../../image/image2.png'; 

const PopularSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gold to-transparent py-20">
      <h1 className="text-black text-4xl font-bold mb-4 flex justify-center">Most Popular</h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 space-y-12 lg:space-y-0">
      
        {/* الأسهم */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full shadow-md hover:bg-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full shadow-md hover:bg-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* صورة المنتج */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={image2} // استبدل بمسار الصورة
            alt="Popular Product"
            className="rounded-full shadow-lg"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          <h2 className="text-black text-4xl font-bold mb-4">Product Name</h2>

          <p className="text-black text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt veniam est neque
            doloremque quo quasi exercitationem est ipsa esse id.
          </p>
          <p className="text-yellow-400 text-2xl font-bold mb-6">$30.50 USD</p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-white text-yellow-500 font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg hover:bg-gray-200">
              Add To Cart
            </button>
            <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg hover:bg-yellow-500">
              More Details
            </button>
          </div>
        </div>
      </div>

      {/* المنحنيات */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-40 text-black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,224L60,192C120,160,240,96,360,85.3C480,75,600,117,720,133.3C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PopularSection;
