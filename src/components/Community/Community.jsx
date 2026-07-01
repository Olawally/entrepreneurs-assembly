import {
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

const members = [
  {
    name: "Sarah Johnson",
    business: "Founder, GreenTech Africa",
    story:
      "Built a clean-energy startup that now serves over 5,000 households through connections made within Entrepreneurs Assembly.",
  },
  {
    name: "David Mensah",
    business: "CEO, AgroLink",
    story:
      "Scaled his agribusiness through mentorship, strategic partnerships, and networking opportunities from the community.",
  },
  {
    name: "Amina Bello",
    business: "Founder, FemTech Hub",
    story:
      "Expanded her startup into three countries after gaining investors and mentors through Entrepreneurs Assembly.",
  },
];

const Community = () => {
  return (
    <section id="community" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-gray-800">
            Our Community
          </h2>

          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Entrepreneurs Assembly is powered by passionate leaders and
            ambitious entrepreneurs working together to create meaningful
            impact across Africa.
          </p>

        </div>

        {/* Meet the Host */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
              alt="Host"
              className="rounded-3xl shadow-xl"
            />

          </div>

          <div>

            <h3 className="text-4xl font-bold mb-6">
              Meet the Host
            </h3>

            <p className="text-gray-600 leading-8 mb-6">

              Entrepreneurs Assembly is led by a passionate entrepreneur
              dedicated to building a thriving ecosystem where innovators,
              founders, and business leaders can connect, learn, and grow
              together.

            </p>

            <p className="text-gray-600 leading-8 mb-8">

              Through mentorship, strategic partnerships, and practical
              business education, the vision is to empower thousands of
              entrepreneurs to build sustainable businesses that positively
              transform their communities.

            </p>

            <div className="flex gap-5 text-2xl text-green-700">

              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />

              <FaTwitter className="cursor-pointer hover:scale-110 transition" />

            </div>

          </div>

        </div>

        {/* Member Spotlights */}

        <div className="mt-28">

          <h3 className="text-4xl font-bold text-center mb-14">

            Member Spotlights

          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {members.map((member, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >

                <div className="w-20 h-20 rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">

                  {member.name.charAt(0)}

                </div>

                <h4 className="text-2xl font-bold mt-6">

                  {member.name}

                </h4>

                <p className="text-green-700 font-medium mt-2">

                  {member.business}

                </p>

                <p className="text-gray-600 mt-5 leading-7">

                  {member.story}

                </p>

                <button className="mt-8 flex items-center gap-2 text-green-700 font-semibold">

                  Read Story

                  <FaArrowRight />

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Community;