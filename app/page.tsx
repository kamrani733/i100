import Image from "next/image";
import Navabr from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Navabr />
      <div className="container mx-auto flex flex-col items-center justify-between py-10 md:flex-row">
        <div className="flex w-full flex-col items-center justify-start py-4 md:items-start md:w-1/2">
          <h1 className=" font-extrabold text-6xl">i100 + AI</h1>
          <h2 className="mt-6 font-secondary text-xl font-medium md:mt-3 lg:text-2xl">
            The AI Engine for Personalized Medicine
          </h2>
          <p className="mt-10 max-w-md text-lg text-gray-400 md:text-base">
            At i100, we are redefining drug development with generative AI,
            making medicine truly personal. By analyzing DNA, biomarkers, and
            health data, we accelerate the creation of individualized
            therapies—100% tailored to your body.
          </p>
        </div>

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

      <div className="bg-[#101114]">
        <section className="container   mt-10 grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-y-20">
          <div className="flex flex-col items-start">
            <h2 className="max-w-md font-secondary text-2xl font-medium md:text-4xl">
              AI-Driven Molecular Programming{" "}
            </h2>
            <p className="my-2.5 text-gray-500">
              The most critical challenge in medicine today is transforming
              biological data into optimized treatments. Our AI models decode
              genetic sequences and biochemical interactions to generate
              precise, effective drug formulations—turning decades of research
              into real-time innovation.
            </p>
            <a
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2"
              href="/ai"
            >
              AI
            </a>
          </div>

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
              i100 Token: Powering the Future of Medicine
            </h2>
            <ul>
              <li>
                Seamless Payments – Use i100 Token to access cutting-edge
                healthcare services, from DNA analysis to AI-driven drug
                development and expert consultations.
              </li>
              <li>
                Exclusive Access & Rewards – Unlock premium AI-driven insights,
                access personalized treatments, and earn rewards within the i100
                ecosystem.
              </li>
              <li>
                Data Empowerment – Securely share anonymized health data and
                contribute to groundbreaking medical advancements while earning
                token incentives.
              </li>
              <li>
                Marketplace Integration – Trade and utilize i100 Tokens within a
                decentralized healthcare marketplace, revolutionizing how
                medicine is accessed and personalized.
              </li>
            </ul>
            <a
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2 mt-auto"
              href="/copilot-services"
            >
              Copilot
            </a>
          </div>

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
              Copilot: AI Chat for Personalized Health
            </h2>
            <p className="my-2.5 text-gray-500">
              Your digital health assistant, powered by state-of-the-art AI.
              Copilot helps you navigate medication choices, track health
              insights, and personalize treatment in an intuitive chat-based
              interface.
            </p>
            <a
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2 mt-auto"
              href="/copilot-services"
            >
              Copilot
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
