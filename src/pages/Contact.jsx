import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-3">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-6">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-600"
              ></textarea>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-500">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaEnvelope className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-500">
                    support@homelyfy.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-500">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">
                Google Map Coming Soon
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;