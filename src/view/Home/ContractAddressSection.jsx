import React, { useState } from 'react';

const ContractAddressSection = () => {
  const [copied, setCopied] = useState(false);
  const address = '0x31B5c05BB36870e27Bf8947412a5c9754eBefE3E';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
    id='Contract-Address'
    className="bg-black pt-20 md:pt-0 text-white pb-16 px-4 flex flex-col items-center w-[100%]">
      <h2 className="text-3xl md:text-6xl font-extrabold text-second  tracking-wide mb-4 font-philosopher">
        CONTRACT ADDRESS
      </h2>
      <p className="text-center text-sm md:text-2xl font-normal tracking-wide  mb-10">
        Get a clear and detailed overview of AetherSwift Token’s supply, allocation, and distribution strategy
      </p>

      <div className="border-2 border-gray-300 rounded-3xl px-6 py-6 space-y-10 w-[100%] md:w-[80%] text-center">
        <p className="mb-4 font-mono break-all text-sm md:text-2xl text-second">{address}</p>
        <div className="">
              <div className="bg-black border border-gray-300  rounded-md w-[50%] md:w-[20%] mx-auto">
                <button className="relative bottom-1 w-full h-full ml-1  px-1 py-1 rounded-lg text-second font-bold text-md bg-brand border border-gray-300 shadow-[4px_4px_0px_#00000088] hover:scale-105 transition-transform duration-200"   onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy Address'}
                </button>
              </div>
        </div>
       
      </div>
    </div>
  );
};

export default ContractAddressSection;
