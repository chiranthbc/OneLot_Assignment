import Image from 'next/image';

export default function StayConnected() {
  return (
    <div className="mx-5 sm:mx-14 md:mx-28 lg:mx-20 xl:mx-52 2xl:mx-80 my-12">
      <p className="text-black text-2xl font-bold lg:text-4xl">Stay Connected</p>
      <p className="text-gray-500 text-base lg:text-xl font-normal mt-8">
        Follow OneLot on Facebook and Instagram to stay up to date with our latest offers, updates, and new product features.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12">
        <a
          href="https://www.facebook.com/OneLotPH"
          type="button"
          className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg text-black border border-black mb-4 sm:mb-0 sm:mr-4 bg-white focus:ring-0 focus:ring-transparent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
            <div className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="w-6 h-6 hover:text-[#57009C]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
              <p className="font-medium ml-2 lg:text-base">Follow us on Facebook</p>
            </div>
          </span>
        </a>
        <a
          href="https://www.instagram.com/onelot.ph/"
          type="button"
          className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg text-black border border-black mb-4 sm:mb-0 sm:mr-4 bg-white focus:ring-0 focus:ring-transparent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
            <div className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6 hover:text-[#57009C]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <p className="font-medium ml-2 lg:text-base">Follow us on Instagram</p>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
}
