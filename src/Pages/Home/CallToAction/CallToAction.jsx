import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative mt-12 w-full py-16 px-6 bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-600  mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Join Our Community?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enjoy delicious meals and be part of a vibrant community. Sign up
          today and experience the difference!
        </motion.p>
        <motion.button
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Sign Up Now
        </motion.button>
      </div>

      {/* Decorative Dotted Background Elements */}
      <motion.div
        className="absolute top-8 left-8 w-40 h-40 rounded-full bg-indigo-200 opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-8 right-8 w-40 h-40 rounded-full bg-teal-200 opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      ></motion.div>
    </section>
  );
};

export default CallToAction;
