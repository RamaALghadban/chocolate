import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PopularSection from "./components/PopularSection";
import AboutUs from "./components/AboutUs";
import ProductSection from "./components/ProductSection";
import SpecialOffer from "./components/SpecialOffer";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <PopularSection />
      <AboutUs />
      <ProductSection />
      <SpecialOffer />
      <div className="bg-black text-white min-h-screen flex flex-col">
      {/* محتويات أخرى مثل Navbar، Home، إلخ يمكن إضافتها هنا */}

      <div className="flex-grow">
        <Testimonial />
        </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
