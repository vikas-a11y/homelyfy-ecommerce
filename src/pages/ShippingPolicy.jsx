import React from "react";
import {
  FaShippingFast,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaTruck,
} from "react-icons/fa";

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FaShippingFast className="mx-auto text-5xl mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shipping Policy
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Fast, secure and reliable delivery across India.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Shipping Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaTruck className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Orders are delivered within
              3-7 business days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaMapMarkedAlt className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              PAN India Shipping
            </h3>

            <p className="text-gray-600">
              We deliver to most cities
              and towns across India.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaBoxOpen className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Safe Packaging
            </h3>

            <p className="text-gray-600">
              Every product is securely packed
              to prevent damage.
            </p>
          </div>

        </div>

        {/* Policy Details */}
        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Shipping Information
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Processing Time
              </h3>

              <p className="text-gray-600">
                Orders are processed within
                24-48 hours after successful payment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Delivery Time
              </h3>

              <p className="text-gray-600">
                Standard delivery takes
                approximately 3-7 business days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Shipping Charges
              </h3>

              <ul className="text-gray-600 list-disc ml-5">
                <li>Free Shipping on orders above ₹999</li>
                <li>₹99 shipping fee on orders below ₹999</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Order Tracking
              </h3>

              <p className="text-gray-600">
                Once shipped, tracking details
                will be shared via email or SMS.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Delays
              </h3>

              <p className="text-gray-600">
                Delivery may be delayed due to
                weather conditions, public holidays,
                or unforeseen logistics issues.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ShippingPolicy;