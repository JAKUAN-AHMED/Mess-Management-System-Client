import React from "react";
import { motion } from "framer-motion";

import img1 from '../../../assets/first.jpg';
const FooterSection = () => {
  return (
    <footer className="mt-12 relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Brand Name */}
        <motion.div
          className="mb-6 md:mb-0 flex items-center justify-center space-x-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={img1}alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">Mess Management</span>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-col items-center justify-center md:flex-row md:space-x-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" className="hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a
            href="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="/services"
            className="hover:text-gray-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-4 mt-6 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="text-center mt-8 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        &copy; {new Date().getFullYear()} Mess Management. All rights reserved.
      </motion.div>

      {/* Decorative Animation */}
      <motion.div
        className="absolute top-0 left-0 w-20 h-20 rounded-full bg-indigo-500 opacity-20 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-purple-500 opacity-20 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      ></motion.div>
    </footer>
  );
};

export default FooterSection;
