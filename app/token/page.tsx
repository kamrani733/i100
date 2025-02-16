import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function Token() {
  return (
    <>
      <Navbar />
      <div className="container pt-20 flex flex-col mt-10">
          <h1 className=" font-extrabold text-6xl ">Why i100 Token?</h1>
          <ul className="mt-8 text-lg text-white  ">
            <li>
              <strong>Decentralized Healthcare Economy:</strong> Take control of
              your medical data and treatment choices.
            </li>
            <li>
              <strong>Frictionless Payments:</strong> Use i100 Token for
              AI-driven health insights, consultations, and more.
            </li>
            <li>
              <strong>Privacy & Security:</strong> Blockchain ensures encrypted
              data and transparency.
            </li>
            <li>
              <strong>Global Accessibility:</strong> Borderless healthcare
              services, anywhere.
            </li>
          </ul>
      </div>
       <section className="container mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-white">
          Key Uses of i100 Token
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-muted p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">
              Personalized Medicine Services
            </h3>
            <p className="text-white mt-2">
              Pay for AI-powered treatment recommendations, DNA sequencing, and
              biomarker analysis.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">
              Exclusive AI Health Insights
            </h3>
            <p className="text-white mt-2">
              Unlock premium reports and real-time monitoring powered by AI.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">
              Data Monetization & Research
            </h3>
            <p className="text-white mt-2">
              Share anonymized health data securely and get rewarded.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">
              Marketplace & Digital Health Services
            </h3>
            <p className="text-white mt-2">
              Access a decentralized marketplace for healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-12 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Join the Future of AI-Driven Healthcare
        </h2>
        <p className="mt-4 text-lg text-white">
          Be part of a revolution where AI and blockchain deliver personalized,
          secure, and innovative healthcare solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-muted text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </button>
      </section>

      <Footer />
    </>
  );
}
