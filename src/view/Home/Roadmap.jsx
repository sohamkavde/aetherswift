import React from "react";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour } from "react-icons/fa";
import dice1 from "../../assets/dice1.png"; 
import Bgdice from "../../assets/Bgdice.png";
const phases = [
  {
    title: "Phase 1: Foundation & Launch (Q2 2025)",
    icon: <img src={dice1} alt="Dice One" className="w-full object-contain" />,
    points: [
      "Smart contract deployment on BEP-20 network",
      "Token listing on PancakeSwap",
      "Website and whitepaper release",
      "Initial community building & social media campaigns",
      "Early adopter airdrop and bounty programs",
    ],
  },
  {
    title: "Phase 2: Platform Integration (Q3 2025)",
    icon: <img src={dice1} alt="Dice One" className="w-full object-contain" />,
    points: [
      "Integration of AESH into partner forex trading platform",
      "Launch of the AESH Casino (Beta version)",
      "Initial staking pool release",
      "Influencer and marketing partnerships",
      "Listing on CoinMarketCap and CoinGecko",
    ],
  },
  {
    title: "Phase 3: Ecosystem Expansion (Q4 2025)",
    icon: <img src={dice1} alt="Dice One" className="w-full object-contain" />,
    points: [
      "Full launch of Casino Gaming Platform with NFT features",
      "Cross-chain bridge development for Ethereum & Solana",
      "Mobile app development (Android & iOS)",
      "Community governance via AESH voting system",
      "Strategic partnerships with gaming and trading brands",
    ],
  },
  {
    title: "Phase 4: Global Outreach & Utility Expansion (Q1 2026)",
    icon: <img src={dice1} alt="Dice One" className="w-full object-contain" />,
    points: [
      "AESH global card integration for real-world spending",
      "Forex copy-trading features linked to AESH",
      "Large-scale influencer marketing campaigns",
      "Tier 2 & Tier 3 centralized exchange listings",
      "Launch of AESH DAO for community governance",
    ],
  },
];

export default function Roadmap() {
  return (
    <section 
    id="Roadmap"
    className="bg-black text-white px-2 pt-6 md:px-2">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl text-gray-300 font-bold py-16 font-philosopher">
          Roadmap
        </h2>
        <p className="text-xl md:text-2xl mb-12  w-[80%] mx-auto">
          AETHER SWIFT is revolutionizing the crypto space with a clear roadmap:
          launching token utility, expanding partnerships, enhancing user
          experiences, and driving sustainable growth for long-term success.
        </p>

        <div className="grid gap-y-0 gap-x-0 px-[5%]">
          {/* Phase 1 */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 py-[5%]  md:py-[0%] font-philosopher  "
           data-aos="flip-right"  data-aos-delay="50"
    data-aos-duration="1000"
          >
            <div
              className="bg-[#800000]  inset-10 bg-cover bg-center rounded-tr-3xl rounded-bl-3xl pb-6 shadow-lg text-left space-y-4 border-2"
              style={{ backgroundImage: `url(${Bgdice})` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-[30%]">{phases[0].icon}</div>
                <h3 className="text-xl md:text-4xl  w-[70%] pr-2 font-semibold text-gray-300">{phases[0].title}</h3>
              </div>
              <ul className="list-disc list-inside text-md pl-[2%] md:pl-[10%] pt-[2%] text-white space-y-1">
                {phases[0].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className=""></div>
          </div>

          {/* Phase 2 */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 py-[5%] md:py-[0%] font-philosopher "
          data-aos="flip-left"  data-aos-delay="50"
    data-aos-duration="1000"
          >
            <div></div>
            <div
              className="bg-[#800000] bg-cover bg-center rounded-tl-3xl rounded-br-3xl pb-6 shadow-lg text-left space-y-4 border-2 md:-translate-y-[10%]"
              style={{ backgroundImage: `url(${Bgdice})` }}
            >
              <div className="flex items-center ">
                <div className="w-[30%]">{phases[1].icon}</div>
                <h3 className="text-xl md:text-4xl  w-[70%] font-semibold text-gray-300">{phases[1].title}</h3>
              </div>
              <ul className="list-disc list-inside text-md pl-[2%] md:pl-[10%] pt-[2%] text-white space-y-1">
                {phases[1].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 py-[5%] md:py-[0%] font-philosopher  gap-x-12" 
          data-aos="flip-right"  data-aos-delay="50"
    data-aos-duration="1000"
          >
            <div
              className="bg-[#800000] bg-cover bg-center rounded-tr-3xl rounded-bl-3xl pb-6 shadow-lg text-left space-y-4 border-2 md:-translate-y-[20%]"
              style={{ backgroundImage: `url(${Bgdice})` }}
            >
              <div className="flex items-center ">
                <div className="w-[30%]">{phases[2].icon}</div>
                <h3 className="text-xl md:text-4xl  w-[70%] font-semibold text-gray-300">{phases[2].title}</h3>
              </div>
              <ul className="list-disc list-inside text-md pl-[2%] md:pl-[10%] pt-[2%] text-white space-y-1">
                {phases[2].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div></div>
          </div>

          {/* Phase 4 */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 py-[5%] md:py-[0%] font-philosopher  gap-x-12"
          data-aos="flip-left"  data-aos-delay="50"
    data-aos-duration="1000"
          >
            <div></div>
            <div
              className="bg-[#800000] bg-cover bg-center rounded-tl-3xl rounded-br-3xl pb-6 shadow-lg text-left space-y-4 border-2 md:-translate-y-[30%]"
              style={{ backgroundImage: `url(${Bgdice})` }}
            >
              <div className="flex items-center justify-center">
                <div className="w-[30%]">{phases[3].icon}</div>
                <h3 className="text-lg md:text-3xl w-[70%] font-semibold text-gray-300">{phases[3].title}</h3>
              </div>
              <ul className="list-disc list-inside text-md pl-[2%] md:pl-[10%] pt-[2%] text-white space-y-1">
                {phases[3].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
