import React from "react";
import Link from "next/link";
import BlogFooter from "../../components/BlogFooter";

const Blog = () => {
  const blogs = [
    {
      title: "Work from home accessories",
      catagory: "Desk and Office",
      description:
        "Work from home accessories is a big task but you can do it na ok",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    },
    {
      title: "know your journal",
      catagory: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    },
    {
      title: "happy",
      catagory: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    },
  ];

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {blogs.map((blogs) => (
                <div key={blogs.catagory} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={blogs.imageSrc}
                      alt={blogs.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-5">
                    {blogs.catagory}
                  </span>
                  <h3 className="mt-4 text-base font-semibold  text-black-500">
                    <Link
                      href={{
                        pathname: "./blogpost/[slug]",
                        query: {slug:blogs.title},
                      }}
                    >
                        <span className="absolute inset-0" />
                        {blogs.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-900">{blogs.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BlogFooter />
    </>
  );
};

export default Blog;
