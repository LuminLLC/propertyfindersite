import React, { useState } from "react";
import { Link } from "react-router-dom";

const TestimonialCTASection = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin Escobar",
      title: "Founder of Meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      title: "Product Designer",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      title: "DevOp Engineer",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="my-10 py-28 bg-gradient-to-br from-indigo-200 via-pink-200 to-indigo-100 dark:from-indigo-900 dark:via-pink-900 dark:to-indigo-800">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h3 className="text-indigo-600 font-semibold dark:text-indigo-400">
              Professional Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the best from the market
            </p>
            <Link
              to="/contact"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Get in touch
            </Link>
          </div>
          {/* Testimonial Section */}
          <div className="text-center">
            <h3 className="text-indigo-600 font-semibold dark:text-indigo-400 pb-6">
              What people are saying
            </h3>
            <figure className="max-w-xl mx-auto">
              <blockquote className="text-gray-800 text-xl font-semibold sm:text-2xl dark:text-gray-200">
                “{testimonials[currentTestimonial].quote}“
              </blockquote>
              <div className="mt-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  className="w-16 h-16 mx-auto rounded-full"
                  alt={testimonials[currentTestimonial].name}
                />
                <div className="mt-3">
                  <span className="block text-gray-800 font-semibold dark:text-gray-200">
                    {testimonials[currentTestimonial].name}
                  </span>
                  <span className="block text-gray-600 text-sm mt-0.5 dark:text-gray-400">
                    {testimonials[currentTestimonial].title}
                  </span>
                </div>
              </div>
            </figure>
            <div className="mt-6">
              <ul className="flex gap-x-3 justify-center">
                {testimonials.map((_, idx) => (
                  <li key={idx}>
                    <button
                      className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                        currentTestimonial === idx
                          ? "bg-indigo-600"
                          : "bg-gray-300 dark:bg-gray-500"
                      }`}
                      onClick={() => setCurrentTestimonial(idx)}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCTASection;
