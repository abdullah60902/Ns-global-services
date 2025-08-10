'use client';

import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
  FaChartLine,
} from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    icon: <FaCode className="text-2xl text-blue-500" />,
    bg: 'bg-blue-100',
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
  },
  {
    icon: <FaMobileAlt className="text-2xl text-green-500" />,
    bg: 'bg-green-100',
    title: 'App Development',
    description:
      'Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter.',
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'App Store Deployment'],
  },
  {
    icon: <FaSearch className="text-2xl text-purple-500" />,
    bg: 'bg-purple-100',
    title: 'SEO Optimization',
    description:
      'Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics & Reporting'],
  },
  {
    icon: <FaPaintBrush className="text-2xl text-pink-500" />,
    bg: 'bg-pink-100',
    title: 'Graphic Design',
    description:
      'Creative design solutions including branding, logos, marketing materials, and user interfaces.',
    features: ['Brand Identity', 'Logo Design', 'Print Materials', 'UI/UX Design'],
  },
  {
    icon: <FaChartLine className="text-2xl text-yellow-500" />,
    bg: 'bg-yellow-100',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing campaigns across social media, email, and paid advertising platforms.',
    features: ['Social Media Marketing', 'Email Campaigns', 'PPC Advertising', 'Analytics'],
  },
];

export default function OurServices() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Expert solutions across all aspects of digital business transformation
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[360px]"
          >
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.bg || ''}`}
            >
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 text-base mb-4">{service.description}</p>
            <ul className="text-base text-gray-800 space-y-1 list-disc list-inside">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* View All Services Button */}

<div className="text-center mt-16">
  <Link href="/Services">
    <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300">
      View All Services
    </button>
  </Link>
</div>

    </section>
  );
}
