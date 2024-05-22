import { LuThumbsDown } from "react-icons/lu";
import React from "react";
import '../App.css';

export default function BenefitSection() {
  return (

    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-300 md:px-8">
      <div className="mt-2">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <ol class="space-y-6 lg:space-y-10">
                <li>
                  <h3 class="text-gray-800 dark:text-white text-sm font-semibold sm:text-2xl">Want more of this?</h3>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 mt-2 w-8 h-8 text-green-800 dark:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <div class="ms-5 sm:ms-8">
                    <p class="text-sm md:text-base text-neutral-400">1. The exact property you want</p>
                    <p class="text-sm md:text-base text-neutral-400">2. Lots of helpful advice on the best property for you</p>
                    <p class="text-sm md:text-base text-neutral-400">3. A property at the right price</p>
                    <p class="text-sm md:text-base text-neutral-400">4. The property experts acting <span class="text-green-600 dark:text-green-400">FOR</span> you</p>
                    <p class="text-sm md:text-base text-neutral-400">5. The property found within the shortest possible period</p>
                    <p class="text-sm md:text-base text-neutral-400">6. To put up your feet whilst we do all the work</p>
                  </div>
                </li>
              </ol>




              <ol class="space-y-6 lg:space-y-10">
                <li>
                  <h3 class="text-gray-800 dark:text-white text-sm font-semibold sm:text-2xl">And less of this?</h3>
                </li>
                <li class="flex">
                  <LuThumbsDown class="w-8 h-8 text-red-700 dark:text-red-400 mt-1" />
                  <div class="ms-5 sm:ms-8">
                    <p class="text-sm md:text-base text-neutral-400">1. Having to go anywhere near a property dealer</p>
                    <p class="text-sm md:text-base text-neutral-400">2. Not being sure whether the property you've found is any good</p>
                    <p class="text-sm md:text-base text-neutral-400">3. Paying too much for the property</p>
                    <p class="text-sm md:text-base text-neutral-400">4. Dealing with clueless and greedy agents</p>
                    <p class="text-sm md:text-base text-neutral-400">5. Being convinced by a dealer to buy the wrong property</p>
                    <p class="text-sm md:text-base text-neutral-400">6. Taking time off work to find your property</p>
                    <p class="text-sm md:text-base text-neutral-400">7. Traveling miles to see a property that turns out to be no good anyway</p>
                  </div>
                </li>
              </ol>



            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
