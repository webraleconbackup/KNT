import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // 👇 Close menu when navigating (used in mobile links)
  const handleNavClick = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Quality", path: "/quality" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-[1900px] mx-auto flex items-center justify-between px-4 lg:px-16 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="logo/logo2.png"
            alt="KNT Logo"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-semibold text-lg">
          <Link
            to="/"
            className={`relative pb-1 transition ${
              location.pathname === "/"
                ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-500"
                : "text-gray-800 hover:text-red-500"
            }`}
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`relative flex items-center gap-1 pb-1 transition ${
                location.pathname.startsWith("/about")
                  ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500"
                  : "text-gray-800 hover:text-red-500"
              }`}
            >
              About Us <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md w-48 py-1 z-50">
                <Link
                  to="/who-we-are"
                  className="block px-4 py-2 text-[16px] hover:bg-gray-100 transition"
                >
                  Who-We-Are
                </Link>
                <Link
                  to="/mission-vision"
                  className="block px-4 py-2 text-[16px] hover:bg-gray-100 transition"
                >
                  Mission & Vision
                </Link>
                <Link
                  to="/board-of-member"
                  className="block px-4 py-2 text-[16px] hover:bg-gray-100 transition"
                >
                  Board of Member
                </Link>
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative pb-1 transition ${
                location.pathname === item.path
                  ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-500"
                  : "text-gray-800 hover:text-red-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-[#f52b2b] text-white font-bold px-6 py-3 rounded-md hover:bg-red-600 transition"
        >
          CONTACT US
        </Link>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 space-y-2 pb-3">
          <Link
            to="/"
            onClick={handleNavClick} // 👈 closes menu
            className={`block transition ${
              location.pathname === "/"
                ? "text-red-500 font-semibold"
                : "hover:text-red-500"
            }`}
          >
            Home
          </Link>

          {/* About Us dropdown */}
          <div>
            <button
              className="flex items-center gap-1 hover:text-red-500 transition"
              onClick={toggleDropdown}
            >
              About Us <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/who-we-are"
                  onClick={handleNavClick} // 👈 closes menu
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Who-We-Are
                </Link>
                <Link
                  to="/mission-vision"
                  onClick={handleNavClick} // 👈 closes menu
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Mission & Vision
                </Link>
                <Link
                  to="/board-of-member"
                  onClick={handleNavClick} // 👈 closes menu
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Board of Member
                </Link>
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleNavClick} // 👈 closes menu
              className={`block transition ${
                location.pathname === item.path
                  ? "text-red-500 font-semibold"
                  : "hover:text-red-500"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={handleNavClick} // 👈 closes menu
            className="block bg-[#f52b2b] text-white text-center font-bold px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
