import {
  FaBookOpen,
  FaBullseye,
  FaEye,
  FaChartLine,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBookOpen />,
    title: "Our Story",
    text:
      "Entrepreneurs Assembly was founded to create a thriving ecosystem where entrepreneurs connect, collaborate, learn, and grow together. We believe every great business begins with a bold idea supported by the right community.",
  },
  {
    icon: <FaBullseye />,
    title: "Mission",
    text:
      "To empower entrepreneurs through mentorship, networking, practical learning, and opportunities that transform ideas into sustainable businesses.",
  },
  {
    icon: <FaEye />,
    title: "Vision",
    text:
      "To become Africa's leading entrepreneurial community, inspiring innovation, economic growth, and transformational leadership.",
  },
  {
    icon: <FaChartLine />,
    title: "Our Impact",
    text:
      "Through our programs and community, we are helping entrepreneurs launch businesses, build partnerships, access mentorship, and create lasting social and economic impact.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-800">
            About Entrepreneurs Assembly
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            Entrepreneurs Assembly is more than a network—it's a movement
            committed to equipping visionary entrepreneurs with the knowledge,
            connections, and opportunities needed to build businesses that
            transform Africa.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {cards.map((card, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-green-700 text-5xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {card.text}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;