import Image from "next/image";

export default function Navabr() {
  return (
    <header className="z-30 h-16 font-secondary fixed w-full  bg-black">
      <nav className="container relative flex w-full items-center">
        {/* Logo */}
        <a className="z-30 mr-4 flex h-16 items-center" href="/">
          <Image alt="logo" src="/logo.svg" width={40} height={40} priority />
        </a>

        {/* Navigation Menu */}
        <ul className="absolute left-0 top-full z-20 flex w-full flex-col items-center overflow-hidden bg-black pt-4 md:relative md:w-auto md:flex-row md:bg-transparent md:pt-0">
          <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
            <a
              className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
              aria-label="AI"
              href="/copilot"
            >
              Copilet
            </a>
          </li>

          <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
            <a
              className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
              aria-label="Docs"
              href="/token"
            >
              Token
            </a>
          </li>
          <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
            <a
              className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
              aria-label="Blog"
              href="/whitepaper "
            >
              Whitepaper 
            </a>
          </li>
     
          <li className="w-full text-center md:text-left">
            <a
              className="block w-full whitespace-nowrap px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
              aria-label="About Us"
              href="/about-us"
            >
              About Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="z-30 ml-auto flex h-8 w-8 items-center justify-center md:hidden"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Image
            alt="menu"
            src="/assets/image/svg/menu.svg"
            width={40}
            height={40}
            priority
          />
        </button>
      </nav>
    </header>
  );
}
