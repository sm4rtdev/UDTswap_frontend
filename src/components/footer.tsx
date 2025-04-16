'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks: string[] = ['Home', 'Swap', 'Future development', 'Contact'];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-cover bg-center text-white overflow-hidden rounded-t-[80px] border-t-4 border-lime-400">
      <div className="px-6 py-10 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo & Nav */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
            <div className="text-[#D0B7FF] text-lg font-semibold leading-tight">
              Universal Liquidity <br /> Protocol
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm mt-4 md:mt-0">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-lime-400 transition"
              >
                {link}
              </Link>
            ))}
          </nav>

        {/* Connect Button */}
        <div className="hidden md:block">
          <button className="bg-[#45A71C] text-black font-bold py-2 px-5 rounded-full text-sm shadow-lg border-4 border-[#B8F736] hover:bg-lime-300 duration-300 transition-all ease-in-out">
            CONNECT WALLET
          </button>
        </div>
      </div>

      {/* Follow + Icons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <p className="text-sm">Follow us</p>
        <div className="flex gap-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF className="bg-[#101010] p-2 rounded-full w-8 h-8 text-lime-400 hover:scale-110 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter (X)">
            <FaXTwitter className="bg-[#101010] p-2 rounded-full w-8 h-8 text-lime-400 hover:scale-110 transition" />
          </Link>
          <Link href="https://t.me" target="_blank" aria-label="Telegram">
            <FaTelegramPlane className="bg-[#101010] p-2 rounded-full w-8 h-8 text-lime-400 hover:scale-110 transition" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-300 bg-gradient-to-r from-[#9F89DC] to-[#4C4E70] py-2">
        Copyright © Universal Liquidity Protocol
      </div>
    </footer>
  );
};

export default Footer;
