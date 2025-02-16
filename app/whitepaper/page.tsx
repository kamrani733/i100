"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const sections = [
  { id: "purpose", title: "1.1 Purpose of the Token" },
  { id: "vision-mission", title: "1.2 Vision and Mission" },
  { id: "overview", title: "2.1 Overview of the Project" },
  { id: "market-opportunity", title: "2.2 Market Opportunity" },
  { id: "problem-statement", title: "2.3 Problem Statement" },
  { id: "concept", title: "3.1 Project Concept" },
  { id: "key-features", title: "3.2 Key Features of the Token" },
  { id: "competitive-advantages", title: "3.3 Competitive Advantages" },
  { id: "utility", title: "4.1 Token Utility" },
  { id: "supply-distribution", title: "4.2 Total Supply and Distribution" },
  { id: "allocation-details", title: "4.3 Allocation Details" },
  { id: "release-schedule", title: "4.4 Token Release Schedule" },
  { id: "platform", title: "5.1 Blockchain Platform" },
  { id: "smart-contract", title: "5.2 Smart Contract Details" },
  { id: "security-audit", title: "5.3 Security and Audit Information" },
  { id: "use-cases", title: "6.1 Real-World Applications of the Token" },
  { id: "ecosystem-participants", title: "6.2 Ecosystem Participants" },
  { id: "partnerships", title: "6.3 Partnerships and Collaborations" },
  { id: "short-term", title: "7.1 Short-Term Milestones" },
  { id: "long-term", title: "7.2 Long-Term Vision" },
  { id: "core-team", title: "8.1 Core Team Members" },
  { id: "advisors", title: "8.2 Advisors and Partners" },
  { id: "funding", title: "9.1 Pre-Sale and Public Sale Details" },
  { id: "fund-allocation", title: "9.2 Fund Allocation" },
  { id: "legal-compliance", title: "9.3 Legal and Regulatory Compliance" },
  { id: "marketing", title: "10.1 Marketing and Growth Plans" },
  { id: "community", title: "10.2 Community Building and Engagement" },
  { id: "listing", title: "10.3 Listing on Exchanges" },
];

export default function Whitepaper() {
  const handleScrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <div className="flex pt-20 min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/5">
          <aside className=" bg-muted text-white p-6 border-r shadow-md h-screen fixed top-16 left-0 bottom-16 overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4  ">📄 White Paper</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className="p-3 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition"
                  onClick={() => handleScrollToSection(section.id)}
                >
                  {section.title}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <main className="flex-1 w-4/5 ml-1/4 p-10 bg-white">
          <div
            id="purpose"
            className="mb-8 p-6 ml-10 bg-[#F4F4F4] text-muted   rounded-lg transition transform hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Vision and Mission</h2>
            <p className="text-justify">
              1.1 Purpose of the Token The i100 Token (i100) serves as the core
              utility token within the i100 ecosystem, enabling users to access
              a wide range of services and features offered by i100 Copilot, the
              AI-powered personal health assistant. This token facilitates
              seamless transactions for personalized healthcare solutions,
              including medication guidance, symptom analysis, real-time health
              tracking, expert consultations, and more. By using the i100 Token,
              users can unlock premium services, access exclusive health
              insights, and engage with the ecosystem’s advanced AI features,
              ensuring a comprehensive, user-centric healthcare experience.
            </p>
          </div>
          <div
            id="vision-mission"
            className="mb-8 p-6 ml-10 bg-[#F4F4F4] text-muted   rounded-lg transition transform hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="text-justify">
              Our vision is to empower individuals to take control of their
              health through personalized, AI-driven insights and services. We
              aim to revolutionize healthcare by leveraging cutting-edge AI
              technology to provide real-time, data-driven guidance that
              improves health outcomes, minimizes risks, and enhances quality of
              life.
            </p>

            <h2 className="text-xl mt-5 font-bold">Mission</h2>
            <p className="text-justify">
              The mission of i100 Copilot is to become the most trusted,
              accessible, and intelligent digital health assistant. By
              integrating AI with personalized healthcare data, wearable
              devices, and expert consultations, i100 Copilot strives to help
              individuals make informed health decisions, optimize their
              well-being, and stay proactive in managing their health. Through
              the i100 Token, we aim to create a robust ecosystem that
              incentivizes healthy living while providing users with a seamless,
              secure, and rewarding healthcare experience.
            </p>
          </div>
          <div
            id="overview"
            className="mb-8 p-6 ml-10 bg-[#F4F4F4] text-muted   rounded-lg transition transform hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold">Overview of the Project</h2>
            <p className="text-justify">
              i100 Copilot is a revolutionary AI-powered personal health
              assistant that combines cutting-edge artificial intelligence with
              advanced healthcare insights to offer a seamless, personalized
              healthcare experience. The platform leverages individual genetic
              and biochemical data, wearables, and smart health devices to
              provide real-time health monitoring, medication guidance, symptom
              analysis, and telehealth services. i100 Copilot aims to become the
              ultimate digital companion for managing personal health,
              empowering users to take control of their healthcare journey
              through customized recommendations and expert consultations. The
              i100 Token will serve as the foundation of this ecosystem,
              enabling secure, efficient transactions and incentivizing healthy
              living.
            </p>
          </div>
          <div
            id="market-opportunity"
            className="mb-8 p-6 ml-10 bg-[#F4F4F4] text-muted   rounded-lg transition transform hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold"> Market Opportunity</h2>
            <p className="text-justify">
              The global healthcare industry is undergoing a transformation with
              the rise of AI technologies and the growing demand for
              personalized, preventative, and accessible healthcare solutions.
              With the increasing adoption of wearable health devices,
              telemedicine, and precision medicine, the market for AI-powered
              health assistants is expanding rapidly. i100 Copilot positions
              itself at the intersection of these trends, offering a
              comprehensive platform that integrates AI-driven insights with
              real-time health data to meet the needs of health-conscious
              individuals. The i100 Token will not only enable users to unlock
              premium features but also foster a new economy within the health
              and wellness sector, offering significant growth potential in a
              fast-evolving market.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
