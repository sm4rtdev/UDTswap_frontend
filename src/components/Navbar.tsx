'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Swap', 'Future development', 'Contact'];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="w-full px-15 py-4 flex items-center justify-between text-white relative z-50">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Universal Liquidity Protocol"
          width={60}
          height={60}
        />
        <span className="font-normal text-[20px] text-[#D0B7FF] leading-tight">
          Universal Liquidity <br /> Protocol
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-[16px]">
        {navLinks.map((item) => (
          <Link
          key={item}
          href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
          className="relative hover:text-[#adff2f] transition"
        >
            {item}
            {item === 'Home' && (
              <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-lime-400 rounded" />
            )}
          </Link>
        ))}
      </div>

      {/* Wallet + Hamburger */}
      <div className="flex items-center gap-4 md:gap-0">
        <button className="hidden md:block hover:bg-lime-300 bg-[#45A71C] text-black font-bold py-2 px-5 rounded-full text-sm shadow-lg border-4 border-[#B8F736] duration-300 transition-all ease-in-out">
          CONNECT WALLET
        </button>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Overlay + Slide-in Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 w-[280px] h-full bg-[#1c1c1e] shadow-lg p-6 z-50 flex flex-col gap-6 animate-slide-in-right">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <FiX size={24} />
              </button>
            </div>

            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white text-base hover:text-[#adff2f]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            <button
              onClick={() => setIsOpen(false)}
              className="bg-lime-400 text-black font-bold py-2 px-5 rounded-full text-sm shadow mt-4"
            >
              CONNECT WALLET
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
