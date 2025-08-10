import React from 'react'
import Header from '../component/Header/header'
import Weoffer from '../component/weoffer/Weoffer'    
import Process from '../component/process/Process'
import CTASection from '../component/ctaSection/CTASection'
import bgImg from '@/../../public/image/service-bg.jpg' // ✅ Make sure the path is correct

export default function page() {
  return (
    <>
    <Header heading="Our Services" img={bgImg}  tital=" Comprehensive digital solutions tailored to your business needs. From concept
        to deployment, we've got you covered." />
<div id="weoffer">
    <Weoffer/>
</div>
  <Process/>
  <CTASection/>
  
    </>
  )
}
