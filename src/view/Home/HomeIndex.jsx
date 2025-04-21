import React from 'react';
import Herosection from './Herosection';
import HomeDiscover from './HomeDiscover';
import TokenUtilitySection from './TokenUtilitySection';
import TokenomicsSection from './TokenomicsSection';
import Roadmap from './Roadmap';
import ContractAddressSection from './ContractAddressSection';
import Footer from './Footer';

function HomeIndex() {
  return (
    <>
    <Herosection/>
    <HomeDiscover/>
    <TokenUtilitySection/>
    <TokenomicsSection/>
    <Roadmap/>
    <ContractAddressSection/>
    <Footer/>
    </>
  )
}

export default HomeIndex