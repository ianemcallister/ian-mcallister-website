
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// Path to the directory containing your talks data
const talksDirectory = path.join(process.cwd(), 'src/talks');

// Function to fetch all upcoming and past talks
async function getAllTalks() {
  const filenames = fs.readdirSync(talksDirectory);
  return filenames.map((filename) => {
    const fullPath = path.join(talksDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      frontmatter: {
        ...data,
      },
    };
  });
}

export default async function TalksPage() {
  const talks = await getAllTalks();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Head for metadata */}
      <Head>
        <title>Talks - Ian McAllister</title>
        <meta name="description" content="Discover my upcoming and past speeches." />
        <meta name="keywords" content="talks, speeches, public speaking, upcoming events, past events" />
      </Head>

      {/* Banner Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh]">
        <Image
          src="/assets/images/close-up-microphone.jpg" // Replace with your banner image path
          alt="Talks Banner"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold">Talks</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          {/* Upcoming Speeches Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Upcoming Speeches</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {talks.filter(talk => talk.frontmatter.type === 'upcoming').map((talk, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={talk.frontmatter.thumbnail} // Assuming your data structure contains the thumbnail field
                    alt={talk.frontmatter.title}
                    width={400}
                    height={250}
                    className="w-full h-[150px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{talk.frontmatter.title}</h3>
                    <p className="text-gray-600">{talk.frontmatter.date}</p>
                    <p className="mt-2">{talk.frontmatter.description}</p>
                    <p className="mt-2 font-bold">{`Price: $${talk.frontmatter.price}`}</p>
                    <Link href={talk.frontmatter.registrationLink} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                      Register Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Speeches Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Past Speeches</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {talks.filter(talk => talk.frontmatter.type === 'past').map((talk, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={talk.frontmatter.thumbnail} // Assuming your data structure contains the thumbnail field
                    alt={talk.frontmatter.title}
                    width={400}
                    height={250}
                    className="w-full h-[150px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{talk.frontmatter.title}</h3>
                    <p className="text-gray-600">{talk.frontmatter.date}</p>
                    <p className="mt-2">{talk.frontmatter.description}</p>
                    <Link href={talk.frontmatter.videoLink} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                      Watch Video
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}
