import Image, { StaticImageData } from "next/image";

interface FeaturesCardProps {
    subheading: string;
    paragraph: string;
    image: StaticImageData; // Expecting a statically imported image
    altText?: string; // Optional alt text for the image
}

export default function FeaturesCard({
    subheading,
    paragraph,
    image,
    altText,
}: FeaturesCardProps) {
    return (
        <div className="flex flex-col items-center bg-[#181818] p-6 rounded-[20px] w-[300px] h-[430px] shadow-lg text-left">
            {/* Image Container - acts as a frame */}
            <div className="bg-[#262626] rounded-xl w-full p-1">
                <Image
                    src={image}
                    alt={altText || subheading} // Use provided altText or fallback to subheading
                    layout="responsive"
                    width={image.width} // Use intrinsic width from StaticImageData for aspect ratio
                    height={image.height} // Use intrinsic height from StaticImageData for aspect ratio
                    className="rounded-lg" // Image itself is rounded
                />
            </div>

            {/* Text Container */}
            <div className="mt-6 w-full">
                <h3 className="text-[18px] font-semibold text-[#FDFDFD] mb-3">
                    {subheading}
                </h3>
                <p className=" text-[#BFBDC0] leading-relaxed">
                    {paragraph}
                </p>
            </div>
        </div>
    );
}