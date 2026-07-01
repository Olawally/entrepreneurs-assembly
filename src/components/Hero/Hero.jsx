import { motion } from "framer-motion";
import heroImage  from "../../assets/images/heroimagex.png"; // Adjust the path if needed

const Hero = () => {

    return (

        <section
            id="home"
            className="min-h-screen flex items-center bg-gradient-to-br from-#D3D3D3-800 via-#D3D3D3-700 to-#D3D3D3-500 text-#F8FAFC"
        >

            <div className="max-w-7xl mx-auto px-8">

                <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col items-center mb-10"
>
  <div className="relative mt-[90px] w-full max-w-[1200px] mx-auto">
  <img
    src={heroImage}
    alt="Entrepreneur Assembly"
    className="w-full h-[300px] object-cover"
  />

  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-white text-center">
      Entrepreneur <span className=" text-yellow-500 " >Assembly</span>
    </h2>
  </div>
</div>
</motion.div>
                <motion.h1

                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}

                    className="text-6xl font-extrabold leading-tight"

                >

                    Where Visionary Entrepreneurs

                    <br />

                    Build Africa's Future

                </motion.h1>

                <motion.p

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .5 }}

                    className="mt-8 max-w-2xl text-xl leading-9"

                >

                    Entrepreneurs Assembly is a thriving community where ambitious entrepreneurs connect, learn, collaborate, and grow sustainable businesses that create lasting impact.

                </motion.p>

                <div className="mt-10 flex gap-6">

                    <button className="bg-#0F172A text-[#64748B]-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

                        Join Community

                    </button>

                    <button className="border-2 border-[#64748B] px-8 py-4 rounded-full hover:bg-#F59E0B hover:text-gold-700 transition">

                        Learn More

                    </button>

                </div>

            </div>

        </section>

    )

}

export default Hero