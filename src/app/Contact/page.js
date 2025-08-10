import React from "react";
import ContactSection from "../component/contactInfoSection/ContactInfoSection";
import Header from "../component/Header/header";
import CustomServices from "../component/customservices/Customservices";
import bgImg from "@/../../public/image/contact-bg.jpg"; // ✅ Make sure the path is correct
export default function page() {
  return (
    <>
      <Header
        heading="Contact Us"
        img={bgImg}
        tital="Get in touch with us for any inquiries or support."
      />
      <ContactSection />
      {/* Custom Services Section */}
      <div id="customservices">
        <CustomServices />
      </div>
      {/* End of Custom Services Section */}
    </>
  );
}
