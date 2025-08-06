import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  const Events = [
    {
      date: "MARCH 6, 2025",
      location: "NWANGELE LGA, Imo State",
      title: "Eziama‑Abba‑Owerre‑Nkworji Road Commissioned",
      description:
        "Governor Hope Uzodinma officially commissioned the 7.6 km NDDC‑reconstructed Eziama‑Abba‑Owerre‑Nkworji Road, enhancing connectivity and boosting local development.",
      img: "/images/media1.png",
      details: `The 7.6‑kilometre rehabilitation of the Eziama‑Abba‑Owerre‑Nkworji corridor was completed under the Nigeria Delta Development Commission (NDDC). The reconstructed road aims to increase access to markets, support local economies, and advance rural infrastructure. It was formally handed over to the state government by NDDC officials in a commissioning ceremony presided over by Governor Uzodinma. Nwangele Local Government Area residents now enjoy improved mobility and safety on this vital route.`, 
      dateString: "2025-03-06T11:00:00",
    }
  ];
  
  return (
    <div className="bg-white">
<TopHero
  ministryName="Stay Up-to-Date With Our Activities"
  titleLabel="Events"
/>

<EventsListSection events={Events} />

<CTASection
  heading="Partner with Us in Transforming Imo's Infrastructure"
  subtext="Be part of our mission to build durable roads, enhance mobility, and drive economic growth across Imo State through sustainable infrastructure."
  buttonLabel="Contact Us"
  buttonHref="/contact-us"
/>
      <Footer />
    </div>
  );
}
