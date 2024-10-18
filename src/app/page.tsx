"use client"; // This line ensures the component is treated as a client component

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head'; 
import heroshot from '../public/assets/images/headshot.jpg';
import styles from './styles.module.css';
import NavBar from "@/app/components/navbar";

const Home: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Head for metadata */}
      <Head>
        <title>Ian McAllister</title>
        <meta name="description" content="Discover my work and passions through talks, blogs, podcasts, and engineering projects." />
        <meta name="keywords" content="personal website, blog, podcast, engineering, talks, product" />
        <meta name="author" content="Ian McAllsiter" />
        <link rel="icon" href="/favicon.ico" /> {/* Replace with your favicon */}
      </Head>

      <NavBar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh]">
        <Image
          src={heroshot}
          alt="Hero Image"
          priority={true}
          className={styles.heroImage}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">Ian McAllister</h1>
          <p className="mt-2 text-lg">Product | Engineering | Speaking</p>
        </div>
      </div>

      {/* Sections with Parallax Effect */}
      <main className="flex-grow">
        <ParallaxSection title="Talks" description="Check out my latest talks." backgroundImage="/path/to/your/talks-image.jpg" />
        <ParallaxSection title="Blog" description="Read my latest articles." backgroundImage="/path/to/your/blog-image.jpg" />
        <ParallaxSection title="Podcast" description="Listen to my podcast." backgroundImage="/path/to/your/podcast-image.jpg" />
        <ParallaxSection title="Engineering" description="Explore my engineering projects." backgroundImage="/path/to/your/engineering-image.jpg" />
        <ParallaxSection title="Product" description="Learn about my product experience." backgroundImage="/path/to/your/product-image.jpg" />

        {/* Mailing List */}
        <div className="my-8 p-6 bg-gray-100 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Join My Mailing List</h2>
          <p className="mt-2">Stay updated with my latest news and content.</p>
          <input type="email" placeholder="Your Email" className="mt-4 p-2 border rounded" />
          <button className="ml-2 p-2 bg-blue-600 text-white rounded">Subscribe</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-wrap justify-center space-x-6">
            {["Talks", "Blog", "Podcast", "Engineering", "Product"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:underline">
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
      </footer>
    </div>
  );
}

interface SectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const ParallaxSection: React.FC<SectionProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }} />
      <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white p-8">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
}

export default Home;
