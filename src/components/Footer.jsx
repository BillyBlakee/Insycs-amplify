import React from 'react';
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#e5e9f0] text-text-color py-8 px-16">
      <div className="flex justify-between items-center text-lg">
        <div>
          <img src={logo} alt="INSYCS Insurance" className="h-16 w-auto" />
        </div>
        <div>
          <p>INSYCS Insurance &copy; 2023-2024</p>
          <a
            href="mailto:dylan@gmail.com"
            className="underline text-text-color"
          >
            dylan@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;