import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import BlogLayout from './layout'; // Import the BlogLayout
import style from './styles.module.css';

const postsDirectory = path.join(process.cwd(), 'src/content');

async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      frontmatter: {
        ...data,
        // You can add more fields if necessary
      },
    };
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    (<BlogLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="list-none">
          {posts.map((post) => (
            <li key={post.slug} className="mb-4 flex">
              {post.frontmatter.image && (
                <div className="w-1/3 pr-4"> {/* Left column for the image */}
                  <img 
                    src={post.frontmatter.image} 
                    alt={post.frontmatter.title} 
                    className="w-full h-auto mb-2 rounded-lg" // Add styles as needed
                  />
                </div>
              )}
              <div className="w-2/3"> {/* Right column for text */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-semibold"
                  legacyBehavior>
                  {post.frontmatter.title}
                </Link>
                <p className="text-gray-500">{post.frontmatter.date}</p>
                <p>{post.frontmatter.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BlogLayout>)
  );
}
