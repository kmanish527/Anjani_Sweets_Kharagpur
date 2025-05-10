import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { label: "Profile", path: "/profile" },
  { label: "Billing", path: "/billing" },
  { label: "Support", path: "/support" },
  { label: "LogOut", path: "/login" },
];

export default function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default: not logged in

  return (
    <div className="ml-4 space-x-4">
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#2c0f0f] text-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <DropdownMenuItem className="cursor-pointer">
                  {item.label}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <button className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40">
            Login/SignUp
          </button>
        </Link>
      )}
    </div>
  );
}
