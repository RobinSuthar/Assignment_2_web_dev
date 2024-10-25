import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
