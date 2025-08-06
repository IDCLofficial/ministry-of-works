import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
      backgroundImages={["/images/works3.png","/images/works4.png", "/images/works2.png", "/images/works1.png"]}
  overlayText="Imo State Ministry of Works and Infrastructural Development"
  heading="Building Infrastructure. "
  subheading="Driving Development."
  description="Advancing Imo State through strategic infrastructure, sustainable roads, and efficient public works — for economic growth and citizen wellbeing."
/>

{/* About Mandate Section */}
<AboutMandateSection
  label="ABOUT US"
  title="Our Mandate —"
  subheading="Ministry of Works and Infrastructural Development"
  description="Welcome to the Imo State Ministry of Works and Infrastructural Development.
As the engine room of infrastructure development, our Ministry is tasked with planning, constructing, and maintaining roads, bridges, and public facilities across Imo State. We play a critical role in supporting commerce, connecting communities, and driving sustainable economic development.

Through professional excellence, technological innovation, and transparency, we are committed to delivering safe, durable, and people-focused infrastructure that supports Governor Hope Uzodinma’s vision for a prosperous Imo State."
  buttonText="Discover More"
  image1="/images/works1.png"
  image2="/images/works2.png"
/>

{/* Commissioner Section */}
<CommissionerSection
  imageSrc="/images/commissioner2.png"
  imageAlt="Hon. Barr. Ralph Nwosu, Commissioner for Works, Imo State"
  title="About The Commissioner"
  bio="Hon. Barr. Ralph Nwosu is the Commissioner for Works and Infrastructural Development in Imo State and a seasoned legal practitioner with decades of experience in public administration and infrastructure development. A native of Ehime Mbano Local Government Area, he has served in various strategic roles in both public and private sectors, earning a reputation for integrity, diligence, and technical foresight."

  details="As Commissioner, Hon. Nwosu is driving the transformation of Imo’s infrastructure landscape through the execution of high-impact road projects, urban renewal programs, and sustainable civil engineering initiatives. Under his leadership, the Ministry has championed quality control, timely project delivery, and citizen-centered planning.

He collaborates with contractors, engineers, local communities, and development partners to ensure that Imo’s infrastructure meets modern standards while fostering economic growth. His leadership continues to inspire a new era of transparency and performance-driven governance in public works."
/>

<div className="bg-white">
  {/* Skill Up Section */}
  <SkillUpSection />
  {/* Quick Links Section */}
  <QuickLinksSection />
  {/* Latest News Section */}
  <LatestNewsSection />
</div>

{/* Stats Section */}
<Stats />

{/* Featured Partners Section */}
<FeaturedPartners />

{/* CTASection */}
<CTASection
  heading="Partner with Us to Build a Better Imo State"
  subtext="Join our mission to connect communities, develop sustainable infrastructure, and drive economic growth across all LGAs."
  buttonLabel="Contact Us"
  buttonHref="/contact-us"
/>

      {/* Footer */}
      <Footer />
    </>
  );
}
