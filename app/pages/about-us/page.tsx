import Image from "next/image";
import Navabr from "../../components/navbar";
import Footer from "../../components/footer";
export default function AboutUs() {
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
      <Footer />
    </>
  );
}
