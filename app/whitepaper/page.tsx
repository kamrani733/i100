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
            <h2 className="text-xl font-semibold mb-4  ">
              📄 White Paper
            </h2>
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
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="mb-12 p-6 ml-12 bg-[#F4F4F4] text-muted   rounded-lg transition transform hover:scale-[1.02]"
            >
              <h2 className="text-3xl font-bold text-muted ">
                {section.title}
              </h2>
              <p className="mt-2">
                This section covers the {section.title.toLowerCase()} in detail.
                Add more content here...
              </p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
