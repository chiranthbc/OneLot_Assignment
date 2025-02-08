import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12 lg:mt-24 text-center">
      <h1 className="text-black text-3xl font-bold lg:text-5xl">
        Grow your dealership with car loans and digital tools for oneLot
      </h1>
      <p className="text-gray-500 text-base font-normal lg:text-xl mt-8">
        We enable dealers to buy more cars through our inventory loan solutions
        and sell cars more efficiently through our Dealership Management System
        with its inventory management, marketing solutions, and market insights.
      </p>
      <div className="mt-10">
        <Link
          href="/app/signup/dealer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm lg:text-base font-medium text-white transition duration-200 rounded-lg bg-[#3600D1] hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none focus:ring-0"
        >
          Inquire Now
        
        </Link>
      </div>
    </div>
  );
};

export default Hero;
