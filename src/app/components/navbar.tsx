// src/app/components/navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Ian McAllister</div>
          <div className="hidden md:flex space-x-4">
            {["Engineering", "Product", "Blog", "Podcast", "Talks"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700 p-4">
            {["Engineering", "Product", "Blog", "Podcast", "Talks"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="block py-2 hover:underline">
                {item}
              </Link>
            ))}
          </div>
        )}
    </nav>
  );
}
