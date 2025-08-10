import React from 'react'
import Header from '../component/Header/header'
import PricingPlans from '../component/pricingPlans/PricingPlans'
import CustomPricingPlans from '../component/customQuoteSection/CustomQuoteSection'
import bgImg from '@/../../public/image/price-bg.jpg' // ✅ Make sure the path is correct

export default function page() {
  return (
    <>
<Header heading="Pricing Plans" img={bgImg} tital=" Transparent pricing for all your digital needs. Choose the plan that fits your business goals." />
<PricingPlans/>
<CustomPricingPlans/>

    </>
  )
}
