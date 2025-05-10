import React from 'react'
import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pr-12 pl-4 py-2 rounded-full border border-white/30 
                   bg-transparent text-white placeholder-white/60 
                   focus:outline-none focus:ring-1 focus:ring-white 
                   font-light"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 
                   h-[34px] w-[34px] flex items-center justify-center 
                    text-white 
                   border border-white/30 rounded-full hover:bg-white/30 transition"
      >
        <Search size={18} />
      </button>
    </div>
  )
}
