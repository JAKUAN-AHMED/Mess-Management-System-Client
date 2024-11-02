import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <motion.div
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Home Icon */}
        <FaHome
          className="text-3xl text-green-600 hover:text-green-500 cursor-pointer absolute top-4 left-4"
          onClick={() => navigate("/")} // Navigate to homepage on click
          title="Go to Homepage"
        />

        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Create an Account
        </h2>
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 placeholder-gray-400"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 placeholder-gray-400"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Register Button */}
          <motion.button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-600 hover:text-green-500 transition duration-300"
          >
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
