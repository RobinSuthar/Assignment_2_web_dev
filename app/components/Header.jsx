import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-700 text-white shadow-lg p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">The French Fries School</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-blue-100">
              Home
            </a>
          </li>
          <li>
            <Link href="/studentList">Student List</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
