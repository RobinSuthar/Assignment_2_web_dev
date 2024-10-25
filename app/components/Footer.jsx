import React from "react";

var time = new Date();
var currentTime = time.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="text-center">
        <p>&copy; {currentTime} French Fries. All rights reserved.</p>
        <div className="flex justify-center space-x-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
