import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogLayout from '../../layout';
import ClientSideComponent from './ClientSideComponent';
import { remark } from 'remark';
import html from 'remark-html';
import Image from "next/image";
import gfm from 'remark-gfm'; // Import the GFM plugin

// Define the Frontmatter type
interface Frontmatter {
  title: string;
  description: string;
  date: string; // Keep this as a string for parsing
  image: string;
  imageAttribution?: string; // Optional field
}

// Helper function to calculate the time since the post was published
function timeSince(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000); // Years
  if (interval > 1) return `${interval} years ago`;

  interval = Math.floor(seconds / 2592000); // Months
  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor(seconds / 604800); // Weeks
  if (interval > 1) return `${interval} weeks ago`;

  interval = Math.floor(seconds / 86400); // Days
  if (interval > 1) return `${interval} days ago`;

  return `${Math.floor(seconds)} seconds ago`;
}

// Fetch the post data
async function getPostBySlug(slug: string): Promise<{ frontmatter: Frontmatter; content: string; imageAttributionHtml?: string }> {
  const fullPath = path.join(process.cwd(), 'src/content', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the markdown file content
  const { data, content } = matter(fileContents);

  // Convert Markdown to HTML with GFM support
  const processedContent = await remark()
    .use(gfm) // Use GFM plugin for better Markdown support
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  // Process image attribution if present
  let imageAttributionHtml = '';
  if (data.imageAttribution) {
    const processedAttribution = await remark()
      .use(gfm) // Use GFM plugin for better Markdown support
      .use(html)
      .process(data.imageAttribution);
    imageAttributionHtml = processedAttribution.toString();
  }

  return {
    frontmatter: {
      ...data, // Spread existing frontmatter fields
      imageAttribution: data.imageAttribution || '', // Ensure imageAttribution is included
    } as Frontmatter, // Type assertion
    content: contentHtml, // Return the HTML content
    imageAttributionHtml, // Return the HTML attribution
  };
}

// Main PostPage Component (Server Component)
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch post data
  const { frontmatter, content, imageAttributionHtml } = await getPostBySlug(slug);

  return (
    <BlogLayout>
      <div className="container mx-auto p-4">
        {/* Display the title at the top */}
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        
        {/* Display post details and time since posting */}
        <p className="text-gray-500">{frontmatter.date}</p>
        <p className="text-gray-500">{timeSince(frontmatter.date)}</p>
        
        {/* Ensure the image is rendered as expected */}
        <div className="flex justify-center mb-4 relative"> {/* Flex container to center the image with relative positioning */}
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            className="max-w-full h-auto object-cover"
            width={800} // Replace with the actual width of your image or desired display width
            height={450} // Replace with the actual height of your image or desired display height
            layout="responsive" // Optional: This makes the image responsive
            objectFit="cover" // Optional: This controls how the image is resized (cover, contain, etc.)
          />    
          
          {/* Display image attribution */}
          {imageAttributionHtml && (
            <div
              className="absolute bottom-0 right-0 text-sm text-gray-400 italic mb-2 mr-2" // Positioning attribution
              dangerouslySetInnerHTML={{ __html: imageAttributionHtml }} // Render the HTML attribution safely
            />
          )}
        </div>

        
        

        

        {/* Render the main content */}
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: content }} // Render the HTML content safely
        />

        {/* This component will handle client-side logic */}
        <ClientSideComponent />
      </div>
    </BlogLayout>
  );
}
