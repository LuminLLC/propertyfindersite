import { Link } from "react-router-dom";
import React from "react";
import '../App.css';


const BlogSection = () => {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Blog
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Insights, Tips, and Stories. Dive into our blog for real estate
            inspiration.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <Link
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            to="/singleBlog"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="/images/p-4.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Unity’s inside sales team drives 80% of its revenue.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          {/* End Card */}
          {/* Card */}
          <Link
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            to="/singleBlog"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="/images/s-6.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Living Spaces creates a unified experience across the customer
              journey.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          {/* End Card */}
          {/* Card */}
          <Link
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            to="/singleBlog"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="/images/s-4.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      <div className="mt-2 text-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800"
          to="/blog"
        >
          Read more
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      {/* End Card Blog */}
    </>
  );
};

export default BlogSection;
