import React, { useState } from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaBitcoin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import { SiBinance, SiTether, SiCoinbase } from "react-icons/si";

import bgvideo from "../../assets/bgvideo.mp4";
import Herocard_over from "../../assets/herocard_over.png";
import Herocard from "../../assets/herocard.png";
import bitmax from "../../assets/bitmax_icon.png";

import Header from "./Header";
import { Link } from "react-router-dom";

// import partners icon
import coinmarktetcap from "../../assets/partner/coinmarketcap.webp";
import bscscan from "../../assets/partner/bscscan.webp";
import coinstore from "../../assets/partner/coinstore.webp";
import metamask from "../../assets/partner/metamask.webp";
import trustwallet from "../../assets/partner/trustwallet.webp";
import pancackcap from "../../assets/partner/pancackcap.webp";

export default function Herosection() {
  return (
    <>
      <div
        id="Home"
        className="relative bg-black text-white font-sans pt-6 bg-cover"
      >
        {/* <div className="absolute left-0 top-0 bottom-0 w-full bg-cover bg-center md:bg-[#000] opacity-20 z-[-2]"></div> */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: `url(${Herocard_over})` }}
        ></div>
        <Header />
        {/* Hero Section */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between px-8 pt-4 pb-0 md:pt-10">
          <div className="max-w-xl relative z-2">
            <h1 className="text-4xl md:text-6xl font-semibold font-philosopher text-second leading-tight">
              Play the Future <span className="text-second">with</span>{" "}
              <span className="text-brand font-bold">AETHERSWIFT</span>
            </h1>
            <p className="text-2xl font-semibold text-second mt-3 mb-16">
              Your Gateway to Decentralized{" "}
              <span className="text-brand">Casino Gaming</span>!
            </p>
            <p className="text-lg text-medium text-gray-200 mb-10">
              Experience blockchain-powered casino games, earn rewards, stake
              tokens, and boost gameplay with{" "}
              <span className="text-brand font-semibold">AESH</span>
            </p>

            {/* Buttons */}
            <div className="flex space-x-6 mb-6">
              <div className="">
                <div className="bg-black border border-gray-300  rounded-md">
                  <button className="relative bottom-1 w-full h-full ml-1 px-9 md:px-12 py-2 rounded-lg text-second font-philosopher font-bold text-sm md:text-2xl bg-brand border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
                    <Link
                      to="presale "
                      className="no-underline text-white hover:text-white"
                    >
                      Buy Now
                    </Link>
                  </button>
                </div>
              </div>

              <div className="">
                <div className="bg-black border border-gray-300  rounded-md">
                  <Link
                    to="https://aethers-swift.gitbook.io/aether-swift/"
                    target="_blank"
                    className="text-black hover:text-black"
                  >
                    <button className="relative bottom-1 w-full h-full ml-1 px-6 md:px-8 py-2 rounded-lg   font-philosopher font-bold  text-sm md:text-2xl  bg-white text-black border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200">
                      WHITEPAPER
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-2xl text-second mt-10 ml-5 mb-5">
              <FaFacebookF className="hover:text-red-500" />
              <FaYoutube className="hover:text-red-500" />
              <FaXTwitter className="hover:text-red-500" />
              <FaInstagram className="hover:text-red-500" />
              <TbBrandTelegram className="hover:text-red-500" />
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10 flex justify-center items-center relative z-10 md:w-[70%]">
            <img
              src={Herocard}
              alt="Cards and Dice"
              className="w-full md:w-[400px] md:h-[350px] object-contain"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
            />
          </div>
        </div>

        {/* Partners Bar */}
        {/* <div className="relative z-10 overflow-hidden bg-gradient-to-r from-black to-[#fcfeff] py-8 text-gray-900 font-medium">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center px-4">
            <div className="flex items-center space-x-4 text-xl sm:text-2xl">
              <SiBinance className="w-7 h-7 md:w-12 md:h-12" />{" "}
              <span>Binance</span>
            </div>
            <div className="flex items-center space-x-4 text-xl sm:text-2xl">
              <span>Coinbase</span>
            </div>
            <div className="flex items-center space-x-4 text-xl sm:text-2xl">
              <FaBitcoin className="rotate-[-14deg] w-7 h-7 md:w-12 md:h-12" />{" "}
              <span>Bitcoin</span>
            </div>
            <div className="flex items-center space-x-4 text-xl sm:text-2xl">
              <SiTether className="w-7 h-7 md:w-12 md:h-12" />{" "}
              <span>Tether</span>
            </div>
            <div className="flex items-center text-xl sm:text-2xl pr-10">
              <img
                src={bitmax}
                alt="bitmax"
                className="w-7 h-7 md:w-8 md:h-8"
              />
              <p>
                <span className="font-normal">Bit</span>Max
              </p>
            </div>
          </div>
        </div> */}

        <div className="relative z-10 overflow-hidden bg-gradient-to-r from-black to-[#fcfeff] py-8 text-gray-900 font-medium">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center px-4">
            <img
              src={coinmarktetcap}
              alt="coinmarktetcap"
              className="h-10 md:h-10"
            />
            <img src={pancackcap} alt="pancackcap" className="h-10 md:h-10" />
            <img
              src={trustwallet}
              alt="trustwallet"
              className="h-10 md:h-10 pr-10"
            />
            <img src={metamask} alt="metamask" className="h-10 md:h-10" />
            <img src={bscscan} alt="bscscan" className="h-10 md:h-10" />
            <img src={coinstore} alt="coinstore" className="h-10 md:h-10" />

          </div>
        </div>
      </div>
    </>
  );
}
