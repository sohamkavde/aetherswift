import React, { useState } from 'react'
import Logo from "../../assets/logo.png";

import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>  {/* Background video and overlays */}

    {/* Navbar */}
    <nav className="flex justify-between items-center px-6 py-4 relative z-10">
      <div className="flex items-center space-x-4 w-[35%] md:w-[15%]">
        <img src={Logo} alt="logo" className="w-full rounded-md" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-7 text-md font-light cursor-pointer">
        <Link to="/" className="text-white hover:text-red-500">Home</Link>
        <a href="#about-us" className="text-white hover:text-red-500">About Us</a>
        <a href="#Usecases" className="text-white hover:text-red-500">Usecases</a>
        <a href="#Toknomics" className="text-white hover:text-red-500">Toknomics</a>
        <a href="#Roadmap" className="text-white hover:text-red-500">Roadmap</a>
        <a href="#Contract-Address" className="text-white hover:text-red-500">Contract Address</a>
      </div>

      {/* Buy Now Desktop Button */}
      {/* <div className="hidden md:block">
        <button className="px-10 py-2 text-gray-200 font-semibold text-sm md:text-2xl bg-gradient-to-r from-[#600000] to-[#990000] border border-gray-300 rounded-lg shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform">
          Buy Now
        </button>
      </div> */}

      <div className="hidden md:block">
      <div className="bg-black border border-gray-300  rounded-md">
        <button className="relative bottom-1 w-full h-full ml-1  px-10 py-2 rounded-lg text-gray-200 font-philosopher font-semibold  text-sm md:text-2xl bg-gradient-to-r from-[#600000] to-[#990000] border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
        <Link to="seed-sale " className='no-underline text-white hover:text-white'>
          Buy Now        
        </Link>
        </button>
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
        <li><a href="#about-us" className="text-white hover:text-red-900" onClick={() => setSidebarOpen(false)}>About Us</a></li>
        <li><a href="#Usecases" className="text-white hover:text-red-900" onClick={() => setSidebarOpen(false)}>Usecases</a></li>
        <li><a href="#Toknomics" className="text-white hover:text-red-900" onClick={() => setSidebarOpen(false)}>Toknomics</a></li>
        <li><a href="#Roadmap" className="text-white hover:text-red-900" onClick={() => setSidebarOpen(false)}>Roadmap</a></li>
        <li><a href="#Contract-Address" className="text-white hover:text-red-900" onClick={() => setSidebarOpen(false)}>Contract Address</a></li>
      </ul>
      <div className="px-6 mt-10">
       <div className="">
      <div className="bg-black border border-gray-300  rounded-md">
        <button className="relative bottom-1 w-full h-full ml-1  px-10 py-2 rounded-lg text-gray-200 font-philosopher font-semibold  text-sm md:text-2xl bg-gradient-to-r from-[#600000] to-[#990000] border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
        <Link to="seed-sale " className='no-underline text-white hover:text-white'>
          Buy Now        
        </Link>
        </button>
      </div>
      </div>
      </div>
    </div></div>
  )
}

export default Header