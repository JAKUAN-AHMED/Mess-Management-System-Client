import React, { useState } from "react";
import { motion } from "framer-motion";

const FaqSection = () => {
  // State to keep track of which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle an FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "How much does an average meal cost?",
      answer:
        "An average meal costs 50 BDT. Special meals like biryani or meat dishes are priced at 100 BDT.",
    },
    {
      question: "What meals are available daily?",
      answer:
        "We offer meals like dal with vegetables and rice, fish and rice, egg and rice, and meat and rice.",
    },
    {
      question: "Do you have a weekly special meal?",
      answer:
        "Yes, we have a weekly special meal which varies and includes a combination of special dishes.",
    },
    {
      question: "Can we customize our meals?",
      answer:
        "Currently, we offer a fixed menu, but we are looking into customization options for the future.",
    },
    {
      question: "What is the timing for meals?",
      answer:
        "Meals are served at set timings: breakfast from 7:00 AM to 9:00 AM, lunch from 12:00 PM to 2:00 PM, and dinner from 7:00 PM to 9:00 PM.",
    },
  ];

  return (
    <section className="relative mt-12 w-full py-12 px-6 bg-gradient-to-r from-gray-800 via-red-200 to-purple-300 overflow-hidden font-jost">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-2xl text-black">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <motion.div
                  className="mt-4 text-black"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background animation effect */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full opacity-50 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full opacity-50 blur-3xl"
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

export default FaqSection;
