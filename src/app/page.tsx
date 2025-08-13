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
  bio="Hon. Barr. Ralph Nwosu holds a Masters Degree in law and was called to the Nigerian Bar in 1988. He started his law practice in the law firm of AINA, NWOSU and Co as a Partner.He  later became a principal partner in the law firm of Ralph Nwosu and Co. He broke his legal Practice in 2007 when he was appointed a commissioner in Imo State. Until the end of the administration in 2011, he operated in Ministries of Public Utilities and Rural Development and Ministry of Works, Housing and Transport  twice respectively.

He worked as a Senior legislative Aide and Head of operations in the office of Distinguished Senator Hope Uzodimma from 2011 to 2019 at the National Assembly. Prior to that assignment, he was a consultant to the Senate Committee on Stated Oil fields in 2005 and assisted in the passing into law of local content in the oil industry in Nigeria.
"
  details="Hon. Barr. Ralph Nwosu served as Commissioner for Works in the  first administration of Governor Hope Uzodimma from 2020 to 2024 and was  reappointed as Commissioner for Works and Infrastructural Development in the present administration. The achievements of the administration in the area of road infrastructure has his unmistakable presence and panache.

For the records,  Several kilometres of roads have been completed and commissioned under his supervision as Commissioner for Works and Infrastructural Development. It is instructive to note that Hon. Barr. Ralph Nwosu has served as Commissioner for Works in Imo State, four(4) consecutive times.This can only be attributed to  his undiluted commitment to duty, cognitive experience, administrative know-how and passion for service delivery in that very sensitive department. 

He is a silent philanthropist of immense dimension and holds the traditional title of EZINWA MGBIDI in Oru West LGA of Imo state.  He is married with children and a Christian of Catholic fold."
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
