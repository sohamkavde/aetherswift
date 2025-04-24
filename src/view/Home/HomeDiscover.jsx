import React from "react";
import bg_Second from "../../assets/bg_second.png";
import dice from "../../assets/dice.png";
import GettyImages_988641054 from "../../assets/GettyImages-988641054.mp4";

const HomeDiscover = () => {
  return (
    <section
      id="about-us"
      className="bg-black text-white flex flex-col pt-8 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_Second})` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-black/40 " />

      {/* Content */}
      <div className="relative px-[5%] sm:px-[5%] w-full text-center sm:text-left">
        {/* <div className="absolute left-0 top-0 bottom-0 w-[100%] bg-cover bg-center md:bg-[#000]    z-10"></div> */}
        <h1 className="text-4xl md:text-6xl font-semibold font-philosopher leading-tight">
          Discover <span className="text-brand">AetherSWIFT</span> – Where
          Trading Meets Gaming
        </h1>

        <p className="absolute z-12 mt-6 text-sm sm:text-2xl  text-gray-300 px-4 sm:px-0 sm:pl-[8%] sm:pr-[15%] py-3">
          AetherSWIFT (AESH) is a decentralized ecosystem blending
          high-performance Forex trading with immersive blockchain gaming.
        </p>
      </div>

      {/* About Us Section */}
      <div className="relative flex flex-col sm:flex-row z-10 px-[5%] w-full">
        <div className="w-full sm:w-[60%] space-y-7 pt-[40%] md:pt-[15%] pb-[2%] text-center sm:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-100 font-philosopher ">
            About Us
          </h2>
          <p className="text-md md:text-2xl  text-gray-300 pt-6 sm:px-0">
            AetherSWIFT (AESH) is a next-generation blockchain project
            redefining the way users engage with trading and gaming platforms.
            Built on principles of transparency, decentralization, and rewarding
            participation, AESH serves as a powerful utility token within a
            dynamic digital ecosystem.
          </p>
        </div>

        {/* Dice Image */}
        <div className="relative pt-[15%] pb-[2%] w-full sm:w-1/2 flex justify-center sm:justify-start">
  <div className="relative w-full pr-0 sm:pr-10 mx-auto">

    {/* Black Blur Background */}
    {/* <div className="absolute  bg-red  z-[0] blur-xl rounded-full" /> */}

    {/* Existing Red Gradient Blur */}
    <div className="absolute inset-0 bg-black blur-md opacity-80 z-[-1]  w-full h-full" />

    <div
      className="relative w-full h-[300px] overflow-hidden flex justify-center"
      style={{
        clipPath:
          "polygon(0% 0%, 0% 12%, 6% 12%, 6% 31%, 0 31%, 0% 100%, 49% 100%, 49% 91%, 84% 90%, 84% 100%, 100% 99%, 100% 13%, 92% 13%, 92% 0)",
      }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
        autoPlay
        loop
        muted
        playsInline

        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <source src={GettyImages_988641054} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default HomeDiscover;
