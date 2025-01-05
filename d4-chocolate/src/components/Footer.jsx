import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Us Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Contact Us</h3>
          <p className="text-gray-300">
            <a href="mailto:raghadahma22@gmail.com" className="hover:underline">
              raghadahma22@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            <a href="tel:+963994654973" className="hover:underline">
              +963 994654973
            </a>
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Useful Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Social</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#twitter" className="text-gray-300 hover:text-yellow-400 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#youtube" className="text-gray-300 hover:text-yellow-400 text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#instagram" className="text-gray-300 hover:text-yellow-400 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#facebook" className="text-gray-300 hover:text-yellow-400 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-400 my-4"></div>

      {/* Newsletter Section */}
      <div className="py-6 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            Subscribe to our newsletter
          </h3>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="E.g. john@gmail.com"
              className="w-1/2 md:w-1/4 px-4 py-2 text-gray-700 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
