"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Stuff from "@/components/svg/stuff.svg";
import { useEffect, useState } from "react";

const StuffHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const linkClasses = "hover:text-purple-600 border-transparent border-b-2 hover:border-purple-600 transition text-sm font-semibold pb-1";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top section - collapses with transition */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
        }`}
      >
        <div className="w-full max-w-[1350px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Support button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 text-sm rounded-full transition">
              Support Stuff
            </button>

            {/* Center: Logo + Date */}
            <div className="flex flex-col items-center text-center gap-2">
              <Stuff className="fill-purple-600 w-32" />
              <p className="text-gray-700 text-sm tracking-wide">
                Kia ora, Aotearoa • 25 Oct, 2025
              </p>
            </div>

            {/* Right: Log in + Menu */}
            <div className="flex items-center space-x-4">
              <button className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-gray-50 transition">
                Log In
              </button>
              <Menu size={20} />
            </div>
          </div>
        </div>

        <nav className="w-full bg-white">
          <div className="w-full max-w-[1350px] mx-auto px-6">
            <div className="flex justify-center space-x-6 py-3 text-sm font-medium">
              <Link href="#" className={linkClasses}>
                NZ News
              </Link>
              <Link href="#" className={linkClasses}>
                World News
              </Link>
              <Link href="#" className={linkClasses}>
                Quizzes
              </Link>
              <Link href="#" className={linkClasses}>
                Property
              </Link>
              <Link href="#" className={linkClasses}>
                Money
              </Link>
              <Link href="#" className={linkClasses}>
                Life & Style
              </Link>
              <Link href="#" className={linkClasses}>
                Sport
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Navigation - slides in when scrolled */}
      <nav
        className={`w-full bg-white transition-all duration-300 ease-in-out ${
          isScrolled ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="w-full max-w-[1350px] mx-auto px-6 flex items-center justify-between py-3">
          <Stuff className="fill-purple-600 w-16" />
          
          <div className="flex justify-center space-x-6 text-sm font-medium">
            <Link href="#" className={linkClasses}>
              NZ News
            </Link>
            <Link href="#" className={linkClasses}>
              World News
            </Link>
            <Link href="#" className={linkClasses}>
              Quizzes
            </Link>
            <Link href="#" className={linkClasses}>
              Property
            </Link>
            <Link href="#" className={linkClasses}>
              Money
            </Link>
            <Link href="#" className={linkClasses}>
              Life & Style
            </Link>
            <Link href="#" className={linkClasses}>
              Sport
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-gray-50 transition">
              Log In
            </button>
            <Menu size={20} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export { StuffHeader };