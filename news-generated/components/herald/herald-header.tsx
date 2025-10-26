"use client";

import { Menu, Search } from "lucide-react";
import Herald from "@/components/svg/herald.svg"
import SubNav from "./sub-nav";
import { useEffect, useState } from "react";

const newsArea = [
  "Home",
  "Latest news",
  "Herald NOW",
  "Video",
  "New Zealand",
  "Sport",
  "World",
  "Business",
  "Entertainment",
  "Podcasts",
  "Quizzes",
  "Opinion",
  "Lifestyle",
  "Travel",
  "Viva",
  "Weather",
]

const HeraldHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-auto');
    
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsScrolled(target.scrollTop > 10);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className="w-full bg-black text-white border-b border-gray-800">
      {/* Top Row - Collapses with transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-24 opacity-100"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left Section: Menu + Search */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2">
              <div className="bg-white text-black p-1.5 rounded-full">
                <Menu size={16} />
              </div>
              <span className="text-sm font-medium">Menu</span>
            </button>
  
            <button className="flex items-center space-x-2">
              <div className="bg-white text-black p-1.5 rounded-full">
                <Search size={16} />
              </div>
              <span className="text-sm font-medium">Search</span>
            </button>
          </div>
  
          {/* Center: Logo */}
          <Herald className="hover:fill-gray-700 transition" />
  
          {/* Right Section: Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-500 text-black font-semibold px-4 py-1.5 rounded-full hover:bg-yellow-400 transition">
              Subscribe
            </button>
            <button className="flex items-center space-x-2 border border-gray-400 rounded-full px-4 py-1.5 hover:bg-gray-900 transition">
              <div className="bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                ☺
              </div>
              <span className="text-sm font-medium">Sign In</span>
            </button>
          </div>
        </div>
      </div>
 
      {/* Navigation Row */}
      <nav className={`flex justify-center py-2 text-sm transition-all duration-300 ${
        isScrolled ? "border-t-0" : "border-t border-gray-800"
      }`}>
        <SubNav newsArea={newsArea} />
      </nav>
    </header>
  );
}

export { HeraldHeader };