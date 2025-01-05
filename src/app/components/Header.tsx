'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-black w-full h-24 justify-between flex items-center px-6">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="font-bold text-3xl text-white">
            Artisy
          </Link>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5 text-white">
            <li className="hover:text-yellow-500">
              <Link href="/work">Work</Link>
            </li>
            <li className="h-6 w-[2px] bg-white"></li>
            <li className="hover:text-yellow-500">
              <Link href="/About">About</Link>
            </li>
            <li className="h-6 w-[2px] bg-white"></li>
            <li className="hover:text-yellow-500">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon for menu */}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-black text-white lg:hidden">
          <ul className="flex flex-col items-start gap-4 p-4">
            <li className="hover:text-yellow-500">
              <Link href="/work" onClick={() => setIsOpen(false)}>
                Work
              </Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="About" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/Contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
