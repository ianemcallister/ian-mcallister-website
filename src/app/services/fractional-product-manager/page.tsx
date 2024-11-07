// src/app/services/fractional-product-manager.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '../../components/CallToAction';

const FractionalProductManager = () => {
  return (
    <div className="section-container bg-gray-100">
      {/* Hero Section */}
      <div className="hero-section bg-white">
        <div className="hero flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
          {/* Text Content */}
          <div className="content text-center lg:text-left mb-6 lg:mb-0">
            <span className="pre-header text-lg text-gray-600 block">Hi, I'm Ian McAllister</span>
            <h1 className="main-header text-4xl lg:text-5xl font-bold mt-2">
              Looking for a Fractional Product Manager?
            </h1>
            <Link href="/services/fractional-product-manager/details">
              <button className="find-btn mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                FIND OUT MORE
              </button>
            </Link>
          </div>
          
          {/* Desktop Image */}
          <picture>
            <source 
              media="(min-width:992px)" 
              srcSet="https://example.com/ian-mcallister-desktop.webp" 
              type="image/webp" 
            />
            <source 
              media="(min-width:992px)" 
              srcSet="https://example.com/ian-mcallister-desktop.jpg" 
              type="image/jpeg" 
            />
            <img 
              src="https://example.com/ian-mcallister-desktop.jpg" 
              alt="Ian McAllister - Fractional Product Manager" 
              title="Ian McAllister - Fractional Product Manager" 
              className="profile-picture hidden lg:block max-w-xs rounded-lg shadow-lg" 
            />
          </picture>
          
          {/* Mobile Image */}
          <picture className="img-container lg:hidden">
            <source 
              media="(max-width:992px)" 
              srcSet="https://example.com/ian-mcallister-mobile.webp" 
              type="image/webp" 
            />
            <source 
              media="(max-width:992px)" 
              srcSet="https://example.com/ian-mcallister-mobile.jpg" 
              type="image/jpeg" 
            />
            <img 
              src="https://example.com/ian-mcallister-mobile.jpg" 
              alt="Ian McAllister - Fractional Product Manager" 
              title="Ian McAllister - Fractional Product Manager" 
              className="profile-picture--mobile w-60 mx-auto rounded-lg shadow-lg" 
            />
          </picture>
        </div>
      </div>

      {/* About section */}
      <div className="about bg-white p-8 lg:p-12 mt-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">WHY ME?</h2>
        <div className="about__content text-gray-700 space-y-4">
            <p>
            Are you looking for a Fractional Product Manager with a solid background in product strategy, business development, and software development? I bring over a decade of experience managing and delivering innovative products, leading teams, and aligning technical solutions with business goals. From scaling startups to driving product initiatives in established companies, I’ve successfully led numerous high-impact projects.
            </p>
            <p>
            As your Fractional Product Manager, I offer more than just experience—I provide a strategic vision for your product roadmap, streamline your development workflow, and ensure efficient collaboration across teams. I specialize in transforming complex business requirements into actionable, user-focused products that drive engagement and growth. My experience spans full-stack development and data-driven product management, enabling me to deliver end-to-end solutions tailored to your needs.
            </p>
            <p>
            My technical expertise includes proficiency in modern product and software development tools such as SQL, Python, and JavaScript (React, Node.js, Next.js), with a focus on building scalable, maintainable solutions. I also have a strong background in data science, enabling me to leverage analytics to refine product features and enhance user experience. Check out my <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn profile</a> to see my professional journey.
            </p>
            <p>
            Offering my services as a Fractional Product Manager for hire, I am dedicated to collaborating with businesses of all sizes. Whether you need help refining your product strategy, setting up development processes, or delivering a high-quality user experience, I’m here to help. Let’s connect to discuss how I can support your project needs.
            </p>
            <p>
            <i className="far fa-paper-plane mr-2"></i>
            <a href="mailto:iemcallister@gmail.com" className="text-blue-500 hover:underline">iemcallister@gmail.com</a>
            </p>
            <iframe
            loading="lazy"
            title="portfolio-video"
            src="https://player.vimeo.com/video/your-vimeo-id-here"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            className="mt-6 w-full max-w-lg mx-auto"
            ></iframe>
        </div>
       </div>

       {/* Rate Card */}
       <div className="section bg-gray-100 p-8 lg:p-12 mt-8 shadow-md rounded-lg" id="services">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">SERVICES</h2>
        <div className="space-y-8">
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Ongoing Advice</p>
            <p className="text-gray-700">
                Regular meetings with your team to consult on product development roadmap, set engineering pacing, and perform code reviews to ensure your project is well-structured. Minimum price is <strong>$4800/month</strong>.
            </p>
            </div>
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Part-time Development</p>
            <p className="text-gray-700">
                Ideal if you need support on a regular basis, around 20-25 hours per week. This option enables frequent team interaction, helping identify and resolve issues early.
            </p>
            </div>
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Full-time Development</p>
            <p className="text-gray-700">
                Full-time commitment (40 hours per week). I enjoy full-stack development and bringing business ideas to life. Besides fractional product management, I can set up infrastructure, and implement integrations and other functionalities.
            </p>
            </div>
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">One-time Assessment</p>
            <p className="text-gray-700">
                Need a one-time assessment or guidance on your project? I offer:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Engineering pace setup with recommendations on achievable goals within your resources.</li>
                <li>Comprehensive project assessment and a report with actionable recommendations.</li>
                <li>Infrastructure setup to allow your developers to focus on product development rather than DevOps.</li>
            </ul>
            </div>

        </div>
      </div>

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
};

export default FractionalProductManager;
