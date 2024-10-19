"use client"; // This line ensures the component is treated as a client component

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head'; 
import heroshot from '../../public/assets/images/headshot.jpg';
import styles from './styles.module.css';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Head for metadata */}
      <Head>
        <title>Ian McAllister</title>
        <meta name="description" content="Discover my work and passions through talks, blogs, podcasts, and engineering projects." />
        <meta name="keywords" content="personal website, blog, podcast, engineering, talks, product" />
        <meta name="author" content="Ian McAllister" />
        <link rel="icon" href="/favicon.ico" /> {/* Replace with your favicon */}
      </Head>

      {/* Hero Section */}
      {/* You can add a hero section here if desired */}

      {/* Sections with Parallax Effect */}
      <main className="flex-grow">
        <ParallaxSection title="Ian McAllister" description="Product | Engineering | Speaking" backgroundImage="/assets/images/headshot.jpg" />
        <a href="/talks"><ParallaxSection title="Talks" description="Check out my latest talks." backgroundImage="/assets/images/audience-applauding-speaker-after-conference-presentation.jpg" /></a>
        <a href="/blog"><ParallaxSection title="Blog" description="Read my latest articles." backgroundImage="/assets/images/aerial-view-man-using-computer-laptop-wooden-table.jpg" /></a>
        <a href="/podcast"><ParallaxSection title="Podcast" description="Listen to my podcast." backgroundImage="/assets/images/side-view-radio-microphone-with-copy-space.jpg" /></a>
        <a href="/engineering"><ParallaxSection title="Engineering" description="Explore my engineering projects." backgroundImage="/assets/images/turned-gray-laptop-computer.jpg" /></a>
        <a href="/product"><ParallaxSection title="Product" description="Learn about my product experience." backgroundImage="/assets/images/saas-concept-collage.jpg" /></a>

        {/* Mailing List */}
        <div className="my-8 p-6 bg-gray-100 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Join My Mailing List</h2>
          <p className="mt-2">Stay updated with my latest news and content.</p>
          <input type="email" placeholder="Your Email" className="mt-4 p-2 border rounded" />
          <button className="ml-2 p-2 bg-blue-600 text-white rounded">Subscribe</button>
        </div>

        {/* Let's Connect */}
        <div className="my-8 p-6 bg-gray-100 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="mt-2">It's always good to be in touch.</p>
          <Link href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" className="text-blue-600 hover:underline">
            Visit my LinkedIn
          </Link>
        </div>
        
      </main>
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
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300" 
           style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }} />
      <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-10 text-white p-8">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
}

export default Home;
