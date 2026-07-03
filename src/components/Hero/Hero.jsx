import { motion } from "framer-motion";
import heroImage from "../../assets/images/heroimagex.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        src={heroImage}
        alt="Entrepreneur Assembly"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">

        {/* Community Name */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
        >
          Entrepreneur{" "}
          <span className="text-yellow-500">
            Assembly
          </span>
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
        >
          Where Visionary Entrepreneurs
          <br />
           <span className="text-yellow-500">
           Build Africa's Future
           </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg md:text-xl leading-9 text-gray-200"
        >
          Entrepreneurs Assembly is a thriving community where ambitious
          entrepreneurs connect, learn, collaborate, and grow sustainable
          businesses that create lasting impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-6"
        >
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition duration-300">
            Join Community
          </button>

          <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;