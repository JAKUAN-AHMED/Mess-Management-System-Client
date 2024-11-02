import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h2 className="text-base md:text-3xl text-start">Vip Mess</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="focus:outline-none">
            {/* Dropdown Button Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 6h12a1 1 0 110 2H4a1 1 0 110-2zm0 6h12a1 1 0 110 2H4a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col bg-gray-700 p-4 mt-2 rounded">
            <li className="py-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
