

import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

const departmentsData = [
  {
    name: "Road Construction & Dualisation Department",
    image: "/images/staff2.png",
    description:
      "Oversees major road projects such as Owerri–Orlu, Owerri–Okigwe, and Owerri–Elele expressways; focuses on dualisation and asphalt overlay.",
  },
  {
    name: "Bridge & Flyover Infrastructure Department",
    image: "/images/flyover.png",
    description:
      "Leads engineering and construction of flyovers and long-span bridges including the Control Post Interchange and Ihiagwa Bridge.",
  },
  {
    name: "Urban Renewal & Drainage Systems Department",
    image: "/images/works6.png",
    description:
      "Handles urban street rehabilitation, pedestrian infrastructure, and drainage systems within municipal areas to prevent flooding.",
  },
  {
    name: "Quality Assurance & BEME Compliance Unit",
    image: "/images/staff1.png",
    description:
      "Ensures strict compliance with engineering standards and Bills of Engineering Measurement & Evaluation across all sites.",
  },
  {
    name: "Federal Partnership & Asset Management Department",
    image: "/images/monsm-news2.webp",
    description:
      "Coordinates joint state–federal infrastructure projects, manages state-owned assets, and oversees MOUs with national contractors.",
  },
];

export default function UnitsPage() {
  return (
    <div className="bg-white">
      <TopHero
        ministryName="Ministry of Works & Infrastructure Development"
        titleLabel="Departments"
      />
      
      <UnitsTabsSection departments={departmentsData} />

      <CTASection
        heading="Partner with Us in Building a Better Imo"
        subtext="Support our mission to modernize infrastructure, build resilient roads, and ensure lasting structural assets for generations."
        buttonLabel="Contact the Ministry"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
