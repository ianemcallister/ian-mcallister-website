import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content');

async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''), // remove the .md extension
      frontmatter: data,
    };
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-10 text-center">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-200 pb-4">
            <Link href={`/blog/${post.slug}`} className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
              {post.frontmatter.title}
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-lg text-gray-700 mt-2">
              {post.frontmatter.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
