import React from 'react';

const GetStartedSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl text-center mx-auto">
        <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12">
          <p className="text-black text-2xl font-bold lg:text-4xl">Get Started Today</p>
          <p className="text-gray-500 text-base lg:text-xl font-normal mt-8">
            We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
          </p>
          <a
            href="/app"
            className="group relative items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg bg-[#3600D1] focus:ring-0 focus:ring-transparent inline-block mt-8"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
              <span className="lg:text-base">Inquire Now</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
