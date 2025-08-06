import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServicesGrid from "./ServiceCard";

const services = [
  {
    title: "Road Construction & Rehabilitation",
    description: "Overseeing strategic road projects including the nearly completed Control Post Interchange Flyover in Owerri, rehabilitation of the Naze‑Nekede‑Ihiagwa‑Obinze corridor, and the Owerri–Elele 35 km highway awarded to Craneburg Construction.",
  },
  {
    title: "Bridge & Flyover Delivery",
    description: "Execution of multi-span bridges such as the ongoing Ihiagwa Road Bridge and flyover projects to enhance urban mobility and traffic decongestion.",
  },
  {
    title: "Dual Carriageway & Urban Renewal",
    description: "Completion of the dual carriageway between Orlu and Umuowa, paired with beautification and drainage upgrades under the Orlu urban renewal programme.",
  },
  {
    title: "Monitoring & Quality Assurance",
    description: "Strict adherence to engineering standards (BEME) in supervising contractors across all state‑led infrastructure projects.",
  },
  {
    title: "State‑Federal Collaboration",
    description: "Executing federal road projects in memoranda‑of‑understanding (MOU) with FG, such as Owerri–Epele rehabilitation, under state supervision.",
  },
  {
    title: "Infrastructure Planning & Asset Management",
    description: "Participation in asset consolidation mandates after 2025 budget approval, supporting long‑term monitoring through Ministry of Finance Incorporated (MOFIN).",
  },
  {
    title: "Public Engagement & Transparency",
    description: "Project site inspections led by Governor and Commissioner Ralph Nwosu, with community updates to ensure transparency.",
  },
  {
    title: "Budget & Capital Investment Allocation",
    description: "With N297 billion (42.8%) allocation in the 2025 state budget, the Ministry leads capital infrastructure development across all 27 LGAs.",
  },
];

export default function Services() {
  return (
    <div className="h-screen bg-white">
      <TopHero ministryName="Ministry of Works & Infrastructural Development" titleLabel="Our Services" />
      <ServicesGrid services={services} />
      <CTASection
        heading="Build Infrastructure Together"
        subtext="Partner with us to enhance connectivity, economic growth, and quality of life across Imo State."
        buttonLabel="Learn More"
        buttonHref="/contact-works"
      />
      <Footer />
    </div>
  )
}
