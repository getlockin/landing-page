import Image from "next/image"
import Appstore from "@/public/appstore.png"
import Googleplay from "@/public/playstore.png"

export default function DownloadButtons() {
    return (
        <div className="flex justify-center items-center space-x-4 mt-10">
            <button>
                <Image src={Appstore} alt="Appstore" />
            </button>
            <button>
                <Image src={Googleplay} alt="Googleplay" />
            </button>
        </div>
    )
}