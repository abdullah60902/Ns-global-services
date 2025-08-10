"use client"
import React from "react";
import Header from '../component/Header/header'
import bgImg from '@/../../public/image/about.jpg' // ✅ Make sure the path is correct

export default function Page() {
  return (
    <>
      {/* 🔵 About Us Top Heading */}
   

      {/* 🔵 Header with background image */}
      <Header
        heading="About Us"
        img={bgImg}
        tital="We provide expert digital services across multiple countries, customized to your business goals."
      />

      {/* 🔵 Services Section by Country */}
      <section className="px-4 py-16 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">

          

          {/* 🇦🇪 UAE */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 text-left">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">🇦🇪 United Arab Emirates (UAE)</h2>
            <p className="text-gray-700">Our services in UAE focus on:</p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              <li>Corporate Website Design & Hosting</li>
              <li>Custom Web Applications</li>
              <li>Brand Identity & Graphic Design</li>
              <li>E-commerce Solutions</li>
              <li>Performance Marketing</li>
            </ul>
          </div>

          {/* 🇬🇧 UK */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 text-left">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">🇬🇧 United Kingdom (UK)</h2>
            <p className="text-gray-700">In the UK, we specialize in:</p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              <li>IT Consultancy & System Integration</li>
              <li>Custom Software Development</li>
              <li>Healthcare IT Solutions</li>
              <li>Digital Transformation Services</li>
              <li>Cloud Hosting & DevOps</li>
            </ul>
          </div>

          {/* 🇵🇰 Pakistan */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 text-left">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">🇵🇰 Pakistan</h2>
            <p className="text-gray-700">
              In Pakistan, we offer a wide range of digital services including:
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              <li>Web Development (React, Next.js, WordPress)</li>
              <li>Mobile App Development (Android/iOS)</li>
              <li>SEO & Digital Marketing</li>
              <li>Social Media Management</li>
              <li>UI/UX Designing</li>
            </ul>
          </div>

          {/* 🇺🇸 USA */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">🇺🇸 United States (USA)</h2>
            <p className="text-gray-700">Our USA team delivers top-notch digital solutions including:</p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              <li>Full-stack Web & App Development</li>
              <li>AI & Machine Learning Integration</li>
              <li>Enterprise Solutions & SaaS Platforms</li>
              <li>Technical Support & Maintenance</li>
              <li>Cloud Infrastructure Management</li>
            </ul>
          </div>
          
        </div>
      </section>
    </>
  );
}
