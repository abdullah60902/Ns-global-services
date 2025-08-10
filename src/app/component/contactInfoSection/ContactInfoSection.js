import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Email */}
        <div className="border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 flex items-center justify-center mx-auto rounded-lg mb-5">
            <Mail className="text-blue-600" size={28} />
          </div>
          <h3 className="font-semibold text-xl mb-1">Email Us</h3>
          <p className="text-gray-700 text-base">ns.global.ser@gmail.com</p>
          <p className="text-sm text-gray-500 mt-1">Send us an email anytime</p>
        </div>

        {/* Phone */}
        <div className="border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 flex items-center justify-center mx-auto rounded-lg mb-5">
            <Phone className="text-blue-600" size={28} />
          </div>
          <h3 className="font-semibold text-xl mb-1">Call Us</h3>
          <p className="text-gray-700 text-base">+35794554049</p>
          <p className="text-sm text-gray-500 mt-1">Weekend support available</p>
        </div>

        {/* Visit */}
        <div className="border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 flex items-center justify-center mx-auto rounded-lg mb-5">
            <MapPin className="text-blue-600" size={28} />
          </div>
          <h3 className="font-semibold text-xl mb-1">Visit Us</h3>
          <p className="text-gray-700 text-base">
            Krizi 11, Agioi Omologites<br />
            1080 Nicosia, Lefkosia<br />
            Cyprus
          </p>
        </div>

        {/* Hours */}
        <div className="border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 flex items-center justify-center mx-auto rounded-lg mb-5">
            <Clock className="text-blue-600" size={28} />
          </div>
          <h3 className="font-semibold text-xl mb-1">Working Time</h3>
          <p className="text-gray-700 text-base font-semibold">
           24/7 Support
          </p>
          <p className="text-sm text-gray-500 mt-1">Weekend support available</p>
        </div>
      </div>
    </section>
  );
}
