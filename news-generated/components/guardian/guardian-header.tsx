import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";


const newsArea = [
  "World",
  "Europe",
  "US news",
  "Americas",
  "Asia",
  "Australia",
  "Middle East",
  "Africa",
  "Inequality",
  "Global development",
]

const GuardianHeader =  () =>{


    return (
        <header className="bg-[#052962] text-white w">
          {/* Top bar */}
          <div className="flex justify-between items-center px-4 md:px-8 py-2 text-sm bg-[#041f4a]">
            <div className="flex items-center space-x-2">
              <span className="font-bold">Support the Guardian</span>
              <span className="text-gray-300">Fund independent journalism with $20 per month</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-[#ffe500] text-[#052962] font-bold px-3 py-1 rounded-full text-sm hover:bg-yellow-400">
                Support us →
              </button>
              <a href="#" className="hover:underline">
                Print subscriptions
              </a>
              <a href="#" className="hover:underline">
                Search jobs
              </a>
              <a href="#" className="hover:underline">
                Sign in
              </a>
            </div>
          </div>
    
          {/* Main navigation */}
          <div className="flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#1c3f8b]">
            <div className="flex space-x-6 font-semibold text-lg">
              <Link href="#" className="hover:text-[#ffe500]">News</Link>
              <Link href="#" className="hover:text-[#ffe500]">Opinion</Link>
              <Link href="#" className="hover:text-[#ffe500]">Sport</Link>
              <Link href="#" className="hover:text-[#ffe500]">Culture</Link>
              <Link href="#" className="hover:text-[#ffe500]">Lifestyle</Link>
            </div>
    
            <button className="p-2 bg-[#ffe500] rounded-full">
              <Menu className="text-[#052962]" size={20} />
            </button>
          </div>
    
          {/* Sub-navigation */}
          <div className="flex flex-wrap gap-4 px-4 md:px-8 py-2 text-sm text-gray-300">
            <ScrollArea>
            {newsArea.map((item) => (
              <Button key={item} className="hover:text-white">
                {item}
              </Button>
            ))}

            </ScrollArea>
            
          </div>
        </header>
      );
}


export {GuardianHeader};