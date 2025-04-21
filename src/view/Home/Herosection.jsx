import React from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaBitcoin,
} from "react-icons/fa";
import { SiBinance, SiTether, SiCoinbase } from "react-icons/si";
import Herocard from "../../assets/herocard.png";
import Herocard_over from "../../assets/herocard_over.png";
import Logo from "../../assets/logo.png";
export default function Herosection() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans pt-6">
      <div
        className="absolute right-0 top-0 bottom-0 w-[100%] md:w-[60%] bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${Herocard_over})` }}
      ></div>
      {/* <div className="absolute left-0 top-0 bottom-0 w-[100%] bg-cover bg-center md:bg-[#000]  opacity-20  z-10"></div> */}

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-red-800 rounded-md  w-32">
            <img src={Logo} alt="logo" className="w-[100%] rounded-sm" />
          </div>
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-light cursor-pointer">
          <a href="#" className="text-white font-heebo hover:text-red-500">
            Home
          </a>
          <a href="#" className="text-white font-heebo hover:text-red-500">
            Stages
          </a>
          <a href="#" className="text-white font-heebo hover:text-red-500">
            Toknomics
          </a>
          <a href="#" className="text-white font-heebo hover:text-red-500">
            Roadmap
          </a>
          <a href="#" className="text-white font-heebo hover:text-red-500">
            Contract Address
          </a>
          <a href="#" className="text-white font-heebo hover:text-red-500">
            FAQ's
          </a>
        </div>
        <div className="">
          <div className="bg-black border border-gray-300  rounded-md">
            <button className="relative bottom-1 w-full h-full ml-1  px-12 py-1 rounded-lg text-gray-200 font-philosopher font-bold  text-sm md:text-2xl bg-gradient-to-r from-[#600000] to-[#990000] border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className=" relative flex flex-col md:flex-row justify-between items-center px-12 py-16 md:py-0">
        <div className="max-w-xl relative z-2">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 font-philosopher text-gray-400 ">
             Play the Future <span className="text-gray-300">with</span> {" "}
            <span className="text-red-800 font-bold">AETHERSWIFT</span>
          </h1>
          <p className="text-lg text-gray-300 mb-4 font-semibold">
            Your Gateway to Decentralized{" "}
            <span className="text-red-800 font-semibold">Casino Gaming</span>!
          </p>
          <p className="text-md text-medium text-gray-300 mb-6">
            Experience blockchain-powered casino games, earn rewards, stake
            tokens, and boost gameplay with{" "}
            <span className="text-red-800 font-semibold">AESH</span>
          </p>

          <div className="flex space-x-4 mb-6">
            <div className="">
              <div className="bg-black border border-gray-300  rounded-md">
                <button className="relative bottom-1 w-full h-full ml-1  px-12 py-1 rounded-lg text-gray-300 font-philosopher font-bold text-sm md:text-2xl bg-gradient-to-r from-[#531a1a] to-[#990000f4] border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="">
              <div className="bg-black border border-gray-300  rounded-md">
                <button className="relative bottom-1 w-full h-full ml-1  px-8 py-1 rounded-lg   font-philosopher font-bold  text-sm md:text-2xl  bg-[#d6cece] text-black border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
                  WHITEPAPER
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 text-xl text-gray-400">
            <FaFacebookF className="text-white hover:text-red-500" />
            <FaYoutube className="text-white hover:text-red-500" />
            <FaTwitter className="text-white hover:text-red-500" />
            <FaInstagram className="text-white hover:text-red-500" />
            <FaTelegramPlane className="text-white hover:text-red-500" />
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10 relative z-17 w-[70%]">
          <img src={Herocard} alt="Cards and Dice" className="w-[100%]" />
          {/* Optional: Add soft shadow or floating effect */}
        </div>
      </div>

      {/* Partners Bar */}
      <div className="bg-gradient-to-r from-[#D9D9D900] to-[#fcfeff] px-4 py-8 flex flex-col sm:flex-row sm:flex-wrap sm:justify-around sm:items-center text-gray-900 font-medium">
        <div className="flex items-center space-x-2 text-8xl justify-center mb-4 sm:mb-0 sm:text-2xl sm:pl-[22%]">
          <SiBinance className="w-8 h-8" /> <span>Binance</span>
        </div>
        <div className="flex items-center space-x-2 text-xl justify-center mb-4 sm:mb-0 sm:text-2xl">
          <span>Coinbase</span>
        </div>
        <div className="flex items-center space-x-2 text-xl justify-center mb-4 sm:mb-0 sm:text-2xl">
          <FaBitcoin className="rotate-[-14deg] w-8 h-8" /> <span>Bitcoin</span>
        </div>
        <div className="flex items-center space-x-2 text-xl justify-center mb-4 sm:mb-0 sm:text-2xl">
          <SiTether className="w-8 h-8" /> <span>Tether</span>
        </div>
        <div className="flex items-center space-x-2 text-xl justify-center sm:text-2xl">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M3 14L11 6H15L6 18H2L3 14Z" fill="#FF4081" />
            <path d="M9 14L17 6H21L12 18H8L9 14Z" fill="#2196F3" />
          </svg>
          <span>BitMEX</span>
        </div>
      </div>
    </div>
  );
}
