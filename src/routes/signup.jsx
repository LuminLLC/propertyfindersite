import React from "react";
import '../App.css';


const SignUp = () => {
  return (
    <>
      {/* Approach */}

      <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signin.html">
                Sign in here
              </a>
            </p>
          </div>

          <div class="mt-5">


            <form>
              <div class="grid gap-y-4">
                {/* <!-- First Name Field --> */}
                <div class="relative">
                  <label for="first-name" class="block text-sm mb-2 dark:text-white">First Name</label>
                  <div class="relative">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      aria-describedby="first-name-error"
                    />
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="first-name-error">Please enter your first name</p>
                </div>

                {/* <!-- Last Name Field --> */}
                <div class="relative">
                  <label for="last-name" class="block text-sm mb-2 dark:text-white">Last Name</label>
                  <div class="relative">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      aria-describedby="last-name-error"
                    />
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="last-name-error">Please enter your last name</p>
                </div>

                {/* <!-- Country of Residence Field --> */}
                <div class="relative">
                  <label for="country" class="block text-sm mb-2 dark:text-white">Country of Residence</label>
                  <div class="relative">
                    <select
                      id="country"
                      name="country"
                      class="appearance-none py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600"
                      required
                      aria-describedby="country-error"
                    >
                      <option value="" disabled selected>Select your country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                      {/* <!-- Add more countries as needed --> */}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="country-error">Please select your country of residence</p>
                </div>

                {/* <!-- Email Field --> */}
                <div class="relative">
                  <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>

                {/* <!-- Password Field --> */}
                <div class="relative">
                  <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="password-error"
                  />
                  <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>

                {/* <!-- Confirm Password Field --> */}
                <div class="relative">
                  <label for="confirm-password" class="block text-sm mb-2 dark:text-white">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="confirm-password-error"
                  />
                  <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>

                {/* <!-- Remember Me Field --> */}
                <div class="flex items-center">
                  <div class="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ml-3">
                    <label for="remember-me" class="text-sm dark:text-white">
                      I accept the <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">Terms and Conditions</a>
                    </label>
                  </div>
                </div>

                {/* <!-- Submit Button --> */}
                <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  Sign up
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
      {/* End Approach */}
    </>
  );
};

export default SignUp;
