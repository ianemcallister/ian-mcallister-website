"use client"; // This line ensures the component is treated as a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

// Define TypeScript interfaces for the project data
interface Project {
  name: string;
  imgSrc: string;
  url: string;
}

interface ReadmeResponse {
  content: string;
  download_url: string;
}

// Component receiving the `params` object from the URL
const PortfolioLanguagePage = ({ params }: { params: { language: string } }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectReadme, setSelectedProjectReadme] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { language } = params; // Extract `language` from `params`

  useEffect(() => {
    if (language) {
      fetchProjectsForLanguage(language);
    }
  }, [language]);

  const fetchProjectsForLanguage = async (language: string) => {
    try {
      setLoading(true);

      // Example of fetching the project list from a GitHub API or custom API
      const response = await fetch(`/api/github-projects?language=${language}`);
      if (!response.ok) {
        throw new Error('Failed to fetch project data');
      }
      const projectsData: Project[] = await response.json();
      setProjects(projectsData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      setLoading(false);
    }
  };

  const fetchReadmeForProject = async (projectName: string) => {
    try {
      setLoading(true);

      const response = await fetch(`/api/github-readme?project=${projectName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch README data');
      }
      const readmeData: ReadmeResponse = await response.json();
      const decodedMarkdown = atob(readmeData.content);
      setSelectedProjectReadme(decodedMarkdown);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch README:', error);
      setLoading(false);
    }
  };

  return (
    (<div className="flex flex-col min-h-screen">
      <Head>
        <title>{language} Projects - Portfolio</title>
        <meta name="description" content={`Explore my projects in ${language}`} />
      </Head>
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] bg-gray-900">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold">Portfolio</h1>
        </div>
      </div>
      {/* Language Header and Summary */}
      <main className="p-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">{language} Projects</h2>
          <p className="mb-8">
            {/* Replace this with your own summary of work in the selected language */}
            This section contains my portfolio of projects related to {language}. Each project is designed to solve real-world challenges using {language}.
          </p>

          {/* Projects Horizontal Scroll Bar */}
          <div className="relative overflow-x-auto py-4 w-screen ml-[calc(-50vw+50%)]">
            <div className="flex space-x-4 w-[200%]">
              {loading ? (
                <p>Loading...</p>
              ) : (
                projects.map((project: Project) => (
                  <div
                    key={project.name}
                    className="min-w-[250px] h-[300px] bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-xl font-semibold text-white"
                    style={{ backgroundImage: `url(${project.imgSrc})` }}
                    onClick={() => fetchReadmeForProject(project.name)}
                  >
                    <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center rounded-lg">
                      {project.name}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Selected Project's README Section */}
          {selectedProjectReadme && (
            <div className="mt-8">
              <h3 className="text-3xl font-semibold mb-4">Project README</h3>
              <div className="prose">
                <ReactMarkdown>{selectedProjectReadme}</ReactMarkdown>
              </div>

              {/* Link to GitHub Repository */}
              <Link
                href={`https://github.com/yourusername/${selectedProjectReadme}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
                
                  View on GitHub
                
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>)
  );
};

export default PortfolioLanguagePage;
