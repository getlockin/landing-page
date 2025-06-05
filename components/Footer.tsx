import Image from 'next/image';
import Link from 'next/link';
import LockinLogo from '@/public/lockin_logo.png'; // Assuming the path is correct relative to 'public'

// Placeholder icon - replace with actual SVG or an icon library
const TwitterIcon = () => <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-black text-xs font-bold">X</span>;

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-gray-400 py-12 px-6 md:px-16 rounded-t-[30px] md:rounded-t-[40px]">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Logo, Nav, Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-8">
          {/* Logo */}
          <div className="w-24 h-auto">
            <Image src={LockinLogo} alt="Lockin Logo" width={96} height={27} />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#faqs" className="hover:text-white transition-colors">FAQs</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Social Media Icon */}
          <div className="flex gap-4 items-center">
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity"><TwitterIcon /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom section: Copyright, Email, Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-y-4 md:gap-x-4">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Lockin Pvt. Ltd. All rights reserved.</p>
          <a href="mailto:hellolockin@gmail.com" className="hover:text-white transition-colors text-center md:text-left">hellolockin@gmail.com</a>
          <div className="flex gap-x-6 gap-y-2 justify-center md:justify-end">
            <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
