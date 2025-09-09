import React from "react";
import { X } from "lucide-react";

const AuthForm = ({ setLoginOpen, showLoginForm, setShowLoginForm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
          onClick={() => setLoginOpen(false)}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          {showLoginForm ? "Login" : "Sign Up"}
        </h2>

        <form className="flex flex-col gap-4">
          {!showLoginForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
          >
            {showLoginForm ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500 text-sm">
          {showLoginForm ? "Don't have an account? " : "Already have an account? "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setShowLoginForm(!showLoginForm)}
          >
            {showLoginForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
