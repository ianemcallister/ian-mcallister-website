'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);  // Track Services menu state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);  // Toggle dropdown for Services

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link key="head" href="/">
            Ian McAllister
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="hover:underline"
              onClick={toggleServices}
            >
              Services ▼
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg z-10">
                <Link
                  href="/services/fractional-product-manager"
                  className="block py-2 px-4 hover:bg-gray-600"
                >
                  Fractional Product Manager
                </Link>
                <Link
                  href="/services/full-stack-developer"
                  className="block py-2 px-4 hover:bg-gray-600"
                >
                  Full Stack Developer
                </Link>
              </div>
            )}
          </div>

          {["Engineering", "Product", "Blog"/*, "Podcast"*/, "Talks"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:underline"
              legacyBehavior>
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
          {/* Services dropdown in mobile */}
          <div className="relative">
            <button
              className="block py-2"
              onClick={toggleServices}
            >
              Services ▼
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-full bg-gray-700 text-white shadow-lg z-10">
                <Link
                  href="/services/fractional-product-manager"
                  className="block py-2 px-4 hover:bg-gray-600"
                >
                  Fractional Product Manager
                </Link>
                <Link
                  href="/services/full-stack-developer"
                  className="block py-2 px-4 hover:bg-gray-600"
                >
                  Full Stack Developer
                </Link>
              </div>
            )}
          </div>
          {["Engineering", "Product", "Blog", "Podcast", "Talks"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block py-2 hover:underline"
              legacyBehavior>
              {item}
            </Link>
          ))}
          
        </div>
      )}
    </nav>
  );
}
