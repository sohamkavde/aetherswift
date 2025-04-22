import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import Header from "../Home/Header";

export default function Herosection() {
  return (
    <>
    <div className="bg-black text-white px-4 md:px-2 py-8 font-sans">
       <div className="mb-10">
        <Header/>
        </div> 
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0 md:space-x-10 px-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            <span className="text-red-600">AetherSwift (AESH)</span>{" "}
            <span className="text-red-400">Seed Sale:</span>{" "}
            <span className="text-gray-300">Powering the Future of Decentralized Velocity</span>
          </h2>
          <p className="text-gray-300 text-md">
            Join the AetherSwift (AESH) Seed Sale for early access, exclusive benefits, and the opportunity to help shape the future of high-speed decentralized infrastructure.
          </p>
          <p className="text-gray-400 text-md">
            Secure your spot now and become part of a cutting-edge movement driving the next generation of ultra-fast, scalable blockchain innovation.
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-semibold w-fit">
            HOW TO BUY
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-[#0c0c0c] border border-red-900 rounded-lg p-8 shadow-xl">
          <h3 className="text-3xl font-semibold text-red-600 mb-4">AETHER SWIFT TOKEN</h3>
          <p className="text-sm text-gray-300 mb-6">
            Join the AetherSWIFT (AESH) Token presale and experience the future of lightning-fast decentralized transactions. Secure your tokens now to access exclusive early access perks and take your crypto journey to the next level!
          </p>

          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-bold mb-6">
            Connect Wallet
          </button>

          {/* Price Indicator */}
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-300 mb-4">
            <span>Current price: <span className="text-white">$0.001</span></span>
            <FaArrowRight className="text-gray-400" />
            <span>Current price: <span className="text-white">$0.002</span></span>
          </div>

          {/* USDT Icon */}
          <div className="flex justify-center mb-4">
            <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full text-white text-sm">
              <SiTether /> <span>USDT</span>
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-gray-300 mb-1">You can Buy with</label>
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded px-4 py-2">
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
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded px-4 py-2">
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
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-bold">
            Approve
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
