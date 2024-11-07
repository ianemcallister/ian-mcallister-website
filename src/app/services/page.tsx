// src/app/services.tsx

'use client';

import Link from 'next/link';

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Software Development Services</h1>
      <p className="text-lg mb-4">
        Welcome! I’m Ian McAllister, a Senior Technical Product Manager with extensive experience
        in product strategy, software development, and AI-driven data solutions. I offer services
        tailored to meet your business needs, combining industry knowledge and a commitment to high-quality deliverables.
      </p>
      
      {/* Links to individual services */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-4">Explore My Services</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/services/fractional-product-manager" className="text-blue-500 underline">
              Fractional Product Manager
            </Link>
          </li>
          <li>
            <Link href="/services/full-stack-developer" className="text-blue-500 underline">
              Full Stack Developer
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Detailed Description */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">My Expertise</h2>
        <p>
          With a focus on innovation and user-centered design, I’ve built a career developing and
          managing products that leverage advanced technologies like AI and machine learning. My
          skills encompass everything from strategic consulting and setting up development
          workflows to architecting data platforms, providing code reviews, and optimizing both front
          and back-end systems.
        </p>
        <p className="mt-4">
          My services include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Product strategy consulting and roadmap development</li>
          <li>Technical product management and cross-functional collaboration</li>
          <li>Full-stack development with a focus on React, Next.js, and Node.js</li>
          <li>AI and data-driven solutions for business intelligence and optimization</li>
          <li>DevOps implementation and CI/CD pipeline setup for scalable infrastructure</li>
        </ul>
        <p className="mt-4">
          I've partnered with businesses of all sizes—from startups to established tech companies—
          and bring a proven record of delivering products that align with user needs and business goals.
        </p>
      </section>
    </div>
  );
};

export default Services;
