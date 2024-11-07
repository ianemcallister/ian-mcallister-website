// src/app/services/full-stack-developer.tsx

'use client';

//import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '../../components/CallToAction';

const FullStackDeveloper = () => {
  return (
    <div className="section-container bg-gray-100">
      {/* Hero Section */}
      <div className="hero-section bg-white">
        <div className="hero flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
          {/* Text Content */}
          <div className="content text-center lg:text-left mb-6 lg:mb-0">
            <span className="pre-header text-lg text-gray-600 block">Hi, I&apos;m Ian McAllister</span>
            <h1 className="main-header text-4xl lg:text-5xl font-bold mt-2">
              Need a Full Stack Developer?
            </h1>
            <Link href="/services/full-stack-developer/details">
              <button className="find-btn mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                FIND OUT MORE
              </button>
            </Link>
          </div>
          
          {/* Desktop Image */}
          <picture>
            <source 
              media="(min-width:992px)" 
              srcSet="https://example.com/ian-mcallister-fullstack-desktop.webp" 
              type="image/webp" 
            />
            <source 
              media="(min-width:992px)" 
              srcSet="https://example.com/ian-mcallister-fullstack-desktop.jpg" 
              type="image/jpeg" 
            />
            <img 
              src="https://example.com/ian-mcallister-fullstack-desktop.jpg" 
              alt="Ian McAllister - Full Stack Developer" 
              title="Ian McAllister - Full Stack Developer" 
              className="profile-picture hidden lg:block max-w-xs rounded-lg shadow-lg" 
            />
          </picture>
          
          {/* Mobile Image */}
          <picture className="img-container lg:hidden">
            <source 
              media="(max-width:992px)" 
              srcSet="https://example.com/ian-mcallister-fullstack-mobile.webp" 
              type="image/webp" 
            />
            <source 
              media="(max-width:992px)" 
              srcSet="https://example.com/ian-mcallister-fullstack-mobile.jpg" 
              type="image/jpeg" 
            />
            <img 
              src="https://example.com/ian-mcallister-fullstack-mobile.jpg" 
              alt="Ian McAllister - Full Stack Developer" 
              title="Ian McAllister - Full Stack Developer" 
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
            Are you in need of a Full Stack Developer with a deep understanding of both frontend and backend technologies? With over a decade of experience building scalable applications, I specialize in crafting efficient, high-quality code that drives user engagement and business growth.
            </p>
            <p>
            As a Full Stack Developer, I bring a comprehensive approach to application development—bridging the gap between design, user experience, and backend systems. Whether it’s developing an interactive UI or implementing a robust server architecture, I ensure every aspect of the application aligns with business goals and delivers value to users.
            </p>
            <p>
            My expertise includes technologies like JavaScript (React, Node.js, Next.js), Python, and SQL, alongside modern dev tools and frameworks. From small startups to enterprise-level projects, I’ve successfully delivered end-to-end solutions tailored to unique business needs. View my <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn profile</a> for more on my professional journey.
            </p>
            <p>
            I am open to projects of any size, offering part-time or full-time engagement. Whether you need ongoing development support, a one-time project setup, or an assessment, I’d love to discuss how I can contribute to your success.
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
            <p className="text-xl font-semibold text-gray-700 mb-2">Project-Based Development</p>
            <p className="text-gray-700">
                Whether it’s creating a new feature or building an application from scratch, I offer project-based development services. From backend architecture to frontend design, I deliver solutions tailored to your project’s needs.
            </p>
            </div>
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Long-Term Contract</p>
            <p className="text-gray-700">
                Need regular development support? I am available for long-term contracts, where I provide continuous collaboration with your team, ensuring code quality and alignment with business goals.
            </p>
            </div>
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Full-Time Development</p>
            <p className="text-gray-700">
                Full-time commitment for large-scale projects requiring intensive development. My focus on both frontend and backend ensures a cohesive, scalable solution.
            </p>
            </div>
            
            <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Technical Consulting</p>
            <p className="text-gray-700">
                Offering consultations to help optimize your tech stack, improve application performance, or assess code quality. Ideal for teams looking to improve existing infrastructure or launch new projects effectively.
            </p>
            </div>

        </div>
      </div>

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
};

export default FullStackDeveloper;
