import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-green-500 mb-4">
              Entrepreneurs Assembly
            </h2>

            <p className="text-gray-400 leading-8">

              Building a thriving community where entrepreneurs connect,
              learn, collaborate, and grow together.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-green-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-green-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#community" className="hover:text-green-500 transition">
                  Community
                </a>
              </li>

              <li>
                <a href="#join" className="hover:text-green-500 transition">
                  Join
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                info@entrepreneursassembly.com
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-green-500" />
                +234 XXX XXX XXXX
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-green-500" />
                Lagos, Nigeria
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">

          © 2026 Entrepreneurs Assembly. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;