import Image from "next/image"
import hero from "../assets/images/hero.webp"
const VechilesGrid = () => {
    return (
        <div className="relative mb-12">
            <Image
                src={hero}
                alt="Car dealership management and financing solutions illustration"
                className="object-contain mx-auto w-[609px] lg:w-[888px] xl:w-[1080px] h-auto"
                width="1080" 
                height="653"
                decoding="async"
                style={{ color: "transparent" }}
            />
        </div>
    )
}

export default VechilesGrid;

