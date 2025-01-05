import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6 lg:px-20 text-center lg:text-left max-w-4xl">
        <h2 className="text-5xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt
          veniam est neque doloremque quo quasi exercitationem est ipsa esse
          id.
        </p>
        <button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
