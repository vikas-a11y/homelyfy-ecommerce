import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-green-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row">

        {/* Left Side */}
        <div className="hidden lg:flex flex-1 flex-col justify-center px-8 xl:px-16">

          <span className="text-green-600 font-bold tracking-widest">
            HOMELYFY
          </span>

          <h1 className="text-4xl xl:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            Shop Smarter.
            <br />
            Live Better.
          </h1>

          <p className="text-gray-500 text-base xl:text-lg mt-6 max-w-lg">
            Discover premium home essentials, gadgets,
            and lifestyle products with amazing deals
            and a seamless shopping experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <h3 className="font-bold text-2xl text-green-600">
                10K+
              </h3>

              <p className="text-gray-500 text-sm">
                Happy Customers
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <h3 className="font-bold text-2xl text-green-600">
                500+
              </h3>

              <p className="text-gray-500 text-sm">
                Products
              </p>
            </div>

          </div>
        </div>

        {/* Login Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">

          <div
            className="
            w-full
            max-w-lg
            backdrop-blur-xl
            bg-white/80
            border
            border-white
            rounded-3xl
            shadow-2xl
            p-6
            md:p-8
          "
          >

            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-6">
              <h1 className="text-3xl font-bold text-green-600">
                HOMELYFY
              </h1>

              <p className="text-gray-500 text-sm mt-2">
                Shop Smarter. Live Better.
              </p>
            </div>

            <div className="text-center mb-8">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Welcome Back 👋
              </h2>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Sign in to continue shopping
              </p>

            </div>

            <form className="space-y-4 md:space-y-5">

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                p-4
                rounded-2xl
                border
                border-gray-200
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
              "
              />

              <input
                type="password"
                placeholder="Password"
                className="
                w-full
                p-4
                rounded-2xl
                border
                border-gray-200
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
              "
              />

              <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-green-600 hover:underline"
                >
                  Forgot?
                </button>

              </div>

              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-2xl
                text-white
                font-semibold
                bg-gradient-to-r
                from-green-600
                to-green-500
                hover:scale-[1.02]
                transition-all
                duration-300
              "
              >
                Sign In
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center my-6">

              <div className="flex-1 border-t border-gray-200"></div>

              <span className="px-4 text-gray-400 text-xs md:text-sm">
                OR CONTINUE WITH
              </span>

              <div className="flex-1 border-t border-gray-200"></div>

            </div>

            {/* Social Buttons */}
            <div className="space-y-3">

              <button
                className="
                w-full
                border
                border-gray-200
                rounded-2xl
                py-3
                flex
                items-center
                justify-center
                gap-3
                hover:bg-gray-50
                transition
              "
              >
                <FaGoogle />
                Continue with Google
              </button>

              <button
                className="
                w-full
                border
                border-gray-200
                rounded-2xl
                py-3
                flex
                items-center
                justify-center
                gap-3
                hover:bg-gray-50
                transition
              "
              >
                <FaApple />
                Continue with Apple
              </button>

            </div>

            <p className="text-center text-gray-500 mt-8 text-sm md:text-base">
              Don't have an account?
              <span className="text-green-600 font-semibold ml-2 cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;