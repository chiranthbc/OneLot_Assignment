import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
}

const Card = ({ title, description, imgSrc, imgAlt, className = '' }: CardProps) => {
  return (
    <div
      data-testid="flowbite-card"
      className={`flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-64 lg:max-w-full h-72 xl:h-80 items-center [&>div]:!justify-start ${className}`}
    >
      <Image
        alt={imgAlt}
        loading="lazy"
        width={70}
        height={70}
        decoding="async"
        src={imgSrc}
        className="mt-6"
      />
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        <p className="text-black text-lg lg:text-2xl font-semibold tracking-tight">
          {title}
        </p>
        <p className="text-gray-500 text-base font-normal xl:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
