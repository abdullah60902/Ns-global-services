export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-12 max-w-lg sm:max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="text-yellow-400 text-2xl mb-4 text-left">
              {'★★★★★'}
            </div>
            <p className="text-gray-700 text-base mb-6 text-left leading-relaxed">
              &quot;NS Global Services transformed our online presence completely. Our sales increased by 300% in just 6 months!&quot;
            </p>
            <div className="text-left">
              <p className="font-bold text-gray-800 text-lg">Sarah Johnson</p>
              <p className="text-gray-500 text-sm">TechStartup Inc.</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="text-yellow-400 text-2xl mb-4 text-left">
              {'★★★★★'}
            </div>
            <p className="text-gray-700 text-base mb-6 text-left leading-relaxed">
              &quot;Professional, reliable, and innovative. They delivered exactly what we needed, on time and within budget.&quot;
            </p>
            <div className="text-left">
              <p className="font-bold text-gray-800 text-lg">Michael Chen</p>
              <p className="text-gray-500 text-sm">E-commerce Plus</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="text-yellow-400 text-2xl mb-4 text-left">
              {'★★★★★'}
            </div>
            <p className="text-gray-700 text-base mb-6 text-left leading-relaxed">
              &quot;The team at NS Global Services is exceptional. They understood our vision and brought it to life beautifully.&quot;
            </p>
            <div className="text-left">
              <p className="font-bold text-gray-800 text-lg">Emily Rodriguez</p>
              <p className="text-gray-500 text-sm">Local Business Co.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
