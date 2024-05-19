import React from "react";
import '../App.css';

export default function HeroSection() {
  return (
    <div className="px-4 lg:px-6 lg:px-8 py-10">
      <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
        <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('/images/bg-h-1.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <span className="block text-white">Property Finder</span>
            <span className="block text-white text-xl md:text-3xl">
              Hassle-free property acquisition in Ghana
            </span>
            <div className="mt-5">
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
