const AboutUs = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl"
              src="/images/bg-h-1.jpg"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  Our Goal at Property Finder Ghana is simple
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  We aim to find you the perfect property without you lifting a finger. Additionally, we strive to save you as much money as possible throughout the process.
                </p>
                <p className="text-gray-500 dark:text-neutral-500">
                  Our team comprises experts in marketing, communication, and technology, all sharing a passion for real estate. With extensive experience in buying and selling properties, we recognized the need for a more efficient and cost effective approach to one of life's most significant investments.
                </p>
                <p className="text-gray-500 dark:text-neutral-500">
                  While based in Accra, Ghana, our services extend across the entire nation and beyond. Our experts travel extensively, sourcing properties for a diverse clientele ranging from celebrities and businesses to first-time buyers, investors, and anyone seeking their ideal property.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">Hassle-free</span> property search with savings
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">Expert team </span> revolutionizing real estate
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">Nationwide </span> property sourcing expertise
                  </span>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
      {/* FAQ */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Frequently
                <br />
                asked questions
              </h2>
              <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="md:col-span-3 space-y-6">
            {/* FAQ Item 1 */}
            <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-700">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                How long does it take to complete a request?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                It typically takes 2-4 weeks to complete a property request, depending on the complexity and specific requirements.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-700">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                Can I cancel my request?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Yes, you can cancel your request at any time before the completion. Please refer to our cancellation policy for more details.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-700">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                How do I make changes to my request?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                You can make changes to your request by contacting our support team via email or phone. They will assist you with the necessary modifications.
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End FAQ */}
    </>
  );
};

export default AboutUs;
