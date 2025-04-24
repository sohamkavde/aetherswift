import React, { useEffect, useState } from 'react';
import Logo from "../../assets/logo.png";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleHashNav = (hash) => {
    navigate(`/${hash}`);
    setSidebarOpen(false); // Close sidebar after clicking
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 relative z-10">
        <div className="flex items-center space-x-4 w-[35%] md:w-[15%]">
          <img onClick={() => handleHashNav("#home")} src={Logo} alt="logo" className="w-full rounded-md cursor-pointer" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-7 text-md font-light cursor-pointer">
          <Link to="/" className="text-white hover:text-red-500">Home</Link>
          <span onClick={() => handleHashNav("#about-us")} className="text-white font-medium hover:text-red-500">About Us</span>
          <span onClick={() => handleHashNav("#Usecases")} className="text-white font-medium hover:text-red-500">Usecases</span>
          <span onClick={() => handleHashNav("#Toknomics")} className="text-white font-medium hover:text-red-500">Tokenomics</span>
          <span onClick={() => handleHashNav("#Roadmap")} className="text-white font-medium hover:text-red-500">Roadmap</span>
          <span onClick={() => handleHashNav("#Contract-Address")} className="text-white font-medium hover:text-red-500">Contract Address</span>
        </div>

        {/* Buy Now Desktop Button */}
        <div className="hidden md:block">
          <div className="bg-black border border-gray-300 rounded-md">
            <Link to="/presale" className="no-underline text-white hover:text-white">
              <button className="relative bottom-1 px-10 py-2 rounded-lg text-gray-200 font-philosopher font-semibold text-sm md:text-2xl bg-gradient-to-r from-[#600000] to-[#990000] border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform">
                Buy Now
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <HiOutlineMenu className="text-3xl cursor-pointer" onClick={() => setSidebarOpen(true)} />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-[#111] z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg`}>
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <img src={Logo} alt="logo" className="w-28" />
          <HiX className="text-white text-3xl cursor-pointer" onClick={() => setSidebarOpen(false)} />
        </div>
        <ul className="flex flex-col space-y-6 text-white mt-10 px-6 text-lg font-light">
          <li><Link to="/" className="text-white hover:text-red-900" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><span onClick={() => handleHashNav("#about-us")} className="text-white font-medium hover:text-red-900 cursor-pointer">About Us</span></li>
          <li><span onClick={() => handleHashNav("#Usecases")} className="text-white font-medium hover:text-red-900 cursor-pointer">Usecases</span></li>
          <li><span onClick={() => handleHashNav("#Toknomics")} className="text-white font-medium hover:text-red-900 cursor-pointer">Tokenomics</span></li>
          <li><span onClick={() => handleHashNav("#Roadmap")} className="text-white font-medium hover:text-red-900 cursor-pointer">Roadmap</span></li>
          <li><span onClick={() => handleHashNav("#Contract-Address")} className="text-white font-medium hover:text-red-900 cursor-pointer">Contract Address</span></li>
        </ul>
        <div className="px-6 mt-10">
          <div className="bg-black border border-gray-300 rounded-md">
            <Link to="/presale" className="no-underline text-white hover:text-white">
              <button className="relative bottom-1 w-full px-10 py-2 rounded-lg text-gray-200 font-philosopher font-semibold text-sm md:text-2xl bg-gradient-to-r from-[#600000] to-[#990000] border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
