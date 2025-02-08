
import { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is OneLot?",
      answer:
        "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
    },
    {
      question: "What kind of financing does OneLot do?",
      answer:
        "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
    },
    {
      question: "Is OneLot a bank?",
      answer:
        "No, OneLot is not a traditional bank. We are a dedicated financial institution that understands the unique requirements of used car dealers and offers short-term collateralized lending solutions to address their working capital needs. OneLot Financing Corporation is a duly registered corporate entity and is regulated by the Securities and Exchange Commission (SEC).",
    },
    {
      question: "What is the eligibility criteria for availing a loan?",
      answer:
        "Any used car dealer located in Greater Metro Manila operating for more than a year can apply to OneLot.",
    },
    {
      question: "How are interest rates determined?",
      answer:
        "OneLot offers monthly interest rates starting at 1.8% which is applied for all your loan applications. OneLot utilizes daily accrual calculations on all loans to ensure our customers only pay the interest for the time the loan is outstanding.",
    },
  ];

  return (
    <div className="max-w-screen-2xl text-center mx-auto">
      <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 py-12">
        <p className="text-black text-2xl font-bold lg:text-4xl mb-8">
          Frequently Asked Questions
        </p>
        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-100 text-gray-500"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-start">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="mt-0.5 mr-2 text-xl"
                      height="1em"
                      width="1em"
                    >
                      <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                    </svg>
                  </div>
                  <p className="text-base lg:text-xl font-normal text-left">
                    {faq.question}
                  </p>
                </div>
                <div className="text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 text-gray-500">
                  <p className="text-base lg:text-lg font-normal text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
              <hr className="border-gray-300" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/faq"
            type="button"
            className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-[#3600D1] border border-transparent enabled:hover:bg-[#3600D1] focus:ring-0 focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
              <span className="lg:text-base">See all -&gt;</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
