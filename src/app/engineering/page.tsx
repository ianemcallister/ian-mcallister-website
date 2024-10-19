"use client"; // This line ensures the component is treated as a client component

import Image from "next/image";
import Head from "next/head";

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
          layout="fill"
          objectFit="cover"
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Ian McAllister. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EngineeringPage;
