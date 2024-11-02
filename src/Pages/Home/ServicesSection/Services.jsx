import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Online Meal Ordering",
      description:
        "Order your meals online and have them ready when you arrive.",
    },
    {
      id: 2,
      title: "Menu Customization",
      description: "Customize your meals based on your dietary preferences.",
    },
    {
      id: 3,
      title: "Real-time Notifications",
      description:
        "Receive notifications for menu updates and meal availability.",
    },
    {
      id: 4,
      title: "Feedback & Ratings",
      description:
        "Provide feedback on meals to help us improve your experience.",
    },
    {
      id: 5,
      title: "Community Events",
      description: "Participate in community events and cooking classes.",
    },
    {
      id: 6,
      title: "Health Tracking",
      description: "Track your nutritional intake and meal history easily.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 text-blue-400"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
