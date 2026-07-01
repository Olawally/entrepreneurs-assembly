import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-xl"
          : "bg-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <div className="text-2xl font-bold text-white cursor-pointer tracking-wide">
            Entrepreneurs
            <span className="text-[#D3D3D3]"> Assembly</span>
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-10">

            {["home", "about", "community"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                className="text-gray-200 capitalize cursor-pointer font-medium hover:text-[#F59E0B] transition duration-300 relative group"
              >
                {item}

                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              to="join"
              smooth={true}
              duration={600}
              offset={-70}
              className="bg-[#1D4ED8] hover:bg-[#F59E0B] text-white px-6 py-3 rounded-full cursor-pointer transition duration-300 shadow-lg hover:shadow-xl"
            >
              Join Community
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <div
            onClick={() => setNav(!nav)}
            className="md:hidden text-white text-2xl cursor-pointer"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      {nav && (
        <div className="md:hidden bg-[#0F172A]">

          <div className="flex flex-col items-center py-10 space-y-8">

            {["home", "about", "community"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setNav(false)}
                className="text-white text-lg capitalize cursor-pointer hover:text-[#F59E0B]"
              >
                {item}
              </Link>
            ))}

            <Link
              to="join"
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setNav(false)}
              className="bg-[#1D4ED8] hover:bg-[#F59E0B] text-white px-6 py-3 rounded-full"
            >
              Join Community
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;