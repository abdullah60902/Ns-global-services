import Image from 'next/image'
import { ReactTyped } from 'react-typed'
import Link from 'next/link'
import { motion } from 'framer-motion'
import bgImg from '@/../public/image/hero-bg.jpg'

// Animation variants for heading
const headingVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

export default function HeroSection() {
  return (
    <section className="relative mt-[65px] w-full min-h-screen bg-blue-600 text-white px-4 py-32 sm:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={bgImg}
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col justify-center items-center h-full">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Grow Your Business with <br />
          <span className="text-blue-100">Expert Services</span>
        </motion.h1>

        {/* Typed Animation Text */}
        <div className="mt-4 text-lg md:text-2xl font-semibold text-white drop-shadow-sm">
          <ReactTyped
            strings={[
              'Website Development',
              'App Development',
              'UI/UX Design',
              'Digital Marketing',
              'E-Commerce Solutions'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        <p className="mt-6 text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Transform your digital presence with our comprehensive suite of web development, design, and marketing services.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/Pricing" className="inline-block">
            <button className="bg-white cursor-pointer text-blue-600 hover:bg-blue-100 transition px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg duration-300">
              Get Started Today →
            </button>
          </Link>
          <Link href="/About" className="inline-block">
            <button className="bg-transparent border cursor-pointer border-white text-white hover:bg-white hover:text-blue-600 transition px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
