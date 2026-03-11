'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline-block group-hover:text-amber-400 transition">
              Velociraptor
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-amber-400 transition duration-300">
              Home
            </Link>
            <Link href="/gallery" className="text-white hover:text-amber-400 transition duration-300">
              Gallery
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-amber-400 transition duration-300 flex items-center">
                More
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-black border border-amber-900/50 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <Link href="#videos" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10">
                  Videos
                </Link>
                <Link href="#vendors" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10">
                  Vendors
                </Link>
                <Link href="#meet-greet" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10">
                  Meet & Greet
                </Link>
              </div>
            </div>
            <Link
              href="/booking"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-6 py-2 rounded-lg hover:from-amber-400 hover:to-amber-500 transition duration-300"
            >
              Book Event
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-amber-400 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10 rounded">
              Home
            </Link>
            <Link href="/gallery" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10 rounded">
              Gallery
            </Link>
            <Link href="#videos" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10 rounded">
              Videos
            </Link>
            <Link href="#vendors" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10 rounded">
              Vendors
            </Link>
            <Link href="#meet-greet" className="block px-4 py-2 text-white hover:text-amber-400 hover:bg-amber-900/10 rounded">
              Meet & Greet
            </Link>
            <Link
              href="/booking"
              className="block bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-4 py-2 rounded text-center hover:from-amber-400 hover:to-amber-500 transition"
            >
              Book Event
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
