import React from "react";
import BusinessGrowthCards from "./BusinessGrowthCards";

const BusinessGrowthSection = () => {
  return (
    <div className="bg-white">
      <div className="text-center max-w-screen-2xl mx-auto">

        <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12">
          <p className="text-black text-2xl font-bold lg:text-4xl">
            Everything you need to grow your business
          </p>
          <p className="text-gray-500 text-base lg:text-xl font-normal mt-8">
            OneLot is your trusted lending and financing partner, exclusively tailored for used car
            dealerships. We also offer digital tools for streamlined operations and growth of your
            dealership.
          </p>
        </div>


        <BusinessGrowthCards
          title="Dealer Inventory Loans"
          subtitle="Accelerate your growth with tailored loan solutions"
          description="Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights."
        />
        <BusinessGrowthCards
          title="Dealership Management System"
          subtitle="Enhance your sales efficiency with free digital tools"
          description="OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations."
        />

      </div>
    </div>
  );
};

export default BusinessGrowthSection;
