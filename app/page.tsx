import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="z-30 h-16 font-secondary bg-black">
        <nav className="container relative flex w-full items-center">
          {/* Logo */}
          <a className="z-30 mr-4 flex h-16 items-center" href="/">
            <Image
              alt="310.ai Logo"
              src="/logo.svg"
              width={40}
              height={40}
              priority
              style={{ opacity: 1 }}
            />
          </a>

          {/* Navigation Menu */}
          <ul className="absolute left-0 top-full z-20 flex w-full flex-col items-center overflow-hidden bg-black pt-4 md:relative md:w-auto md:flex-row md:bg-transparent md:pt-0">
            <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
              <a
                className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
                aria-label="AI"
                href="/ai"
              >
                AI
              </a>
            </li>
       
            <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
              <a
                className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
                aria-label="Docs"
                href="/docs"
              >
                Docs
              </a>
            </li>
            <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
              <a
                className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
                aria-label="Blog"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li className="w-full text-center border-b border-b-muted md:border-b-0 md:text-left">
              <a
                className="block w-full px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-300 md:px-3 md:py-4 md:hover:bg-transparent"
                aria-label="Careers"
                href="/careers"
              >
                Careers
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col items-center justify-between py-10 md:flex-row">
        {/* Left Column (Text Content) */}
        <div className="flex w-full flex-col items-center justify-start py-4 md:items-start md:w-1/2">
          <h1 className=" font-extrabold text-6xl">i100 + AI</h1>
          <h2 className="mt-6 font-secondary text-xl font-medium md:mt-3 lg:text-2xl">
            Nature didn’t have time, we have GPUs
          </h2>
          <p className="mt-10 max-w-md text-lg text-gray-400 md:text-base">
            At 310 AI, our aim is to build the generative AI engine that will
            make programmable biology a reality. This innovation will transform
            how biology is studied and used, making it more accessible and
            impactful for solving real-world problems.
          </p>
        </div>

        {/* Right Column (Canvas Visualization) */}
        <div className="relative flex w-full max-h-[500px] md:w-1/2">
        <Image
            alt="Copilot: AI Chat for Designer Bio"
            src="/assets/image/AI-Genetic-Analysis.png"
            width={522.5}
            height={281.66}
            priority
            className="w-full rounded-lg"
          />
         </div>
      </div>

      {/* New Section */}
      <div className="bg-[#101114]">
      <section className="container   mt-10 grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-y-20">
        {/* Left Column (Molecule Programming) */}
        <div className="flex flex-col items-start">
          <h2 className="max-w-md font-secondary text-2xl font-medium md:text-4xl">
            Molecule Programming Foundational AI Model
          </h2>
          <p className="my-2.5 text-gray-500">
            The most important task AI can solve in biology today is to take a
            description of a protein function and turn it into a sequence. The
            310 AI molecular programming model (MP) supports pioneering
            text-to-protein generation. Compressing 4B years of nature to create
            a new reality.
          </p>
          <a
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2"
            href="/ai"
          >
            AI
          </a>
        </div>

        {/* Right Column (Video and Image) */}
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
            }}
            className="data-radix-aspect-ratio-wrapper"
          >
            <video
              style={{
                position: "absolute",
                inset: 0,
                opacity: 1,
              }}
              playsInline
              autoPlay
              loop
              muted
              className="rounded-lg"
              width="1280"
              height="720"
            >
              <source
                src="https://main-website-310.s3.us-west-2.amazonaws.com/assets/310-MP-Animation-480.mp4"
                type="video/mp4"
                media="(max-width: 640px)"
              />
              <source
                src="https://main-website-310.s3.us-west-2.amazonaws.com/assets/310-MP-Animation-720.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* Copilot Section */}
        <div className="order-2 md:order-none">
          <Image
            alt="Copilot: AI Chat for Designer Bio"
            src="/assets/image/Copilot-Cover.png"
            width={522.5}
            height={281.66}
            priority
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex min-h-[80%] flex-col items-start">
          <h2 className="font-secondary text-2xl font-medium md:max-w-full md:text-4xl">
            Copilot: AI Chat for Designer Bio
          </h2>
          <p className="my-2.5 text-gray-500">
            Design biomolecules seamlessly in a web-based chat platform. Access
            state-of-the-art open source models as well as proprietary MP. Search
            databases, visualize, and orchestrate pipelines all in one place.
          </p>
          <a
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2 mt-auto"
            href="/copilot-services"
          >
            Copilot
          </a>
        </div>
      </section>
      <footer className="border-t border-black bg-[#101010] text-sm text-gray-500 py-10">
        <div className="container flex h-full flex-col items-center justify-between gap-y-5 py-5 md:flex-row md:py-0">
          <p className="text-muted-foreground">
            Copyright © 2025 310.ai. All rights reserved.
          </p>
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-x-3">
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/310-ai"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    style={{ height: "20px" }}
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </li>
              {/* YouTube */}
              <li>
                <a
                  href="https://www.youtube.com/@310ai"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    style={{ height: "20px" }}
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a
                  href="http://instagram.com/310.ai__"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ height: "20px" }}
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
              {/* X (formerly Twitter) */}
              <li>
                <a
                  href="https://x.com/310ai__"
                  aria-label="X (formerly Twitter)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    style={{ height: "20px" }}
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      </div>
    </>
  );
}