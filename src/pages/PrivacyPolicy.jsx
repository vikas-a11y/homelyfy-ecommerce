import React from "react";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <FaShieldAlt className="mx-auto text-5xl mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect,
            use, and protect your information.
          </p>

        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaUserLock className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Secure Information
            </h3>

            <p className="text-gray-600">
              Your personal information is kept
              safe and confidential.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaDatabase className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              Data Protection
            </h3>

            <p className="text-gray-600">
              We use secure systems to protect
              your account and order data.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <FaLock className="text-green-600 text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-2">
              No Data Selling
            </h3>

            <p className="text-gray-600">
              We never sell your personal
              information to third parties.
            </p>
          </div>

        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Privacy Information
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Information We Collect
              </h3>

              <p className="text-gray-600">
                We may collect your name, email address,
                phone number, billing address, shipping
                address, and order information when you
                use our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                How We Use Your Information
              </h3>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Process and deliver your orders</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send order updates and notifications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Cookies & Analytics
              </h3>

              <p className="text-gray-600">
                We may use cookies and analytics tools
                to improve website performance and
                enhance user experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Third-Party Services
              </h3>

              <p className="text-gray-600">
                Trusted third-party services such as
                payment gateways and shipping providers
                may access limited information necessary
                to complete transactions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Data Security
              </h3>

              <p className="text-gray-600">
                We implement security measures to protect
                your personal information from unauthorized
                access, disclosure, or misuse.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Contact Us
              </h3>

              <p className="text-gray-600">
                If you have any questions regarding this
                Privacy Policy, please contact our support
                team.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;