import React from "react";
import NavMarquee from "./NavMarquee";
import AuthButton from "./AuthButton";
import NavLinks from './NavLinks';
import NavLogo from "./NavLogo";
import SearchBox from './SearchBox';



const Navbar = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-[#2c0f0f] text-white py-1 z-50 border-b-[1px]">
        <p className="text-[14px] text-white text-center">
          <NavMarquee />
        </p>
      </div>

      <div>
        <nav className="w-full fixed top-[31px] left-0 z-50 bg-[#2c0f0f] text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

            {/* Logo */}
            <div>
              <NavLogo/>
            </div >

            {/* Search Box */}
            <div className="flex-1 mx-10">
              <SearchBox/>
            </div>

            {/* Navigation Links */}

            <div >
              <NavLinks/>
            </div>

            {/* Auth Buttons */}
           <div>
            <AuthButton/>
           </div>


          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
