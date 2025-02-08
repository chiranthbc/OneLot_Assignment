import Image from 'next/image';
import CarFinancing from "../assets/images/car-financing-pic.webp";


interface FeatureItemProps {
  text: string;
  iconColor?: string;
  bgColor?: string;
  className?: string;
}

const FeatureItem = ({ 
  text, 
  iconColor = 'rgb(54, 0, 209)', 
  bgColor = '#F0E2FF',
  className = '' 
}: FeatureItemProps) => (
  <div className={`flex ${className}`}>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mr-2 mt-0.5 text-xl flex-shrink-0 rounded-full p-1"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        color: iconColor,
        backgroundColor: bgColor
      }}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <p className="text-black text-base lg:text-lg font-semibold tracking-tight">
      {text}
    </p>
  </div>
);


import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ href, children, className = '' }: ButtonProps) => (
  <a
    href={href}
    className={`group relative items-stretch justify-center p-0.5 font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg bg-[#3600D1] focus:ring-0 focus:ring-transparent mt-8 text-center inline-block ${className}`}
  >
    <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
      {children}
    </span>
  </a>
);

const CarFinancingSection = () => {
  const features = [
    "Interest as low as 1.8% per month with daily calculation of interest",
    "Financing up to 70% of the vehicle purchase",
    "Financing period up to 90 days with a flexible repayment schedule at any point"
  ];

  return (
    <div className="pt-12">
      <div className="flex flex-col lg:flex-row items-center">
  
        <div className="flex-none order-2 lg:order-1 lg:w-[50%] lg:max-w-[50%]">
          <Image
            alt="Car Financing"
            src={CarFinancing}
            width={800}
            height={652}
            loading="lazy"
            decoding="async"
            className="mx-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

    
        <div className="flex-1 order-1 lg:order-2">
          <div className="mx-4 lg:mx-8 mb-4 lg:mb-0">
            <div>
              <p className="text-black text-xl lg:text-3xl font-semibold text-center lg:text-left">
                Car Financing
              </p>
              <p className="text-[#3600D1] text-lg lg:text-2xl font-semibold text-center lg:text-left mt-4">
                Dealer loans
              </p>
              <p className="text-gray-500 text-base lg:text-lg font-normal text-center lg:text-left mt-8">
                OneLot's working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
              </p>
            </div>
          </div>

   
          <div className="hidden lg:block lg:mx-8">
            <hr className="my-8 border-gray-300" />
            <div>
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  text={feature}
                  className={index === 1 ? 'my-4' : ''}
                />
              ))}
            </div>
            <hr className="my-8 border-gray-300" />
            <p className="text-gray-500 text-base lg:text-lg font-normal text-center lg:text-left">
              Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits.
            </p>
          </div>

          <div className="hidden lg:block">
            <Button href="/products/">
              <div className="text-base">View Loans -&gt;</div>
            </Button>
          </div>
        </div>
      </div>

   
      <div className="lg:hidden order-4 mx-4">
        <hr className="my-8 border-gray-300" />
        <div>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature}
              className={index === 1 ? 'my-4' : ''}
            />
          ))}
        </div>
        <hr className="my-8 border-gray-300" />
        <p className="text-gray-500 text-base lg:text-lg font-normal text-center lg:text-left">
          Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits.
        </p>
        <div className="flex justify-center">
          <Button href="/products/">
            View Loans -&gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarFinancingSection;