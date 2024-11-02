import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative py-16 px-6 bg-gray-900  mt-12 text-slate-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out for any inquiries or collaborations. We’d love
          to hear from you!
        </motion.p>

        {/* Contact Details */}
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          {/* Email Section */}
          <motion.div
            className="text-center mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:jakuanultimate777@gmail.com"
              className="text-lg underline hover:text-indigo-100 transition duration-300"
            >
              jakuanultimate777@gmail.com
            </a>
          </motion.div>

          {/* Phone Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+8801870540683"
              className="text-lg underline hover:text-indigo-100 transition duration-300"
            >
              +8801870540683
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Animation */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 rounded-full bg-purple-200 opacity-20 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-indigo-200 opacity-20 blur-3xl"
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

export default ContactSection;
