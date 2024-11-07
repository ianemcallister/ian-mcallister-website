"use client"; // This line ensures the component is treated as a client component

import Image from "next/image";
import Head from "next/head";
import Link from "next/link"; // Import Next.js Link component

const ProductPage: React.FC = () => {
  return (
    (<div className="flex flex-col min-h-screen">
      {/* Head for metadata */}
      <Head>
        <title>Products - Ian McAllister</title>
        <meta
          name="description"
          content="Explore the products I have developed, showcasing my expertise in software engineering, web development, and innovation."
        />
        <meta
          name="keywords"
          content="products, software products, web development, machine learning, engineering"
        />
      </Head>
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh]">
        <Image
          src="/assets/images/saas-concept-collage.jpg" // Replace with your product banner image path
          alt="Product Banner"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold">Our Products</h1>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          {/* Product Overview Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Product Overview</h2>
            <p>
              Our products are designed to address the needs of modern businesses, offering scalable solutions to drive success. From web applications to cutting-edge machine learning tools, we aim to innovate and simplify everyday challenges.
            </p>
          </section>

          {/* Featured Products Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Card 1 */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/product1.jpg" // Replace with actual product image
                  alt="Product 1"
                  width={500}
                  height={500}
                  objectFit="cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">Product 1</h3>
                  <p className="text-gray-500">This is a description of Product 1. It&apos;s a game-changing solution for modern businesses.</p>
                  <Link href="/products/product-1" className="text-blue-500 mt-4 inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/product2.jpg" // Replace with actual product image
                  alt="Product 2"
                  width={500}
                  height={500}
                  objectFit="cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">Product 2</h3>
                  <p className="text-gray-500">This is a description of Product 2. It offers innovative solutions for everyday challenges.</p>
                  <Link href="/products/product-2" className="text-blue-500 mt-4 inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/product3.jpg" // Replace with actual product image
                  alt="Product 3"
                  width={500}
                  height={500}
                  objectFit="cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">Product 3</h3>
                  <p className="text-gray-500">This is a description of Product 3. It’s designed to optimize efficiency and performance.</p>
                  <Link href="/products/product-3" className="text-blue-500 mt-4 inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Product Categories Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-4">Categories</h2>
            <p>Explore our diverse range of products tailored to meet various business needs. From SaaS solutions to data-driven applications, we have it all.</p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="/products/category/web-development"
                className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-1/3 text-center">
                Web Development
              </Link>
              <Link
                href="/products/category/ml"
                className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-1/3 text-center">
                Machine Learning
              </Link>
              <Link
                href="/products/category/ai"
                className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-1/3 text-center">
                AI Solutions
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>)
  );
};

export default ProductPage;
