import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Stuff from "@/components/svg/stuff.svg"
const StuffHeader =  () =>{

  const linkClasses = "hover:text-purple-600 border-transparent border-b-1 hover:border-black transition";

    return (
        <header className="w-full border-gray-200">
          <div className="flex items-center justify-between py-4">
            {/* Left: Support button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 text-sm rounded-full transition">
              Support Stuff
            </button>
    
            {/* Center: Logo + Date */}
            <div className="flex flex-col items-center text-center">
              {/* <h1 className="text-4xl font-bold text-purple-600">Stuff</h1> */}

              <Stuff  className="fill-purple-600 w-32"/>
            
              <p className="text-gray-500 text-sm">Kia ora, Aotearoa • 22 Oct, 2025</p>
            </div>
    
            {/* Right: Log in + Menu */}
            <div className="flex items-center space-x-4">
              <button className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-gray-50 transition">
                Log In
              </button>
              <Menu size={20} />
            </div>
          </div>
    
          {/* Navigation */}
          <nav className="flex justify-center space-x-6 pb-2 text-sm font-medium">
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
        </nav>  
        </header>
      );
}


export {StuffHeader};