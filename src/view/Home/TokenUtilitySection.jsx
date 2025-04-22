import React from "react";
import forex from "../../assets/forex.png";
import casino from "../../assets/cashino.png";
import rewards from "../../assets/rewards.png";
import marketing from "../../assets/marketing.png";
import discount from "../../assets/discount.png";
import exchange from "../../assets/exchange.png";
const tokenFeatures = [
  {
    title: "Forex Trading Integration",
    description:
      "AESH will be seamlessly integrated into a proprietary or partner Forex trading platform, allowing users to.",
    icon: forex,
  },
  {
    title: "Casino Gaming Platform",
    description:
      "Play various blockchain-based casino games like slots, poker, roulette, and more using AESH.",
    icon: casino,
  },
  {
    title: "Staking and Rewards",
    description:
      "AESH holders can stake their tokens to earn passive income.",
    icon: rewards,
  },
  {
    title: "NFT Marketplace",
    description:
      "Trade NFTs to unlock unique gaming items and exclusive experiences.",
    icon: marketing,
  },
  {
    title: "Discount & Offers",
    description:
      "AESH can be earned through a multi-tier referral program.",
    icon: discount,
  },
  {
    title: "Gaming Currency",
    description:
      "AESH can be earned through a multi-tier referral program.",
    icon:exchange,
  },
];

const TokenUtilitySection = () => {
  return (
    <section 
    id="Usecases"
    className="bg-black text-white py-16 px-6 text-center w-full">
      <h2 className="text-3xl md:text-6xl font-philosopher font-semibold mb-2 px-2 md:px-5 opacity-70">
        How <span className="text-red-600">AetherSWIFT</span> Token Works for You
      </h2>
      <p className="text-white text-sm md:text-2xl mb-12">
        Unleash the full potential of AESH Token applications
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 w-[95%] mx-auto">
        {tokenFeatures.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-black rounded-xl p-4 px-1 shadow-lg space-y-5 shadow-red-800/50 hover:shadow-red-600/60 transition-all flex flex-col justify-between h-full min-h-[250px]"
          data-aos="zoom-in" 
           data-aos-delay="50"
    data-aos-duration="1000"
          >
            <div className="px-1">
              <div className="flex justify-center mb-4 w-[100%]">
                <div className="w-[40%] min-h-[125px]">
                <img src={feature.icon} alt="image" className="w-[100%]"/>
                </div>                
             </div>

              <h3 className="text-2xl font-extrabold text-[#7E1518] mb-2 text-center">
                {feature.title}
              </h3>
             <div  className="flex flex-col items-center">
              <p className="text-white text-md text-left pl-3">{feature.description}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TokenUtilitySection;
