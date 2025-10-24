import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Instagram, Youtube } from 'lucide-react';
import Stuff from "@/components/svg/stuff.svg"

const StuffFooter =  () =>{

    return (
        <footer className="bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top section with logo and social icons */}
            <div className="flex items-center justify-between py-6">
            <Stuff  className="fill-purple-600 w-20 h-12"/>
              {/* <Link href="/" className="text-4xl font-bold text-purple-600" style={{ fontFamily: 'serif' }}>
                Stuff
              </Link> */}
              
              <div className="flex items-center gap-4">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                  <Instagram size={28} />
                </Link>
                <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                  <Youtube size={28} />
                </Link>
              </div>
            </div>
    
            {/* Links section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-200">
              {/* Contact */}
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                      Contact Stuff
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-700">Send your stories to </span>
                    <a href="mailto:newstips@stuff.co.nz" className="text-purple-600 hover:underline">
                      newstips@stuff.co.nz
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* About */}
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/advertising" className="text-gray-700 hover:text-purple-600">
                      Advertising
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-700 hover:text-purple-600">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
    
              {/* Account */}
              <div>
                <h3 className="font-bold text-lg mb-4">Account</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/newsletters" className="text-gray-700 hover:text-purple-600">
                      Stuff Newsletters
                    </Link>
                  </li>
                  <li>
                    <Link href="/account" className="text-gray-700 hover:text-purple-600">
                      Your Account
                    </Link>
                  </li>
                </ul>
              </div>
    
              {/* Policies */}
              <div>
                <h3 className="font-bold text-lg mb-4">Policies</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/editorial-code" className="text-gray-700 hover:text-purple-600">
                      Editorial code
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-700 hover:text-purple-600">
                      Terms & conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-700 hover:text-purple-600">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-gray-700 hover:text-purple-600">
                      Cookies policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
    
            {/* Bottom section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-200 gap-4">
              <div className="flex items-center gap-6">
                <div className="text-sm text-gray-600">
                  Digital Provider of the Year 2024 & 2025
                </div>
                <div className="text-2xl font-serif font-bold">POU</div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">© 2025 Stuff Digital Ltd</span>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-bold">B</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
}


export {StuffFooter};