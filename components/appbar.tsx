import Image from "next/image"
import logo from "@/public/lockin_logo.png"

export default function Appbar() {
    return (
        <div className="flex justify-between items-center px-6">
            <div>
                <Image src={logo} alt="lockin logo" width={100} />
            </div>
            <div className="flex items-center space-x-12">
                <ul className="flex space-x-8 text-[#ECECEE] ">
                    <li><a href="/features" className="hover:text-gray-300">Features</a></li>
                    <li><a href="/faqs" className="hover:text-gray-300">FAQs</a></li>
                    <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}