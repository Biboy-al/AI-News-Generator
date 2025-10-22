import { Menu, Search } from "lucide-react";
import Link from "next/link";


const HeraldHeader =  () =>{


    return (
        <header className="w-full bg-black text-white border-b border-gray-800">
          {/* Top Row */}
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
            <h1 className="text-2xl font-serif font-bold tracking-tight">
              The New Zealand Herald
            </h1>
    
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
    
          {/* Navigation Row */}
          <nav className="flex justify-center space-x-6 py-2 text-sm border-t border-gray-800">
            {[
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
            ].map((item, i) => (
              <Link
                key={i}
                href="#"
                className={`hover:text-yellow-400 transition ${
                  item === "World" ? "border-b-2 border-white pb-1" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </header>
      );
}


export {HeraldHeader};