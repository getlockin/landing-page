import Image from "next/image";
import Link from 'next/link';
import logo from "@/public/lockin_logo.png"

export default function Appbar() {
    return (
        <div className="flex justify-between items-center px-6 sm:px-16 py-5 relative z-20 bg-black">
            <div>
                <Image src={logo} alt="lockin logo" width={100} />
            </div>
            <div className="flex items-center space-x-12">
                <ul className="flex space-x-8 text-[#ECECEE]">
                    <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
                    <li><Link href="#faqs" className="hover:text-gray-300">FAQs</Link></li>
                    <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
                <div>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 ml-8">
                        <span>Get Started</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    )
}