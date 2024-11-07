"use client"; // This line ensures the component is treated as a client component

import Image from "next/image";
import Head from "next/head";
import Link from "next/link"; // Import Next.js Link component

const EngineeringPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Head for metadata */}
      <Head>
        <title>Software Development - Ian McAllister</title>
        <meta
          name="description"
          content="Explore my software development projects, skills, and expertise in web development and machine learning."
        />
        <meta
          name="keywords"
          content="software development, web development, machine learning, programming, engineering"
        />
      </Head>
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh]">
        <Image
          src="/assets/images/rear-view-programmer-working-all-night-long.jpg" // Replace with your banner image path
          alt="Software Development Banner"
          fill // Adjusted for Next.js 13+
          style={{ objectFit: "cover" }}
          priority={true}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold">Software Development</h1>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          {/* Description/Summary Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Summary</h2>
            <p>
              As a software developer, I am passionate about building scalable
              web applications and leveraging machine learning to solve real-world
              problems. My journey in software development has equipped me with
              a robust set of skills and a deep understanding of the technologies
              that drive modern solutions.
            </p>
          </section>

          {/* Skills Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>Machine Learning (TensorFlow, PyTorch)</li>
              <li>Database Management (MySQL, MongoDB)</li>
              <li>RESTful APIs</li>
              <li>Version Control (Git)</li>
              <li>Agile Methodologies</li>
            </ul>
          </section>

          {/* Resume */}
          <section className="my-8">
            <h2 className="text-3x1 front-semibold mb-4">Resume</h2>
            <p>
              Please find my resume here: <a href="https://docs.google.com/document/d/1U0pAK9Bzjqng77RpPlLc0M1RxvN5Zx7o/edit?usp=sharing&ouid=112777807805300324850&rtpof=true&sd=true">Full-Stack Developer</a>
            </p>
          </section>

          {/* Spotlight Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Spotlight</h2>
            <p>
              This is the capstone project of my recently completed AI
              developer bootcamp completed through <a href="https://www.learncodinganywhere.com/" className="text-blue-500 underline">The Tech Academy</a>
            </p>
            <Link href="/spotlight" className="text-blue-500 underline">
              View Spotlight
            </Link>
          </section>

          {/* Web Development Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Web Development</h2>
            <p>
              I specialize in creating responsive and user-friendly web applications
              using modern frameworks and libraries. My experience includes working
              on both front-end and back-end development, ensuring seamless
              integration between client and server.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Building Single Page Applications (SPAs) with React</li>
              <li>Implementing server-side rendering with Next.js</li>
              <li>Creating RESTful services with Node.js</li>
            </ul>
          </section>

          {/* Machine Learning Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Machine Learning</h2>
            <p>
              I have a strong foundation in machine learning concepts and
              applications. My work includes developing predictive models and
              data-driven solutions to address complex challenges.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Data preprocessing and analysis</li>
              <li>Building and training machine learning models</li>
              <li>Using libraries like TensorFlow and scikit-learn</li>
            </ul>
          </section>

          {/* Portfolio Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
            <p>
              Here are some of the programming languages and technologies I&apos;ve worked with. This section highlights my proficiency in various languages across different projects.
            </p>

            {/* Full Bleed Horizontally Scrolling Section */}
            <div className="relative overflow-x-auto py-4 w-screen ml-[calc(-50vw+50%)]">
              <div className="flex space-x-4 w-[200%]">
                {/* Language Tiles with Links and Images */}
                {[
                  { name: "JavaScript", imgSrc: "/assets/images/javascript.png", url: "/engineering/portfolio/javascript" },
                  { name: "TypeScript", imgSrc: "/assets/images/typescript.png", url: "/engineering/portfolio/typescript" },
                  { name: "Python", imgSrc: "/assets/images/python.png", url: "/engineering/portfolio/python" },
                  { name: "R", imgSrc: "/assets/images/r.png", url: "/engineering/portfolio/r" },
                  { name: "PHP", imgSrc: "/assets/images/php.png", url: "/engineering/portfolio/php" },
                  { name: "C++", imgSrc: "/assets/images/cplusplus.png", url: "/engineering/portfolio/cplusplus" },
                ].map((language) => (
                  <Link href={language.url} key={language.name}>
                    <div
                      className="min-w-[250px] h-[400px] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-xl font-semibold text-white"
                      style={{ backgroundImage: `url(${language.imgSrc})` }}
                    >
                      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center rounded-lg">
                        {language.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EngineeringPage;
