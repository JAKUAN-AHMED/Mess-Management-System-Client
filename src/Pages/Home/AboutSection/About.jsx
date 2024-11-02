import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-100 text-blue-800 py-16 px-4 md:px-10 md:mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Mess Management System
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 font-jost text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our mess management system is designed to streamline the dining
          experience for students and staff. We provide a platform for easy meal
          management, offering diverse and nutritious meal options tailored to
          different dietary needs.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 text-center w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-2">Nutritious Meals</h3>
            <p className="text-gray-600 font-jost">
              We prioritize health and nutrition, crafting meals with fresh
              ingredients to promote well-being.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 text-center w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-2">Community Focused</h3>
            <p className="text-gray-600 font-jost">
              Our system fosters a sense of community, bringing people together
              over shared meals and experiences.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 text-center w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-2">
              Convenient Management
            </h3>
            <p className="text-gray-600 font-jost">
              Easily manage meal selections and dietary preferences through our
              user-friendly interface.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
