import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content');

// Function to fetch post data by slug
async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // log content
  //console.log('content', content);
  
  return {
    slug,
    frontmatter: data,
    contentHtml,
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return {
    title: postData.frontmatter.title,
    description: postData.frontmatter.description,
    openGraph: {
      title: postData.frontmatter.title,
      description: postData.frontmatter.description,
    },
    twitter: {
      card: 'summary',
      title: postData.frontmatter.title,
      description: postData.frontmatter.description,
    },
    alternates: {
      canonical: `https://www.yoursite.com/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, contentHtml } = await getPostData(params.slug);

  return (
    <article className="prose max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
