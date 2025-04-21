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
    <div className="bg-black text-white px-4 py-16 md:px-16">
      <div className="text-center w-[80%] tracking-wide mx-auto">
        <h2 className="text-2xl md:text-5xl font-semibold font-philosopher text-gray-300">
          Understanding the Tokenomics of the{" "} <br />
          <span className="text-red-800">AETHER SWIFT</span> Token
        </h2>
        <p className="mt-4 text-gray-100 text-lg">
          The AETHER SWIFT Token is likely crafted as the backbone of the AETHER SWIFT ecosystem.
          The distribution of our <span className="text-[#7E1518] font-bold">50 cr. AESH tokens</span> is designed to reward early investors,
          support the platform’s development, and fuel community engagement.
        </p>
      </div>

      {/* Pie Chart Placeholder and Labels */}
      <div className="relative  mt-16 grid place-items-center pl-10"
      >
         <div className="w-[100%]">
            <img src={name} alt="name" className="w-full" />
         </div>

       
      </div>

      {/* Token Details */}
      <div className="mt-16 grid  grid-cols-2 gap-4 w-[100%] md:w-[50%] mx-auto">
        {tokenDetails.map((item, index) => (
          <div
            key={index}
            className="border-2 border-red-500 text-center px-4 py-3 rounded-full bg-black text-white flex justify-between items-center col-span-1"
          >
            <p className="text-lg text-white">{item.label}</p>
            <p className="text-lg   text-white">{item.value}</p>
          </div>
        ))}
        <div className="col-span-2 grid place-items-center">
        <div
            key={6}
            className="border-2 border-red-500 text-center px-4 py-3 rounded-full bg-black text-white flex justify-between items-center col-span-1 w-[50%]"
          >
            <p className="text-lg text-white">Network</p>
            <p className="text-lg   text-white">{'BEP-20'}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
