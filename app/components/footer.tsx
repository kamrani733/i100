import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black bg-[#101010] text-sm text-gray-500 py-10">
      <div className="flex justify-bettwen container h-full ">
        <div className="">
          <h2 className="font-secondary mb-3 text-2xl font-medium md:max-w-full md:text-4xl">
            i100 - A New Era of Medicine
          </h2>
          <p className="font-secondary mb-3 font-medium md:max-w-full md:text-lg">
            With i100, the future of personalized healthcare is here. No more
            one-size-fits-all solutions—only precision, powered by AI.{" "}
          </p>
          <p className="font-secondary mb-3 font-medium md:max-w-full md:text-lg">
            i100 – AI-Generated, Individualized, Limitless.
          </p>
          <p className="font-secondary mb-3 font-medium md:max-w-full md:text-lg">
            Join us…
          </p>
        </div>
        <img alt="germany" src="/germany.png" className="w-[130px] h-[75px]" />
      </div>
      <div className="container mt-10 flex h-full flex-col items-center justify-between gap-y-5 py-5 md:flex-row md:py-0">
        <p className="text-muted-foreground">
          Copyright © 2025 i100.ai. All rights reserved.
        </p>
        <nav aria-label="Social media links">
          <ul className="flex items-center gap-x-3">
            <li>
              <a href="#" aria-label="LinkedIn">
                <Image
                  className=" fill-gray-500"
                  alt="discord"
                  src="/assets/image/svg/discord.svg"
                  width={26}
                  height={26}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <Image
                  className=" fill-gray-500"
                  alt="telegram"
                  src="/assets/image/svg/telegram.svg"
                  width={23}
                  height={23}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#" aria-label="X (formerly Twitter)">
                <Image
                  className=" fill-gray-500"
                  alt="twitter"
                  src="/assets/image/svg/twitter.svg"
                  width={26}
                  height={26}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  className=" fill-gray-500"
                  alt="instagram"
                  src="/assets/image/svg/instagram.svg"
                  width={26}
                  height={26}
                  priority
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
