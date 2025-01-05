import React, { useState } from "react";
import Chocolate from "../../image/Chocolate.png";
import jar from "../../image/jar.png";

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  const products = [
    {
      id: 1,
      name: "White Chocolate Spread",
      description: "Lorem ipsum dolor sit amet, aut consectetur doloribus ut deserunt veniam.",
      price: "30.50 USD",
      image: jar,
    },
    {
      id: 2,
      name: "White Chocolate Spread",
      description: "Lorem ipsum dolor sit amet, aut consectetur doloribus ut deserunt veniam.",
      price: "30.50 USD",
      image: jar,
    },
    {
      id: 3,
      name: "White Chocolate Spread",
      description: "Lorem ipsum dolor sit amet, aut consectetur doloribus ut deserunt veniam.",
      price: "30.50 USD",
      image: jar,
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100 font-sans">
      {/* القسم العلوي */}
      <div className="relative mb-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-400 to-yellow-200 rounded-lg"></div>
        <div className="relative z-10 flex items-center space-x-6 px-8 py-6">
          {/* صورة الشوكولاتة */}
          <img src={Chocolate} alt="White Chocolate" className="w-48 h-auto" />
          {/* تفاصيل العنوان */}
          <div className="bg-black text-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-2">White Chocolates</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, aut consectetur doloribus ut deserunt veniam.
            </p>
            <button
              className="bg-yellow-500 text-black px-4 py-2 rounded-md shadow"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة المنتجات */}
      {isVisible && (
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <p className="text-yellow-600 font-bold">{product.price}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="bg-yellow-500 text-white px-4 py-1 rounded-md shadow">
                      Add To Cart
                    </button>
                    <button className="border border-yellow-500 text-yellow-500 px-4 py-1 rounded-md shadow">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* زر عرض الكل */}
          <div className="text-center mt-8">
            <button className="bg-black text-white px-6 py-2 rounded-md shadow-lg">
              View All
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;