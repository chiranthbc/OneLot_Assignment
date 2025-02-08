import Image from "next/image";
import Sec from "../assets/images/sec-large.webp";

const RegulatoryInfo = () => {
  return (
    <div className="mb-12 text-center">
      <p className="text-base font-normal text-gray-500 lg:text-xl">
        Regulated by
      </p>
      <div className="relative mt-4 flex justify-center">
        <Image
          alt="Securities and Exchange Commission of the Philippines logo"
          src={Sec}
          width={250}
          height={155}
          className="w-[150px] h-auto object-contain lg:w-[200px] xl:w-[250px]"
          priority={false}
        />
      </div>
    </div>
  );
};

export default RegulatoryInfo;
