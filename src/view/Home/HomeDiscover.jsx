import React from "react";
import bg_Second from "../../assets/bg_second.png";
import dice from "../../assets/dice.png";

const HomeDiscover = () => {
  return (
    <section
      className="min-h-screen bg-black text-white flex flex-col py-[10%] relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_Second})` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-black/40 " />


      {/* Content */}
      <div className="relative px-[5%] sm:px-[10%] w-full text-center sm:text-left">
      <div className="absolute left-0 top-0 bottom-0 w-[100%] bg-cover bg-center md:bg-[#000]  opacity-20  z-10"></div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold font-philosopher leading-tight">
          Discover <span className="text-red-700">AetherSWIFT</span> – Where
          Trading Meets Gaming
        </h1>

        <p className="absolute z-12 mt-6 text-sm sm:text-base font-medium text-gray-300 px-4 sm:px-0 sm:pl-[12%] sm:pr-[15%]">
          AetherSWIFT (AESH) is a decentralized ecosystem blending
          high-performance Forex trading with immersive blockchain gaming.
        </p>
      </div>

      {/* About Us Section */}
      <div className="relative flex flex-col sm:flex-row z-10 px-[5%] w-full">
        <div className="mt-12 w-full sm:w-1/2 space-y-7 py-[10%] text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-gray-100 font-philosopher opacity-70">
            About Us
          </h2>
          <p className="text-sm sm:text-md md:text-base font-medium text-gray-300 px-4 sm:px-0">
            AetherSWIFT (AESH) is a next-generation blockchain project
            redefining the way users engage with trading and gaming platforms.
            Built on principles of transparency, decentralization, and rewarding
            participation, AESH serves as a powerful utility token within a
            dynamic digital ecosystem.
          </p>
        </div>

        {/* Dice Image */}
        <div className="relative mt-10 sm:mt-[8%] w-full sm:w-1/2 flex justify-center sm:justify-start ">
          <div className="relative w-3/4 sm:w-[70%] pr-0 sm:pr-10 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-red-700 to-black opacity-30 z-[-1] blur-xl rounded-full" />
            <img
              src={dice}
              alt="Dice graphic"
              className="w-full rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDiscover;
