import React from "react";
// import { FaWallet } from "react-icons/fa";
// import { SiTrustwallet, SiCoinbase } from "react-icons/si";
// import { RiSecurePaymentLine } from "react-icons/ri";
 import  recievetoken from "../../assets/recievetoken.png";
 import  tokens from "../../assets/tokens.png";
 import buyAESH from "../../assets/buyAESH.png";
const StepOneWalletSetup = () => {
  return (
    <div className="bg-black text-white py-2 px-6 md:px-2">
      <div className="w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side - Text */}
        <div className="space-y-5">
          <h3 className="text-red-800 font-bold text-xl mb-2 underline">STEP 1</h3>
          <h2 className="text-2xl font-bold text-white mb-4">Set Up Your Wallet</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>
              To get started, ensure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect.
              <span className="text-white">(We recommend Trust Wallet or Safe Pal Wallet)</span>
            </li>
            <li>
              For the best purchasing experience, use a desktop browser with MetaMask. This will provide a smoother transaction process.
            </li>
            <li>
              If you are purchasing on a mobile device, we recommend using Trust Wallet or Plus Wallet and connecting through the built-in Wallet Connect feature.
            </li>
          </ul>
        </div>

        {/* Right Side - Logos */}
        <div className="grid place-items-center">
            <div className="w-[100%]">
          <img src={tokens} alt="MetaMask" className="w-[100%]" />          

            </div>
        </div>
      </div>
    </div>
  );
};

const StepTwoBuyAESH = () => {
    return (
      <div className="bg-black text-white py-2 px-4 md:px-2">
        <div className="max-w-6xl mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Token Icons */}
          <div className="flex items-center justify-center">
              <img src={buyAESH} alt="USDT" className="w-[100%]" />               
          </div>
  
          {/* Right Side - Text */}
          <div>
            <h3 className="text-red-800 font-bold text-xl mb-2 underline">STEP 2</h3>
            <h2 className="text-2xl font-bold text-white mb-4">Buy AESH with USDT</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Click the "Connect Wallet" button to link your wallet.</li>
              <li>Enter the amount of USDT you'd like to use and click "Approve" to authorize the transaction.</li>
              <li>Once approved, click "Buy" to complete your AESH token purchase.</li>
              <li>After the transaction is confirmed, your AESH tokens will be automatically delivered to your wallet.</li>
            </ul>
          </div>
  
        </div>
      </div>
    );
  }; 

  const StepThreeReceiveAESH = () => {
    return (
      <div className="bg-black text-white py-5 px-4 md:px-2">
        <div className="max-w-6xl mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text */}
          <div>
            <h3 className="text-red-800 font-bold text-xl mb-2 underline">STEP 3</h3>
            <h2 className="text-2xl font-bold text-white mb-4">Receive Your AESH Tokens</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Your AESH tokens will be credited directly to your connected wallet after the transaction is confirmed.</li>
              <li>We recommend holding onto your tokens to fully benefit from the future growth and opportunities within the AESH Protocol ecosystem.</li>
            </ul>
          </div>
  
          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={recievetoken}
              alt="Receive Tokens"
              className="max-h-52"
            />
          </div>
  
        </div>
      </div>
    );
  };
const BuyAESHSteps = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center py-16">
            <h1 className="text-red-900 font-bold font-philosopher relative">HOW TO BUY AETHER SWIFT TOKEN</h1>
        </div>

        {/* Step 1 */}
        <div className="border border-red-800 border-r-0 p-6  rounded-br-none">
        <StepOneWalletSetup/>          
        </div>

        {/* Step 2 */}
        <div className="border border-red-800 p-6  border-t-0 border-l-0">
          <StepTwoBuyAESH/>
        </div>

        {/* Step 3 */}
        <div className="border border-red-800 p-6  border-r-0">
            <StepThreeReceiveAESH/>           
        </div>
        
      </div>
    </section>
  );
};

export default BuyAESHSteps;
