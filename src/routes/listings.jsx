import { Link } from "react-router-dom";
const Listings = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Listings
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Discover your perfect property: Explore our listings.
          </p>
        </div>
        {/* End Title */}
      </div>
      {/* Card Grid */}
      <div className="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 m-12">
        {/* Card */}
        <Link className="group block" to="/singleBlog">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/slider-8.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              eYoga
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              A revamped and dynamic approach to yoga analytics
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Discovery
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Guidelines
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Yoga
              </span>
            </div>
          </div>
        </Link>
        {/* End Card */}
        {/* Card */}
        <Link className="group block" to="/singleBlog">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/p-4.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Nike React
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Rewriting sports playbook for billions of athletes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </Link>
        {/* End Card */}
        {/* Card */}
        <Link className="group block" to="/singleBlog">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/slider-9.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Day Spa
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Designing a new cocktail can
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </Link>
        {/* End Card */}
        {/* Card */}
        <Link className="group block" to="/singleBlog">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/b-11.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Diamond Dynamics
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              From cutting-edge equipment to stylish apparel
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Sports Gear
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Equipment
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Discovery
              </span>
            </div>
          </div>
        </Link>
        {/* End Card */}
      </div>
      {/* End Card Grid */}
    </>
  );
};

export default Listings;
