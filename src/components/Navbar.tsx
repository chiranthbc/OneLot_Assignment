
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from "../assets/images/logo.webp"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-10 lg:px-10 2xl:px-20">
      <nav className="bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center mr-16">
            <Image src={Logo} alt="OneLot - Dealer Financing Platform" width={100} height={50} className="object-contain" />
          </Link>
  
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
   
          <div className={`w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <Link href="/" className="block py-2 md:p-0 text-base font-medium text-[#3600D1]">Home</Link>
              </li>
              <li>
                   <button
                  className="flex items-center gap-1 text-base font-medium py-2 md:p-0 text-gray-700 hover:text-[#3600D1] focus:text-[#3600D1]"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Products <ChevronDown className="h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    <Link href="/products/1" className="block px-4 py-2 hover:bg-gray-100">Product 1</Link>
                    <Link href="/products/2" className="block px-4 py-2 hover:bg-gray-100">Product 2</Link>
                  </div>
                )}
              </li>
              <li>
                <Link href="/about" className="block py-2 md:p-0 text-base font-medium text-gray-700 hover:text-[#3600D1]">About</Link>
                </li>
              <li>
                <Link href="/contact" className="block py-2 md:p-0 text-base font-medium text-gray-700 hover:text-[#3600D1]">Contact</Link>
                </li>    
        
              <li className="sm:hidden flex gap-4">
                <Link href="/app/login" className="w-full border border-gray-300 bg-white text-gray-900 rounded-lg px-4 py-2 text-center">Login</Link>
                <Link href="/app/signup/dealer" className="w-full bg-[#3600D1] text-white rounded-lg px-4 py-2 text-center">Inquire Now</Link>
              </li>
            </ul>
          </div>
          
    
          <div className="hidden sm:flex gap-4 ml-auto">
            <Link href="/app/login" className="border border-gray-300 bg-white text-gray-900 rounded-lg px-4 py-2 text-sm">Login</Link>
            <Link href="/app/signup/dealer" className="bg-[#3600D1] text-white rounded-lg px-4 py-2 text-sm">Inquire Now</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
