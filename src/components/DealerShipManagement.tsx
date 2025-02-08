import Image from 'next/image';
import Dealership from "../assets/images/dealership-management-system-pic.webp"

const DealerManagementSystem = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1 order-1 lg:order-2">
          <div className="mx-4 lg:mx-8 mb-4 lg:mb-0">
            <div>
              <h2 className="text-primary text-3xl lg:text-4xl font-bold text-center lg:text-left">
                Dealer Management System
              </h2>
              <p className="text-secondary text-base lg:text-lg mt-8 text-center lg:text-left">
                OneLot’s platform is designed with one goal in mind: to help used car dealers run their business more efficiently.
              </p>
            </div>
          </div>
          <div className="lg:block lg:mx-8">
            <div className="divider"></div>
            <div className="feature-list">
              <div className="feature-item">
                <IconText
                  icon="check"
                  title="Inventory Management"
                  description="Track all details about your cars and sales in one place, from car details to buyers."
                />
              </div>
              <div className="feature-item">
                <IconText
                  icon="check"
                  title="Marketing Tools"
                  description="Promote your cars across all platforms with one-click uploads to Facebook and Instagram."
                />
              </div>
              <div className="feature-item">
                <IconText
                  icon="info"
                  title="Marketing Insights (Coming Soon)"
                  description="Get insights on prices and volumes for all cars in the market with data from various sources."
                />
              </div>
            </div>
            <div className="divider"></div>
            <p className="text-secondary text-base lg:text-lg text-center lg:text-left">
              Sign up today for OneLot's dealer platform and make managing your cars easier.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start mt-8">
            <a
              href="/products/dealer-inventory-loans"
              className="relative inline-flex items-center justify-center px-6 py-3 text-white text-sm my-10 font-medium rounded-lg shadow-lg transition-all duration-300 bg-[#3600D1] hover:bg-[#2b00a8] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Explore More →
            </a>
          </div>

        </div>

        <div className="lg:hidden order-4 mx-4">
          <div className="divider"></div>
          <div className="feature-list">
            <div className="feature-item">
              <IconText
                icon="check"
                title="Inventory Management"
                description="Track all details about your cars and sales in one place, from car details to buyers."
              />
            </div>
            <div className="feature-item">
              <IconText
                icon="check"
                title="Marketing Tools"
                description="Promote your cars across all platforms with one-click uploads to Facebook and Instagram."
              />
            </div>
            <div className="feature-item">
              <IconText
                icon="info"
                title="Marketing Insights (Coming Soon)"
                description="Get insights on prices and volumes for all cars in the market with data from various sources."
              />
            </div>
          </div>
          <div className="divider"></div>
          <p className="text-secondary text-base lg:text-lg text-center lg:text-left">
            Sign up today for OneLot's dealer platform and make managing your cars easier.
          </p>
          <div className="flex justify-center lg:justify-start mt-8">
            <a
              href="/products/dealer-inventory-loans"
              className="relative inline-flex items-center justify-center px-6 py-3 text-white text-sm my-10 font-medium rounded-lg shadow-lg transition-all duration-300 bg-[#3600D1] hover:bg-[#2b00a8] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Explore More →
            </a>
          </div>
        </div>

        <div className="flex-none order-3 lg:w-[50%] lg:max-w-[50%]">
          <Image
            src={Dealership}
            alt="Dealership Management"
            width={800}
            height={652}
            className="mx-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

interface IconTextProps {
  icon: 'check' | 'info';
  title: string;
  description: string;
}

const IconText = ({ icon, title, description }: IconTextProps) => {
  const icons = {
    check: (
      <svg
        className="mr-2 mt-0.5 text-xl flex-shrink-0 bg-[#F0E2FF] rounded-full p-1"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        height="1em"
        width="1em"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    info: (
      <svg
        className="mr-2 mt-0.5 text-xl flex-shrink-0 bg-[#F0E2FF] rounded-full p-1"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        height="1em"
        width="1em"
      >
        <path
          fillRule="evenodd"
          d="M18 2a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V2zM4 0h12a4 4 0 014 4v16a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  };

  return (
    <div className="flex my-4">
      {icons[icon]}
      <p className="text-secondary text-base lg:text-lg font-medium tracking-tight">
        <span className="text-primary font-semibold">{title}:</span> {description}
      </p>
    </div>
  );
};

export default DealerManagementSystem;
