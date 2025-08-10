'use client'
import React from 'react'

import Image from 'next/image'
export default function Header({ heading, tital ,img }) {
  return (
    <section className="relative mt-[85px] w-full min-h-[60vh] bg-blue-600 text-white px-4 py-20 sm:py-32">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={img}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
          {heading}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          {tital}
        </p>
      </div>
    </section>
  )
}
