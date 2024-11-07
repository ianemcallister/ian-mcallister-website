// src/app/components/navbar.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  

  return (
    (<footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center space-x-6">
          {["Talks", "Blog"/*, "Podcast"*/, "Engineering", "Product"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:underline"
              legacyBehavior>
              {item}
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/terms" className="hover:underline">Terms of Use</Link> |{" "}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>)
  );
}
