import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import Header from "../Home/Header";
import bgImage from "../../assets/patti.png";
import sidepatti from "../../assets/sidepatti.png";
import tether from "../../assets/tether.png";
import coin from "../../assets/coin.png";
import FEGT from "../../assets/FEGT.mp4";
import logo_of_sidediv from "../../assets/logo_of_sidediv.png";
 
function TokenInput() {
  return (
    <div className="flex items-center justify-between border border-brand rounded-full px-4 py-2 bg-[#1a1a1a] w-full">
      {/* Left Icon and Input */}
      <div className="flex items-center space-x-2 w-full">
        <img
          src={tether} // Make sure this path points to your USDT logo
          alt="USDT"
          className="w-8 h-8 bg-white rounded-full"
        />
        <input
          type="text"
          placeholder="Enter Amount"
          className="bg-transparent placeholder-white text-white outline-none w-full"
        />
      </div>

      {/* USDT Badge */}
      <div className="flex items-center bg-brand text-white px-3 pr-5 py-1 rounded-full space-x-1">
        <img
          src={tether}
          alt="USDT"
          className="w-4 h-4 bg-white rounded-full"
        />
        <span className="text-sm">USDT</span>
      </div>
    </div>
  );
}

function TokenInput2() {
  return (
    <div className="flex items-center justify-between border border-brand rounded-full px-4 py-2 bg-[#1a1a1a] w-full">
      {/* Left Icon and Input */}
      <div className="flex items-center space-x-2 w-full">
        <img
          src={coin} // Make sure this path points to your USDT logo
          alt="USDT"
          className="w-9 h-9 rounded-full"
        />
        <input
          type="text"
          placeholder="Enter Amount"
          className="bg-transparent placeholder-white text-white outline-none w-full"
        />
      </div>
    </div>
  );
}

export default function Herosection() {
  return (
    <>
      <div className="relative bg-black text-white px-4 md:px-2 py-8 font-sans">
         <video
                  className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={FEGT} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
        <div
          className="absolute z-0 bg-cover bg-no-repeat w-[400px]  h-[400px] top-[90%] left-0 opacity-10"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div
          className="absolute z-[0] bg-cover bg-no-repeat w-[400px]  h-[400px] top-[90%] right-[0%] opacity-5"
          style={{ backgroundImage: `url(${sidepatti})` }}
        ></div>
        <div className="mb-10">
          <Header />
        </div>
        <div className="relative flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10 md:px-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-8 pt-[10%]">
            <h2 className="text-3xl md:text-5xl font-bold leading-normal font-philosopher">
              <span className="text-brand">AetherSwift (AESH)</span> <br />
              <span className="text-brand">Seed Sale:</span>{" "}
              <span className="text-second">
                Powering the Future of Decentralized Velocity
              </span>
            </h2>
            <p className="text-gray-300 text-sm md:text-lg">
              Join the AetherSwift (AESH) Seed Sale for early access, exclusive
              benefits, and the opportunity to help shape the future of
              high-speed decentralized infrastructure.
            </p>
            <p className="text-gray-300 text-sm md:text-lg">
              Secure your spot now and become part of a cutting-edge movement
              driving the next generation of ultra-fast, scalable blockchain
              innovation.
            </p>
            {/* <div className="flex justify-center pt-20">
              <button className="bg-red-700 hover:bg-red-800 text-white px-16 py-2 rounded-md -tracking-tight border border-gray-50   w-fit opacity-65 mx-auto">
                HOW TO BUY
              </button>
            </div> */}
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 border-2  border-brand rounded-3xl py-4 px-2 shadow-xl">
            <h3 className="text-2xl md:text-5xl font-philosopher font-semibold text-center  bg-gradient-to-r from-red-800 via-red-400 to-gray-300 bg-clip-text text-transparent mb-2">
              AETHER SWIFT TOKEN
            </h3>
            {/* <p className="text-sm text-center py-5 text-white mb-2">
              Join the AetherSWIFT (AESH) Token presale and experience the
              future of lightning-fast decentralized transactions. Secure your
              tokens now to access exclusive early access perks and take your
              crypto journey to the next level!
            </p> */}
            <div className="flex justify-center pt-5 pb-2">
              <img src={logo_of_sidediv} alt="alt" className="w-[60%]"/>
            </div>
            <div className="flex justify-center py-10">
              <button className="border border-gray-300 w-[80%] md:w-[40%] text-md md:2xl  bg-brand text-white  rounded-md font-bold mb-4 font-philosopher">
                Connect Wallet
              </button>
            </div>

            {/* Price Indicator */}
            <div className="flex items-center justify-center space-x-3 text-sm text-second mb-4 border-t border-b py-4 border-brand">
              <span>
                Current price: <span className="text-white">$0.001</span>
              </span>
              <FaArrowRight className="text-second" />
              <span>
                Current price: <span className="text-white">$0.002</span>
              </span>
            </div>

            {/* USDT Icon */}
            <div className="flex justify-center mb-4">
              <button className="flex items-center space-x-2 bg-brand  hover:bg-red-700 px-8 py-2 rounded-full text-white text-sm font-philosopher border border-gray-300">
                <img
                  src={tether}
                  alt="tether"
                  className="w-5 bg-white rounded-full"
                />{" "}
                <span>USDT</span>
              </button>
            </div>

            {/* Input Fields */}
            <div className="space-y-4 mb-6 px-0 md:px-12">
              <div>
                <label className="block text-second mb-1">
                  You can Buy with
                </label>
                <div className="flex items-center pt-2">
                  {/* <input
                    type="number"
                    placeholder="Enter Amount"
                    className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
                  /> */}
                  <TokenInput />
                </div>
              </div>

              <div>
                <label className="block text-second mb-1">You will get</label>
                <div className="flex items-cente pt-2">
                  <TokenInput2 />
                </div>
              </div>
            </div>

            {/* Approve Button */}
            <div className="px-0 md:px-12 flex justify-center">
              <button className="w-full md:w-[50%] border border-gray-300 font-philosopher bg-brand hover:bg-red-800 text-white py-2 rounded-md font-bold">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
