import React from "react";
import {
  FaUndoAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaBoxOpen,
} from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <FaUndoAlt className="mx-auto text-5xl mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Return Policy
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Hassle-free returns and customer satisfaction guaranteed.
          </p>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Policy Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaCheckCircle className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              7-Day Returns
            </h3>

            <p className="text-gray-600">
              Return eligible products within
              7 days of delivery.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaBoxOpen className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Damaged Products
            </h3>

            <p className="text-gray-600">
              Damaged or defective items
              can be replaced easily.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaUndoAlt className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Easy Refunds
            </h3>

            <p className="text-gray-600">
              Approved refunds are processed
              within 5-7 business days.
            </p>
          </div>

        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Return & Refund Information
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Eligible for Return
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  Damaged products
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  Wrong item delivered
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  Manufacturing defects
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  Unused products in original packaging
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Not Eligible for Return
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaTimesCircle className="text-red-500" />
                  Used products
                </li>

                <li className="flex items-center gap-2">
                  <FaTimesCircle className="text-red-500" />
                  Customized products
                </li>

                <li className="flex items-center gap-2">
                  <FaTimesCircle className="text-red-500" />
                  Personal care items
                </li>

                <li className="flex items-center gap-2">
                  <FaTimesCircle className="text-red-500" />
                  Products without original packaging
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Refund Process
              </h3>

              <p className="text-gray-600">
                Once your return is approved and
                inspected, the refund will be
                initiated to your original payment
                method within 5-7 business days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Need Help?
              </h3>

              <p className="text-gray-600">
                Contact our support team for any
                return or refund related assistance.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;