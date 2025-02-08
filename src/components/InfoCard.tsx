interface InfoCardProps {
  title: string;
  subtitle: string;
  description: string;
  subtitleColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, description, subtitleColor = "#3600D1" }) => {
    return (
      <div
        data-testid="flowbite-card"
        className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-lg col-span-1 mx-auto lg:ml-0 hover:bg-white"
      >
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <p className="text-black text-lg lg:text-2xl font-semibold tracking-tight">
            {title}
          </p>
          <p className={`text-base lg:text-xl font-semibold tracking-tight ${subtitleColor}`}>
            {subtitle}
          </p>
          <p className="text-gray-500 text-base font-normal lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default InfoCard;
  