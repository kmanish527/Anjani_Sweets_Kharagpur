import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form className="bg-white/20 backdrop-blur-md text-white border border-white/30 p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center  text-white">
          Welcome Back
        </h2>
        <div className="flex items-center gap-4 mt-1 mb-8">
          <div className="flex-grow h-px bg-white/30" />
          <span className="text-sm text-white whitespace-nowrap">
            Login back to your account
          </span>
          <div className="flex-grow h-px bg-white/30" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
        </div>
        <div className="mb-1">
          <label className="block text-sm font-medium text-white-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="mb-4 text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-[#2c0f0f] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[#602020] text-white py-2 rounded-md hover:bg-[#3b1010] transition"
        >
          Login
        </button>

        <div className="flex items-center gap-4 mt-3 mb-2">
          <div className="flex-grow h-px bg-white/30" />
          <span className="text-sm text-white whitespace-nowrap">
            or sign in with
          </span>
          <div className="flex-grow h-px bg-white/30" />
        </div>

        <button
          type="button"
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-md bg-[#602020] hover:bg-[#3b1010] transition"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </button>

        <div className="text-center mt-2 text-sm">
          Don’t have an account?{" "}
          <a href="/sign-up" className="underline text-[#602020] hover:text-[#3b1010]">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
