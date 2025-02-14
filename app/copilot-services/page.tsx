import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function copilot() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-between py-10 md:flex-row">
        <div className="flex w-full flex-col items-center justify-start py-4 md:items-start md:w-1/2">
          <h1 className=" font-extrabold text-6xl">i100 Copilot</h1>
          <h2 className="mt-6 font-secondary text-xl font-medium md:mt-3 lg:text-2xl">
            Your Personal AI Health Assistant
          </h2>
          <p className="mt-10 max-w-md text-lg text-gray-400 md:text-base">
            i100 Copilot is an intelligent AI-powered health assistant designed
            to help individuals manage their healthcare needs effortlessly.
            Whether you need guidance on medications, real-time health tracking,
            or personalized treatment recommendations, Copilot is your go-to
            digital companion.
          </p>
          <a
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-10 rounded-md px-8 text-lg mt-2 w-52"
            title="i100 Copilot"
          >
            Try Now
          </a>
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
      <section className="bg-white py-16 text-black">
        <div className="container">
          <h2 className="mb-8 font-secondary text-4xl font-medium">Key Services of i100 Copilot:</h2>
        </div>
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href="/docs/folding"
            className="flex items-center rounded-xl bg-[#F4F4F4] p-6"
          >
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-medium">Personalized Medication Guidance</h3>
              <p className="line-clamp-3 text-sm">
              Get AI-driven insights on the best treatment options based on your genetic and biochemical data.

              </p>
            </div>
          </a>
          <a
            href="/docs/function"
            className="flex items-center rounded-xl bg-[#F4F4F4] p-6"
          >
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-medium">Real-Time Health Monitoring</h3>
              <p className="line-clamp-3 text-sm">
              Track vital health parameters through integrations with wearables and smart health devices.

              </p>
            </div>
          </a>
          <a
            href="/docs/visualization"
            className="flex items-center rounded-xl bg-[#F4F4F4] p-6"
          >
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-medium">Symptom Analysis & Recommendations</h3>
              <p className="line-clamp-3 text-sm">
              AI evaluates your symptoms and provides suggestions for medical consultations or home care.
              </p>
            </div>
          </a>
          <a
            href="/docs/design"
            className="flex items-center rounded-xl bg-[#F4F4F4] p-6"
          >
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-medium">DNA & Biomarker Insights</h3>
              <p className="line-clamp-3 text-sm">
              Receive detailed reports on how your genetic profile affects drug efficacy and potential side effects.

              </p>
            </div>
          </a>
          <a
            href="/docs/docking"
            className="flex items-center rounded-xl bg-[#F4F4F4] p-6"
          >
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-medium">Medication Interaction Check</h3>
              <p className="line-clamp-3 text-sm">
              Ensure safe medication usage by detecting potential adverse interactions between prescriptions.

              </p>
            </div>
          </a>
          <a
            href="/docs/docking"
            className="flex items-center rounded-xl bg-[#F4F4F4] p-6"
          >
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-medium">Telehealth & Expert Consultation</h3>
              <p className="line-clamp-3 text-sm">
              Connect with medical professionals for in-depth discussions and AI-assisted health planning.

              </p>
            </div>
          </a>
        </div>
      </section>
      <div className="light bg-[#F4F4F4] py-16 text-black">
        <section className="container flex flex-col items-start gap-y-4">
          <h2 className="mb-8 font-secondary text-4xl font-medium">
            Tutorials
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <a href="https://310.ai/copilot/e10dd124-ba9e-4232-96fd-a368875e8ecf">
              <article>
                <img
                  src="/assets/image/01-ProteinMPNN.png"
                  loading="lazy"
                  width="1024"
                  height="576"
                />
              </article>
            </a>
            <a href="https://310.ai/copilot/5f660f1d-0d3c-4071-8cd2-cb913a3916cb">
              <article>
                <img
                  src="/assets/image/02.png"
                  loading="lazy"
                  width="1024"
                  height="576"
                />
              </article>
            </a>
            <a href="https://310.ai/copilot/7ecc1964-c68d-479a-8ca1-a0c38359efe1">
              <article>
                <img
                  src="/assets/image/03.png"
                  loading="lazy"
                  width="1024"
                  height="576"
                />
              </article>
            </a>
          </div>
          <p className="mt-2">
            <a
              href="https://www.youtube.com/@310ai"
              target="_blank"
              className="text-accent underline"
              title="310 Youtube channel"
              rel="noopener noreferrer"
            >
              310 Youtube channel
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
