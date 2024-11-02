import { motion } from "framer-motion";

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dal with Vegetable and Rice",
      description:
        "A hearty dish of lentils cooked with fresh vegetables served with rice.",
      price: "50৳",
    },
    {
      id: 2,
      name: "Fish with Rice",
      description: "Deliciously cooked fish served with steamed rice.",
      price: "100৳",
    },
    {
      id: 3,
      name: "Egg with Rice",
      description: "Scrambled or boiled eggs served with a side of rice.",
      price: "50৳",
    },
    {
      id: 4,
      name: "Meat with Rice",
      description: "Tender meat served with a generous portion of rice.",
      price: "100৳",
    },
    {
      id: 5,
      name: "Biryani with Cold Drinks",
      description:
        "A flavorful biryani dish served with refreshing cold drinks.",
      price: "100৳",
    },
    {
      id: 6,
      name: "Cow Meat with Rice",
      description: "Savory cow meat curry served alongside steamed rice.",
      price: "100৳",
    },
    {
      id: 7,
      name: "Weekly Special Meal",
      description: "A surprise special meal prepared fresh every week.",
      price: "100৳",
    },
  ];

  return (
    <section className="bg-[#e8f5e9] py-16 px-4 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Menu
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-700 text-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
              <p className="text-slate-200 mb-2">{item.description}</p>
              <span className="text-lg font-bold text-yellow-500">
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
