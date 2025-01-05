import React, { useState, useEffect } from "react";
import chocolate_milk from "../../image/Chocolate_milk.png";
import chocolate_dark from "../../image/Chocolate_dark.png";
import image2 from "../../image/image2.png";
import girle from "../../image/girle.png";
import "../../input.css";

const SpecialOffer = () => {
  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 24,
    minutes: 30,
    seconds: 0,
  });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;
  
        // طباعة الوقت المتبقي قبل التحديث
        console.log("Before Update:", prev);
  
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
  
        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    console.log("Updated Time:", timeLeft);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <section className="bg-gradient-to-b from-gray-800 to-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Milk Chocolate Section */}
        <div className="flex items-center mb-8 bg-black rounded-lg p-6">
          <img
            src={chocolate_milk}
            alt="Milk Chocolate"
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Milk Chocolates</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam.
            </p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400">
              Explore
            </button>
          </div>
        </div>

        {/* Dark Chocolate Section */}
        <div className="flex items-center mb-12 bg-black rounded-lg p-6">
          <img
            src={chocolate_dark}
            alt="Dark Chocolate"
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Dark Chocolates</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam.
            </p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400">
              Explore
            </button>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg p-8 text-center shadow-lg relative">
          {/* Girl Illustration */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
            <img
              src={girle} 
              alt="Girl Illustration"
              className="w-40 h-auto"
            />
          </div>

          {/* Timer Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-black mb-4">Special Offer</h2>
            <div className="text-3xl font-bold text-black flex justify-center gap-6">
              <div>
                <span>{formatTime(timeLeft.days)}</span>
                <p className="text-sm text-gray-700">Days</p>
              </div>
              <div>
                <span>{formatTime(timeLeft.hours)}</span>
                <p className="text-sm text-gray-700">Hours</p>
              </div>
              <div>
                <span>{formatTime(timeLeft.minutes)}</span>
                <p className="text-sm text-gray-700">Minutes</p>
              </div>
              <div>
                <span>{formatTime(timeLeft.seconds)}</span>
                <p className="text-sm text-gray-700">Seconds</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-6">
            <img
              src={image2}
              alt="Special Offer Product"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Product Name</h3>
              <p className="text-gray-800 mb-4">
                Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam est
                neque dolore.
              </p>
              <p className="text-2xl font-bold text-yellow-700 mb-4">$30.50 USD</p>
              <div className="flex justify-center lg:justify-start gap-4">
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400">
                  Buy Now
                </button>
                <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400">
                  Add To Cart
                </button>
              </div>
              </div>
              </div>
              </div>
              </div>
              </section>
                );
              };
              
              export default SpecialOffer;
