"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CoustomService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        toast.success(" Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Failed to send message.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(" Something went wrong.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Send us a message
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Select a service</option>
              <option>Web Design</option>
              <option>SEO Optimization</option>
              <option>Business Development</option>
              <option>Digital Marketing</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>Content Strategy</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="border border-gray-300 rounded px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded flex items-center justify-center gap-2 shadow-md w-full sm:w-fit"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Side Section */}
        <div className="space-y-4">
          {/* Map Box */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-blue-600 text-3xl mb-2">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-semibold text-lg">Interactive Map</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Krizi 11, Agioi Omologites 1080 Nicosia, Lefkosia Cyprus{" "}
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Stay connected for updates and insights.
            </p>
            <div className="flex flex-wrap gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="bg-blue-600 text-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Quick Response Guarantee</h3>
            <p className="mb-3 text-sm sm:text-base">
              We understand your time is valuable. That’s why we promise to
              reply within 24 hours.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Initial response within 24 hours</li>
              <li>consultation available</li>
              <li>No obligation quotes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
