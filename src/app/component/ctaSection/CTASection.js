import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 text-lg mb-8">
          Let's discuss your project and create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
         <Link href="/Contact" className="inline-block">
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 transition">
            Start Your Project <ArrowRight size={18} />
          </button>
          </Link>
          <Link href="/Pricing" className="inline-block">
          <button className="border cursor-pointer border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-md transition">
  View Pricing
</button>
          </Link>

        </div>
      </div>
    </section>
  );
}
