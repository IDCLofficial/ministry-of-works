import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import ProjectCard from "@/app/projects/ProjectCard";
import type { Project } from "@/app/projects/ProjectCard";

export default function Projects() {

  const projectsData: Project[] = [
    {
      title: "Construction of Owerri-Orlu Dual Carriageway",
      description:
        "Major expansion and resurfacing of the Owerri-Orlu road to ease traffic and boost economic activities across Imo West.",
      status: "active",
    },
    {
      title: "Urban Renewal and Drainage System in Owerri",
      description:
        "Implementation of modern drainage systems and rehabilitation of urban roads to prevent flooding in key areas of the capital.",
      status: "active",
    },
    {
      title: "Rehabilitation of Public Buildings and Schools",
      description:
        "Ongoing maintenance and structural upgrades of government-owned offices, hospitals, and public secondary schools across the state.",
      status: "active",
    },
    {
      title: "Imo Rural Roads Intervention Project",
      description:
        "Grading and asphalt-laying of over 250km of rural roads to improve access to farming communities and rural settlements.",
      status: "closed",
    },
  ];

  const imagePaths = [
    "/images/works3.png",
    "/images/works5.png",
    "/images/works6.png",
  ];

  return (
    <div>
      {/* Top Hero */}
      <TopHero
        ministryName="Driving Infrastructure Growth in Imo State"
        titleLabel="Projects"
      />

      {/* Project Card */}
      <ProjectCard projectlist={projectsData} images={imagePaths} />

      {/* CTA Section */}
      <CTASection
        heading="Partner With Us to Build a Better Imo"
        subtext="Join the Imo State Ministry of Works in transforming infrastructure, connecting communities, and accelerating economic growth."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
