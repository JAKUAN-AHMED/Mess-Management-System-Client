import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import img1 from "../../../assets/first.jpg";
import img2 from "../../../assets/second.jpg";
import img3 from "../../../assets/third.jpg";
import img4 from "../../../assets/4th.jpg";
import img5 from "../../../assets/5th.jpg";
import img6 from "../../../assets/6th.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Delicious Meals Await",
      description:
        "Join us for a culinary experience that you'll never forget!",
      image: img1,
    },
    {
      id: 2,
      title: "Healthy & Nutritious",
      description: "Meals crafted with the finest ingredients just for you.",
      image: img2,
    },
    {
      id: 3,
      title: "Community & Comfort",
      description: "Be a part of a warm and welcoming community.",
      image: img3,
    },
    {
      id: 4,
      title: "Fresh Ingredients Daily",
      description:
        "We source the freshest ingredients to serve you the best meals.",
      image: img4,
    },
    {
      id: 5,
      title: "Experience Culinary Diversity",
      description: "Explore a variety of cuisines from around the world.",
      image: img5,
    },
    {
      id: 6,
      title: "Affordable Meal Plans",
      description: "Enjoy quality meals at prices that won't break the bank.",
      image: img6,
    },
  ];

  return (
    <section className="relative w-full h-fit md:h-[600px] overflow-hidden">
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full  md:h-full flex flex-col items-center justify-center text-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover", 
                backgroundPosition: "center", 
              }}
            >
              <motion.h1
                className="text-3xl md:text-6xl font-bold text-white mb-2 font-jost pt-3"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-base md:text-2xl text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slide.description}
              </motion.p>
              <motion.button
                className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Join Now
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
