"use client";
import Navbar from "./component/navbar/Navbar";
import HeroSection from "./component/heroSection/HeroSection";
import StatsSection from "./component/statsSection/StatsSection";
import Feedback from "./component/feedback/Feedback";
import CallToAction from "./component/callToAction/CallToAction";
import OurServices from "./component/our-Services/OurServices";
import Whatsapp from "./component/whatsapp/Whatsapp";
import ScrollToTop from "./component/Scrolltotop/ScrollToTop";


export default function Home() {
  return (
   <>
<HeroSection/>
<StatsSection/>
<OurServices/>
<Feedback/>
<CallToAction/>
      <Whatsapp />
      <ScrollToTop />

   </>
  );
}
