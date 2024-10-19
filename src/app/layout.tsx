import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from './components/navbar'; // Make sure to import NavBar
import Footer from './components/footer'; // Make sure to import NavBar

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ian McAllister",
  description: "Engineer | Product | Speaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar /> {/* Include NavBar here once */}
        {children} {/* Render the child components below the NavBar */}
        <Footer />
      </body>
    </html>
  );
}
