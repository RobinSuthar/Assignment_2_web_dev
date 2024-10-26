import React from "react";

var time = new Date();
var currentTime = time.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white shadow-lg p-4 mt-4">
      <div className="text-center">
        <p>&copy; {currentTime} The French Fries School. All rights reserved.</p>
        <div className="flex justify-center space-x-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
