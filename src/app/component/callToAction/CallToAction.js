import React from "react";
import Link from "next/link";
export default function CallToAction() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-500 py-20 px-4">
     <div className="text-center px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
    Ready to Transform Your <br />
    <span className="text-yellow-300">Business?</span>
  </h2>

  <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
    Join hundreds of satisfied clients who have grown their businesses with
    our expert digital services.
  </p>
</div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link href="/Contact" className="inline-block">
        <button className="bg-white cursor-pointer text-blue-600 hover:bg-blue-100 transition px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg duration-300">
          Start Your Project →
        </button>
        </Link>
        <Link href="/Pricing" className="inline-block">
        <button className="bg-transparent cursor-pointer border border-white text-white hover:bg-white hover:text-blue-600 transition px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg duration-300">
          View Pricing
        </button>
        </Link>
      </div>
    </section>
  );
}
