// components/Footer.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../../public/image/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
           {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
  <div className="w-38 h-20 relative overflow-hidden">
    <Image
      src={logo}
      alt="Logo"
      layout="fill"
      objectFit="cover"
      priority
      className="w-38 h-20"
    />
  </div>
</Link>

          <p className="text-gray-400 mb-4">
            Empowering businesses with cutting-edge digital solutions. Transform your vision into reality with our expert team.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>

<ul className="space-y-2">
  <li>
    <Link href="/Services#weoffer" className="hover:text-white">
      Web Development
    </Link>
  </li>
  <li>
    <Link href="/Services#weoffer" className="hover:text-white">
      App Development
    </Link>
  </li>
  <li>
    <Link href="/Services#weoffer" className="hover:text-white">
      SEO Optimization
    </Link>
  </li>
  <li>
    <Link href="/Services#weoffer" className="hover:text-white">
      Graphic Design
    </Link>
  </li>
  <li>
    <Link href="/Services#weoffer" className="hover:text-white">
      Digital Marketing
    </Link>
  </li>
</ul>

        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <Link href="/" className="hover:text-white"><li>Home</li></Link>
            <Link href="/About" className="hover:text-white"><li>About Us</li></Link>
            <Link href="/Pricing" className="hover:text-white"><li>Pricing</li></Link>
            <Link href="/Contact" className="hover:text-white"><li>Contact</li></Link>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-blue-500" />
<a 
  href="mailto:ns.global.ser@gmail.com"
  className="hover:text-white"
>
  ns.global.ser@gmail.com
</a>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-blue-500" />
              <a href="tel:+35794554049" className="hover:text-white">+35794554049</a>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-blue-500" />
              <span>  Krizi 11, Agioi Omologites<br />
            1080 Nicosia, Lefkosia<br />
            Cyprus</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 px-4">
        <p className="text-center sm:text-left mb-2 sm:mb-0">© 2024 NS Global Services. All rights reserved.</p>
        <p className="text-center sm:text-right">Design by <span className="text-blue-400 font-medium">Noman / Abdullah</span></p>
      </div>
    </footer>
  );
}