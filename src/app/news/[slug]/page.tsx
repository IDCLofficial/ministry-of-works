import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";
import Link from "next/link";

const latestNews = [
  {
    title: "Imo Awards Contract for 35 km Owerri–Elele Road Reconstruction",
    date: "25 May 2025",
    img: "/images/craneburg.png"
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/craneburg.png"
                alt="Owerri–Elele Road Reconstruction"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Imo State Awards Contract for 35km Owerri–Elele Road Project
            </h1>
            <p className="text-gray-500 text-sm">25 May 2025 • Infrastructure / Works</p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Imo State Government has awarded a major infrastructure contract to Craneburg Construction for the full reconstruction of the 35.1 km Owerri–Elele Road. This vital route is expected to significantly boost connectivity between Imo State and neighboring regions, facilitating commerce, mobility, and economic growth.
            </p>
            <p className="text-gray-700 mb-6">
              The Commissioner for Works, Chief Ralph Nwosu, confirmed that the project also includes the near-complete Control Post Interchange Flyover. These developments are part of the state’s commitment to modernizing transport infrastructure across all 27 LGAs.
            </p>

            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/flyover.png"
                  alt="Control Post Flyover"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Highlights:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>35.1 km road reconstruction from Owerri to Elele underway.</li>
                  <li>Contract awarded to reputable firm, Craneburg Construction.</li>
                  <li>Includes completion of the Control Post Interchange Flyover.</li>
                  <li>Boosts interstate commerce and local mobility.</li>
                  <li>Part of larger state-wide infrastructure overhaul.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    &ldquo;This road project signifies our unwavering commitment to infrastructural excellence and regional integration.&rdquo;
                  </span>
                </blockquote>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              With increased investment in roads, bridges, and flyovers, the Imo Ministry of Works continues to position the state as a model of sustainable development and proactive governance in Nigeria.
            </p>
            <p className="text-gray-700 mt-2">
              Citizens have expressed optimism, noting the potential for faster transport, job creation, and revitalized business opportunities.
            </p>
          </div>
        </NewsBodySection>
      </section>

      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
        <Link href="/news" className="bg-green-600 text-white px-6 py-2 m-4">
        Go back to news
        </Link>
          {/* <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs"
              >
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
