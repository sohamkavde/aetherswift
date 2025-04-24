import React from "react";
import name from "../../assets/name.png";

const TokenomicsSection = () => {
  const allocations = [
    { label: "Community", percent: 25 },
    { label: "Staking & Rewards", percent: 20 },
    { label: "Gaming & Forex Incentive", percent: 15 },
    { label: "Development & Tech Reserve", percent: 15 },
    { label: "Marketing & Partnership", percent: 10 },
    { label: "Team & Advisors", percent: 10 },
    { label: "Ecosystem & Liquidity Reserve", percent: 5 },
  ];

  const tokenDetails = [
    { label: "Token", value: "AetherSwift" },
    { label: "Symbol", value: "AESH" },
    { label: "Supply", value: "50 CR." },
    { label: "Decimal", value: "18" },
  ];

  return (
    <div
    id="Toknomics"
    className="bg-black text-white px-4 pt-16 md:px-16">
      {/* section 01 - Header */}
      <div className="text-center w-[95%] tracking-wide mx-auto">
        <h2 className="text-3xl md:text-6xl font-semibold font-philosopher text-second">
          Understanding the Tokenomics of the <br />
          <span className="text-brand">AETHER SWIFT</span> Token
        </h2>
        <p className="mt-4 text-gray-200 text-lg md:text-2xl">
          The AETHER SWIFT Token is likely crafted as the backbone of the AETHER SWIFT ecosystem.
          The distribution of our <span className="text-brand font-bold">50 cr. AESH tokens</span> is designed to reward early investors,
          support the platform’s development, and fuel community engagement.
        </p>
      </div>

      {/* section 02 - Chart/Image */}
      <div className="mt-20 w-full grid place-items-center">
        <img src={name} alt="Token Distribution Chart" className="w-[90%] max-w-4xl" 
        data-aos="zoom-out"  data-aos-delay="50"
    data-aos-duration="1000"
        />
      </div>

      {/* section 03 - Token Details */}
      <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-6 w-full md:w-[90%] mx-auto">
        {tokenDetails.map((item, index) => (
          <div
            key={index}
            className="border-2 md:border-4 border-brand text-center px-8 py-6 rounded-full bg-black text-white flex justify-between items-center col-span-2 md:col-span-1"
          >
            <p className="text-xl md:text-2xl">{item.label}</p>
            <p className="text-xl md:text-2xl">{item.value}</p>
          </div>
        ))}

        <div className="col-span-2 flex justify-center mt-2">
          <div className="border-2 md:border-4 border-brand text-center px-8 py-6 rounded-full bg-black text-white flex justify-between items-center w-full md:w-[50%]">
            <p className="text-xl md:text-2xl">Network</p>
            <p className="text-xl md:text-2xl">BEP-20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
