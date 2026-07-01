import { FaArrowRight } from "react-icons/fa";

const Join = () => {
  return (
    <section
      id="join"
      className="py-24 bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Build Something Great?
        </h2>

        <p className="mt-8 text-xl leading-9 max-w-3xl mx-auto">

          Whether you're just starting your entrepreneurial journey or
          already leading a growing business, Entrepreneurs Assembly
          provides the network, mentorship, knowledge, and opportunities
          you need to reach the next level.

        </p>

        <button className="mt-12 bg-white text-green-700 px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 mx-auto hover:scale-105 transition duration-300 shadow-xl">

          Join the Community

          <FaArrowRight />

        </button>

      </div>
    </section>
  );
};

export default Join;