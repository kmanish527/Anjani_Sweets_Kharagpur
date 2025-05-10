import React from "react";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";




export default function Footer() {

        
  return (
    <footer className="bg-[#2c0f0f] text-white px-6 py-10 ">
        <div className="w-full h-2 mt-0 mb-4 flex items-center justify-center">
            
            <BackToTop/>
            
        </div>
      <div className=" border-t border-white/20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        
        <div>
          <div className="m-4 ml-0"><img src="/Anjani-nav-fot-logo.png" alt="logo"/></div>
          <p className="text-sm text-gray-300">
            Handcrafted sweets made with love and tradition. Taste the royalty in every bite.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mt-4 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Our Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mt-4 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Phone size={16}/> +91 9932246623</li>
            <li className="flex items-center gap-2"><Mail size={16}/> info@anjanisweets.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mt-4 mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Anjani Sweets Kharagpur. All rights reserved.
      </div>
    </footer>
  );
}

