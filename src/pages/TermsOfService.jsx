import React from "react";
import {
  FaFileContract,
  FaGavel,
  FaShoppingCart,
  FaExclamationTriangle,
} from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <FaFileContract className="mx-auto text-5xl mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Please read these terms carefully before using Homelyfy.
          </p>

        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaShoppingCart className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Fair Shopping
            </h3>

            <p className="text-gray-600">
              Customers must provide accurate
              information while placing orders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaGavel className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Legal Compliance
            </h3>

            <p className="text-gray-600">
              All users must comply with
              applicable laws and regulations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaExclamationTriangle className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Account Responsibility
            </h3>

            <p className="text-gray-600">
              Users are responsible for
              maintaining account security.
            </p>
          </div>

        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Terms & Conditions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Acceptance of Terms
              </h3>

              <p className="text-gray-600">
                By accessing and using Homelyfy,
                you agree to comply with these
                Terms of Service and all applicable laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                User Accounts
              </h3>

              <p className="text-gray-600">
                You are responsible for maintaining
                the confidentiality of your account
                credentials and activities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Orders & Payments
              </h3>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>All orders are subject to availability.</li>
                <li>Prices may change without prior notice.</li>
                <li>Payment must be completed before shipment.</li>
                <li>Fraudulent transactions may be cancelled.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Shipping & Delivery
              </h3>

              <p className="text-gray-600">
                Delivery timelines are estimates and
                may vary due to logistics, weather,
                holidays, or unforeseen circumstances.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Returns & Refunds
              </h3>

              <p className="text-gray-600">
                Returns and refunds are governed by
                our Return Policy. Customers should
                review the policy before making purchases.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Prohibited Activities
              </h3>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Fraudulent purchases</li>
                <li>Unauthorized access to accounts</li>
                <li>Misuse of website content</li>
                <li>Activities violating applicable laws</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Limitation of Liability
              </h3>

              <p className="text-gray-600">
                Homelyfy shall not be liable for any
                indirect, incidental, or consequential
                damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Changes to Terms
              </h3>

              <p className="text-gray-600">
                We reserve the right to modify these
                terms at any time. Updated versions
                will be posted on this page.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Contact Us
              </h3>

              <p className="text-gray-600">
                If you have questions regarding these
                Terms of Service, please contact our
                customer support team.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TermsOfService;