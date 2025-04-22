import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import Header from "../Home/Header";
import bgImage from "../../assets/patti.png";
import tether from "../../assets/tether.jpg";
export default function Herosection() {
  return (
    <>
      <div className="relative bg-black text-white px-4 md:px-2 py-8 font-sans">
      <div
        className="absolute z-0 bg-cover bg-no-repeat w-[500px]  h-[500px] top-[80%] left-0 opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

<div
        className="absolute z-0 bg-cover bg-no-repeat w-[400px]  h-[400px] top-[90%] left-[80%] opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
        <div className="mb-10">
          <Header />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-10 md:space-y-0 md:space-x-10 md:px-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-8 mt-12">
            <h2 className="text-3xl md:text-5xl font-bold leading-normal font-philosopher opacity-85">
              <span className="text-red-800">AetherSwift (AESH)</span>{" "} <br />
              <span className="text-red-800">Seed Sale:</span>{" "}
              <span className="text-gray-50 opacity-90">
                Powering the Future of Decentralized Velocity
              </span>
            </h2>
            <p className="text-gray-100 text-lg">
              Join the AetherSwift (AESH) Seed Sale for early access, exclusive
              benefits, and the opportunity to help shape the future of
              high-speed decentralized infrastructure.
            </p>
            <p className="text-gray-300 text-lg">
              Secure your spot now and become part of a cutting-edge movement
              driving the next generation of ultra-fast, scalable blockchain
              innovation.
            </p>
            <div className="flex justify-center pt-20">
              <button className="bg-red-700 hover:bg-red-800 text-white px-16 py-2 rounded-md -tracking-tight border border-gray-50   w-fit opacity-65 mx-auto">
                HOW TO BUY
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 bg-[#0c0c0c] border border-red-900 rounded-lg py-8 px-2 shadow-xl">
            <h3 className="text-2xl md:text-5xl font-philosopher font-semibold text-center  bg-gradient-to-r from-red-800 via-red-400 to-gray-300 bg-clip-text text-transparent mb-4">
              AETHER SWIFT TOKEN
            </h3>
            <p className="text-sm text-center py-5 text-gray-300 mb-6">
              Join the AetherSWIFT (AESH) Token presale and experience the
              future of lightning-fast decentralized transactions. Secure your
              tokens now to access exclusive early access perks and take your
              crypto journey to the next level!
            </p>
            <div className="flex justify-center">
              <button className="border border-gray-300 w-[80%] md:w-[40%] text-md md:2xl  bg-gradient-to-r from-[#600000] to-[#990000]  text-white py-2 rounded-md font-bold mb-6 font-philosopher">
                Connect Wallet
              </button>
            </div>

            {/* Price Indicator */}
            <div className="flex items-center justify-center space-x-3 text-sm text-gray-300 mb-4 border-t border-b py-10 border-red-950">
              <span>
                Current price: <span className="text-white">$0.001</span>
              </span>
              <FaArrowRight className="text-gray-400" />
              <span>
                Current price: <span className="text-white">$0.002</span>
              </span>
            </div>

            {/* USDT Icon */}
            <div className="flex justify-center mb-4">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-[#600000] to-[#990000]  hover:bg-red-700 px-6 py-2 rounded-full text-white text-sm font-philosopher border border-gray-300" >
               <img src={tether} alt="tether" className="w-10"/> <span>USDT</span>
              </button>
            </div>

            {/* Input Fields */}
            <div className="space-y-4 mb-6 px-0 md:px-12">
              <div>
                <label className="block text-gray-300 mb-1">
                  You can Buy with
                </label>
                <div className="flex items-center bg-[#1a1a1a] border border-red-700 rounded px-4 py-2">
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
                  />
                  <SiTether className="text-green-400 ml-2" />
                  <span className="ml-1 text-gray-300">USDT</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">You will get</label>
                <div className="flex items-center bg-[#1a1a1a] border border-red-700 rounded px-4 py-2">
                  <input
                    type="text"
                    placeholder="Get Amount"
                    className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
                    disabled
                  />
                  <FaCoins className="text-yellow-400 ml-2" />
                </div>
              </div>
            </div>

            {/* Approve Button */}
            <div className="px-0 md:px-12 flex justify-center">
              <button className="w-full md:w-[50%] border border-gray-300 font-philosopher bg-gradient-to-r from-[#600000] to-[#990000] hover:bg-red-800 text-white py-2 rounded-md font-bold">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
