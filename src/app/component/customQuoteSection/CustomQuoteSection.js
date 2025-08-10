import React from 'react';
import Link from 'next/link';
export default function CustomQuoteSection() {
  return (
    <section className="bg-gray-100 py-16 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Need Something Custom?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Have specific requirements that don{"'"}t fit our standard plans? Let{"'"}s create a custom solution tailored to your unique needs.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
            ∞
          </div>
          <h3 className="font-semibold mt-4">Unlimited Revisions</h3>
          <p className="text-gray-600 text-sm mt-1">
            We work until you{"'"}re 100% satisfied
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
            24
          </div>
          <h3 className="font-semibold mt-4">24/7 Support</h3>
          <p className="text-gray-600 text-sm mt-1">
            Round-the-clock assistance<br />when you need it
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
            ✓
          </div>
          <h3 className="font-semibold mt-4">Quality Guarantee</h3>
          <p className="text-gray-600 text-sm mt-1">
            100% satisfaction or your<br />money back
          </p>
        </div>
      </div>
      {/* Get Custom Quote → per click ho to ye Contact page per mave kary  */}

<Link href="/Contact#customservices" className="inline-block">
      <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
        Get Custom Quote →
      </button>
</Link>
    </section>
  );
}
