// Home.jsx
import React from "react";
import image1 from '../../image/image1.png';
import '../../input.css';

const Home = () => {
  return (
    <section-home
      className="bg-black text-white w-full  flex items-center justify-center"
      id="home"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
        {/* Left Section: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gold mb-4">Chocolate</h1>
          <p className="text-lg mb-6">Choose the best chocolate for you!</p>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet. Aut consequat doloribus ut deserunt veniam est neque doloremque quo quasi exercitationem est ipsa esse id.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 font-semibold rounded-lg shadow-md hover:opacity-90">
            SHOP NOW
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/4 mt-6 lg:mt-4 relative">
          <img
            src={image1}
            alt="Chocolate background"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section-home>
  );
};

export default Home;
