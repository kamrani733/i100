"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black shadow-md">
      <nav className="container mx-auto flex h-16 items-center px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image alt="logo" src="/logo.svg" width={40} height={40} priority />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:ml-auto space-x-6">
          {["Copilot", "Token", "Whitepaper", "About Us"].map((item, index) => (
            <li key={index}>
              <a
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white font-medium hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="ml-auto md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <Image
            alt="menu"
            src="/assets/image/svg/menu.svg"
            width={32}
            height={32}
            priority
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {["Copilot", "Token", "Whitepaper", "About Us"].map((item, index) => (
            <li key={index}>
              <a
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white font-medium hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
