import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/app/about/ObjectivesSection";
import { StructuresSection } from "@/app/about/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/app/about/MissionVisionCard";
import TeamPage from "./Team";

// departments
const departments = {
  row1: [
    {
      title: "Department of Road and Bridge Construction",
      description:
        "Oversees planning, construction and rehabilitation of state roads, flyovers and structural bridges to enhance connectivity.",
    },
    {
      title: "Department of Infrastructure Maintenance",
      description:
        "Responsible for routine upkeep and surfacing of highways, street drainage, and ensuring structural integrity across the state.",
    },
    {
      title: "Department of Project Monitoring & Quality Control",
      description:
        "Monitors ongoing works such as the Control Post Flyover, inter‑connectivity roads and regional government house projects.",
    },
  ],
  row2: [
    {
      title: "Department of Urban Development & Transport Planning",
      description:
        "Coordinates road planning in urban centers including the EIICC area, Concorde Hotel corridor, and alignment with master plans.",
    },
    {
      title: "Department of Public Procurement & Contractor Relations",
      description:
        "Manages contractor engagements, tendering, PPP frameworks, and ensures adherence to budgeting and state procurement laws.",
    },
  ],
};

// team
const teamMembers = [
  {
    name: "Mr. Ralph Nwosu",
    role: "Commissioner",
    image: "/images/commisioner.jpg",
    bio: "Currently leading the commission, overseeing signature projects like the Control Post Flyover, dual carriage‑way expansions and road rehabilitation across Imo State." 
  },
  {
    name: "Engr. Felix Anayo Igwe",
    role: "Permanent Secretary",
    image: "/images/permsec.jpg",
    bio: "Leads administrative operations within the ministry and supports execution of policies aligned with the governor’s infrastructure vision."
  },
];

// objectives
const objectives = [
  {
    title: "Transformative Road Infrastructure",
    description:
      "Expand and rehabilitate strategic road networks—including Naze‑Nkede‑Orlu road, flyover projects and inter‑connectivity roads across senatorial zones.",
  },
  {
    title: "Durability & Maintenance Culture",
    description:
      "Ensure long-term value through systematic maintenance of existing highways and drainage infrastructure.",
  },
  {
    title: "Project Oversight & Accountability",
    description:
      "Provide rigorous monitoring of ongoing infrastructure to deliver quality and speed under the 3R administration model.",
  },
  {
    title: "Urban Planning Integration",
    description:
      "Align road construction with urban master‑plan corridors, government complex zones, and industrial layouts for enhanced development.",
  },
  {
    title: "Public‑Private Partnership Promotion",
    description:
      "Leverage PPP models for major projects, fostering transparency and timely delivery under fiscal allocations.",
  },
  {
    title: "Budget‑Driven Execution",
    description:
      "Efficiently deploy capital allocation of ₦297 billion (≈ 42.8% of 2025 budget) for maximum infrastructural impact." 
  },
];

const coreValues = [
  "Integrity",
  "Accountability",
  "Quality",
  "Efficiency",
  "Transparency",
  "Service‑Focus",
];

export default function AboutUs() {
  return (
    <div className="h-screen bg-white">
      <TopHero
        ministryName="Ministry of Works & Infrastructural Development"
        titleLabel="About Us"
      />

      <SectionHero
        aboutText={`The Ministry of Works & Infrastructural Development in Imo State champion’s expansive road and infrastructure development, positioning the state as a hub for connectivity and investment.\n
With a ₦297 billion allocation in the 2025 budget (42.8% of capital expenditure), major projects include the Control Post Interchange Flyover, Naze‑Nkede‑Iheagwa‑Obinze road, regional government houses, and inter‑connectivity corridors under the 3R administration’s vision.\n
Through close monitoring, PPP engagement, and integrated urban planning, the ministry ensures lasting infrastructure that fuels economic growth in Owerri and beyond.`}
        imgSrc="/images/works1.png"
        altText="Imo State Ministry of Works"
      />

      <MissionVisionCard
        ministryName="Ministry of Works & Infrastructural Development"
        state="Imo State"
        mission="To deliver safe, sustainable and high‑quality infrastructure across Imo State, enhancing connectivity, economic growth, and quality of life through transparent planning and execution."
        vision="An Imo State with world‑class roads, bridges and urban infrastructure that support industrial and social development for all citizens."
      />

      <TeamPage teamMembers={teamMembers} />

      <ObjectivesSection
        objectives={objectives}
        coreValues={coreValues}
        ministryName="Ministry of Works & Infrastructural Development"
      />

      <StructuresSection
        imgSrc="/images/building.png"
        description="The Imo State Ministry of Works and Infrastructural Development is tasked with the design, construction, and maintenance of roads, bridges, and public structures. It drives infrastructural growth to enhance connectivity, economic development, and the overall quality of life in the state."
        departments={departments}
      />

      <CTASection
        heading="Support our mission to build lasting infrastructure for Imo State"
        buttonLabel="View Current Projects"
        buttonHref="/projects"
      />

      <Footer />
    </div>
  );
}
