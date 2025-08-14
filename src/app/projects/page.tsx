import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/app/projects/Projects";

export default function Projects() {
    return (
        <div>
            {/* top hero */}
            <TopHero ministryName="Transforming Imo State" titleLabel="Projects" />
          
            {/* SkillUp Project */}
            <OngoingProjects />
            {/* Digital section */}
            <CTASection
        heading="Support our mission to build lasting infrastructure for Imo State"
        buttonLabel="View Current Projects"
        buttonHref="/projects"
      />

      {/* Footer */}
      <Footer />

        </div>
    )
}