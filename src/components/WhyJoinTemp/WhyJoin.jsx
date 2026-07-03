import {
    FaUsers,
    FaHandshake,
    FaChartLine,
    FaGraduationCap,
    FaLightbulb,
    FaRocket
} from "react-icons/fa";

const cards = [

    {
        icon: <FaUsers />,
        title: "Networking",
        text: "Meet entrepreneurs, founders and industry leaders."
    },

    {
        icon: <FaHandshake />,
        title: "Mentorship",
        text: "Learn from experienced business professionals."
    },

    {
        icon: <FaChartLine />,
        title: "Business Growth",
        text: "Discover strategies that scale businesses."
    },

    {
        icon: <FaGraduationCap />,
        title: "Learning",
        text: "Attend practical workshops and masterclasses."
    },

    {
        icon: <FaLightbulb />,
        title: "Innovation",
        text: "Share ideas and collaborate on new opportunities."
    },

    {
        icon: <FaRocket />,
        title: "Opportunities",
        text: "Access partnerships, grants and business exposure."
    }

];

const WhyJoin = () => {

    return (

        <section className="py-28 bg-gray-100">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-5xl font-bold text-center">

                    Why Join Us

                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {cards.map((card, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >

                            <div className="text-5xl text-green-700">

                                {card.icon}

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                {card.title}

                            </h3>

                            <p className="mt-4 text-gray-600">

                                {card.text}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default WhyJoin