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
                  className="w-32 md:w-[28%] mr-3 rounded-md"
                />
              </div>
              <p className="text-md mb-10   w-[80%]">
                AetherSwift (AESH) stands out as a versatile token, powering gaming,
                staking, NFTs, and decentralized finance (DeFi) within the online
                casino and betting ecosystem.
              </p>
            </div>
  
            {/* Right Column */}
            <div className="flex justify-between text-center col-span-2 gap-4 pr-[10%]">
              <div className="flex   items-center flex-col">
                <h3 className="text-red-700 underline font-semibold mb-2">
                  Pages
                </h3>
                <ul className="text-md grid place-items-center">
                <li className="cursor-pointer hover:underline"><a href="#Home" className="text-white font-normal hover:text-red-500">
            Home
          </a></li>
                <li className="cursor-pointer hover:underline"> <a href="#about-us" className="text-white font-normal hover:text-red-500">
          About  Us
          </a></li>
                <li className="cursor-pointer hover:underline"><a href="#Usecases" className="text-white font-normal hover:text-red-500">
            Usecases
          </a></li>
                <li className="cursor-pointer hover:underline"><a href="#Toknomics" className="text-white font-normal hover:text-red-500">
            Toknomics
          </a></li>
                <li className="cursor-pointer hover:underline"><a href="#Roadmap" className="text-white font-normal hover:text-red-500">
            Roadmap
          </a></li>
                <li className="cursor-pointer hover:underline"><a href="#Contract-Address" className="text-white font-normal hover:text-red-500">
            Contract Address
          </a></li> 
                </ul>
              </div>
              <div className="flex   flex-col">
                <h3 className="text-red-700 underline font-semibold">Resources</h3>
                <ul className="text-md">
                <li className="cursor-pointer hover:underline">Whitepaper</li>
                <li className="cursor-pointer hover:underline">Buy Now</li>
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
                <div className="text-[10px] mt-4 pb-10 ">@2025 All Rights Reserved</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  