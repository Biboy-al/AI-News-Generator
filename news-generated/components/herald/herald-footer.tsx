import { Menu, Search } from "lucide-react";
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle, Twitter, Youtube, ExternalLink } from 'lucide-react';



const HeraldFooter =  () =>{

    return (
        <footer className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top section with logo and social icons */}
            <div className="flex items-center justify-between py-12 border-b border-gray-800">
              <h2 className="text-4xl font-serif italic">The New Zealand Herald</h2>
              
              <div className="flex items-center gap-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Facebook size={20} />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">6</text>
                  </svg>
                </Link>
                <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <MessageCircle size={20} />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
    
            {/* Links section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
              {/* NZ HERALD */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">NZ Herald</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-300 hover:text-white text-sm">About NZ Herald</Link></li>
                  <li><Link href="/journalists" className="text-gray-300 hover:text-white text-sm">Meet the journalists</Link></li>
                  <li><Link href="/newsletters" className="text-gray-300 hover:text-white text-sm">Newsletters</Link></li>
                  <li><Link href="/classifieds" className="text-gray-300 hover:text-white text-sm">Classifieds</Link></li>
                  <li><Link href="/help" className="text-gray-300 hover:text-white text-sm">Help & support</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contact us</Link></li>
                  <li><Link href="/house-rules" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">House rules <ExternalLink size={12} /></Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Privacy Policy <ExternalLink size={12} /></Link></li>
                  <li><Link href="/terms" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Terms of use <ExternalLink size={12} /></Link></li>
                  <li><Link href="/competition-terms" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Competition terms & conditions <ExternalLink size={12} /></Link></li>
                  <li><Link href="/ai" className="text-gray-300 hover:text-white text-sm">Our use of AI</Link></li>
                </ul>
              </div>
    
              {/* SUBSCRIBER SERVICES */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">Subscriber Services</h3>
                <ul className="space-y-3">
                  <li><Link href="/e-editions" className="text-gray-300 hover:text-white text-sm">NZ Herald e-editions</Link></li>
                  <li><Link href="/puzzles" className="text-gray-300 hover:text-white text-sm">Daily puzzles & quizzes</Link></li>
                  <li><Link href="/manage-digital" className="text-gray-300 hover:text-white text-sm">Manage your digital subscription</Link></li>
                  <li><Link href="/manage-print" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Manage your print subscription <ExternalLink size={12} /></Link></li>
                  <li><Link href="/subscribe" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Subscribe to the NZ Herald newspaper <ExternalLink size={12} /></Link></li>
                  <li><Link href="/premium" className="text-gray-300 hover:text-white text-sm">Subscribe to Herald Premium</Link></li>
                  <li><Link href="/gift" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Gift a subscription <ExternalLink size={12} /></Link></li>
                  <li><Link href="/faq" className="text-gray-300 hover:text-white text-sm">Subscriber FAQs</Link></li>
                  <li><Link href="/subscription-terms" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Subscription terms & conditions <ExternalLink size={12} /></Link></li>
                  <li><Link href="/promotions" className="text-gray-300 hover:text-white text-sm">Promotions and subscriber benefits</Link></li>
                </ul>
              </div>
    
              {/* NZME NETWORK */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">NZME Network</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">The New Zealand Herald</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">The Northland Age</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">The Northern Advocate</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Waikato Herald</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Bay of Plenty Times</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Rotorua Daily Post</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Hawke's Bay Today</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Whanganui Chronicle</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Viva</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">NZ Listener</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Newstalk ZB <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">BusinessDesk <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">OneRoof <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Driven Car Guide <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">iHeart Radio <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Restaurant Hub <ExternalLink size={12} /></Link></li>
                </ul>
              </div>
    
              {/* NZME */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">NZME</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">About NZME <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">NZME careers <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Advertise with NZME <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">Digital self-service advertising <ExternalLink size={12} /></Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Book your classified ad</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm">Photo sales</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm inline-flex items-center gap-1">NZME Events <ExternalLink size={12} /></Link></li>
                </ul>
              </div>
            </div>
    
            {/* Bottom section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-gray-800">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <span className="text-2xl font-bold tracking-wider">NZME.</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black text-xs font-bold">B</span>
                </div>
              </div>
              
              <div className="text-gray-400 text-sm">
                © Copyright 2025 NZME Publishing Limited
              </div>
            </div>
          </div>
        </footer>
      );
}


export {HeraldFooter};