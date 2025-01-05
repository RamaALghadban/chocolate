import React from "react";
import person1 from "../../image/person1.png";
import person2 from "../../image/person2.png";
import person3 from "../../image/person3.png";

const Testimonial = () => {
  return (
    <section className="py-16 bg-black">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Testimonial</h1>
      </div>

      <div className="flex justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-xl border border-yellow-500 p-6 text-center w-72 shadow-lg">
          <img
            src={person1}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full mx-auto border-2 border-white -mt-10"
          />
          <div className="mt-4">
            <div className="text-yellow-500 mb-2">★★★★☆</div>
            <h3 className="font-bold text-lg text-white">Lorem Ipsum</h3>
            <p className="text-sm text-gray-400 mb-4">10th FEB, 2023</p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              veniam est.
            </p>
          </div>
        </div>

        {/* Card 2 (with gold highlight) */}
        <div className="bg-gray-800 rounded-xl border border-yellow-500 p-6 text-center w-72 shadow-lg relative">
          <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl transform scale-110"></div>
          <img
            src={person2}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full mx-auto border-2 border-yellow-500 -mt-10"
          />
          <div className="mt-4 relative">
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <h3 className="font-bold text-lg text-white">Lorem Ipsum</h3>
            <p className="text-sm text-gray-400 mb-4">10th FEB, 2023</p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              veniam est.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-xl border border-yellow-500 p-6 text-center w-72 shadow-lg">
          <img
            src={person3}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full mx-auto border-2 border-white -mt-10"
          />
          <div className="mt-4">
            <div className="text-yellow-500 mb-2">★★★★☆</div>
            <h3 className="font-bold text-lg text-white">Lorem Ipsum</h3>
            <p className="text-sm text-gray-400 mb-4">10th FEB, 2023</p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              veniam est.
            </p>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
