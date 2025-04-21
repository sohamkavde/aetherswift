import {
    FaFacebookF,
    FaYoutube,
    FaXTwitter,
    FaInstagram,
  } from "react-icons/fa6";
  import { FaTelegramPlane } from "react-icons/fa";
  
  import Logo from "../../assets/logo.png";
  import footer_img from "../../assets/footer_img.png";
  
  const Footer = () => {
    return (
      <footer className="relative text-white">
        {/* Black Overlay */}
        {/* <div className="absolute w-full  bg-black z-2"></div> */}
  
        {/* Background Image and Content */}
        <div
          className="relative bg-cover bg-no-repeat px-6 md:px-12 pt-12"
          style={{ backgroundImage: `url(${footer_img})` }}
        >
            <div className="absolute left-0 top-0 bottom-0 w-[100%] bg-cover bg-center bg-[#000]  opacity-80  z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {/* Left Column */}
            <div className="col-span-3">
              <div className="flex items-center mb-4">
                <img
                  src={Logo}
                  alt="AetherSwift Logo"
                  className="w-32 mr-3 rounded-md"
                />
              </div>
              <p className="text-sm   max-w-sm">
                AetherSwift (AESH) stands out as a versatile token, powering gaming,
                staking, NFTs, and decentralized finance (DeFi) within the online
                casino and betting ecosystem.
              </p>
            </div>
  
            {/* Right Column */}
            <div className="flex justify-between text-center col-span-2 gap-4 pr-[10%]">
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-red-700 underline font-semibold mb-2">
                  Important
                </h3>
                <ul className="space-y-1 text-sm">
                <li className="cursor-pointer hover:underline">Presale Stages</li>
                <li className="cursor-pointer hover:underline">Tokenomics</li>
                <li className="cursor-pointer hover:underline">Roadmap</li>
                <li className="cursor-pointer hover:underline">Buy Now</li>
                <li className="cursor-pointer hover:underline">FAQ's</li>
                  <li className="invisible">FAQ's</li>
                  <li className="invisible">FAQ's</li>
                </ul>
              </div>
              <div className="flex justify-center flex-col">
                <h3 className="text-red-700 underline font-semibold">About Us</h3>
                <ul className="text-sm">
                <li className="cursor-pointer hover:underline">Whitepaper</li>
                <li className="cursor-pointer hover:underline">Privacy Policy</li>
                <li className="cursor-pointer hover:underline">Terms & Conditions</li>
                </ul>
  
                <div className="flex gap-6 justify-center items-center py-[10%] text-xl">
                  <FaFacebookF className="text-red-700 hover:text-white cursor-pointer" />
                  <FaYoutube className="text-red-700 hover:text-white cursor-pointer" />
                  <FaXTwitter className="text-red-700 hover:text-white cursor-pointer" />
                  <FaInstagram className="text-red-700 hover:text-white cursor-pointer" />
                  <FaTelegramPlane className="text-red-700 hover:text-white cursor-pointer" />
                </div>
                <div className="text-xs mt-4">@2025 All Rights Reserved</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  