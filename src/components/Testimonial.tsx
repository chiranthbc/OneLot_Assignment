

import Image from 'next/image';
import { useState } from 'react';
import Avatar from "../assets/images/avatar.jpeg";

const testimonials = [
  {
    id: 1,
    text: "“OneLot helped me to replace my previous financier and buy more car loans with their dealer inventory loan solutions.”",
    avatar: Avatar,
    name: "Lourice Trading",
    location: "Quezon City",
  },
  {
    id: 2,
    text: "“OneLot was very supportive in providing a loan for the next car auction when you need funds fast.”",
    avatar: Avatar,
    name: "PMB",
    location: "Quezon City",
  },
  {
    id: 3,
    text: "“The service of OneLot is top-notch. They act fast and can provide dealers with the funds they need, when they need it.”",
    avatar: Avatar,
    name: "Mark Vergel de Dios",
    title: "Owner, MVD Auto Works",
  },
  {
    id: 4,
    text: "“OneLot's robust technology and appraisal system is providing a boost to used car dealers in NCR. They offer a new way for dealers to buy cars, increase their profits, and maximize returns from the money they put into their business.”",
    avatar: Avatar,
    name: "Felipe Estrella",
    title: "CFO, AC Industrials (Ayala)",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="text-center max-w-screen-2xl mx-auto">
      <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 py-12">
        <p className="text-black text-2xl font-bold lg:text-4xl">Testimonials</p>
        <div className="h-80 xl:h-96">
          <div className="relative h-full w-full" data-testid="carousel">
            <div className="flex h-full snap-mandatory overflow-hidden rounded-lg">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 transform cursor-grab snap-center transition-opacity duration-300 ${
                    index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
                
                    <div className="flex justify-center">
                      <Image
                        alt={testimonial.name}
                        className="rounded-full h-16 w-16 md:h-20 md:w-20"
                        src={testimonial.avatar}
                        width={80}
                        height={80}
                      />
                    </div>

                    <p className="text-gray-500 text-base lg:text-lg font-normal mt-4 px-6 md:px-12">
                      {testimonial.text}
                    </p>

    
                    <div className="mt-4">
                      <div className="text-lg font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location || testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-full flex items-center justify-center px-4">
              <button
                className="group"
                data-testid="carousel-left-control"
                type="button"
                aria-label="Previous slide"
                onClick={handlePrev}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="text-xl text-gray-500 hover:text-black"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-0 right-1/2 transform translate-x-full flex items-center justify-center px-4">
              <button
                className="group"
                data-testid="carousel-right-control"
                type="button"
                aria-label="Next slide"
                onClick={handleNext}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="text-xl text-gray-500 hover:text-black"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
