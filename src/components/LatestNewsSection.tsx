import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Imo State Awards Contract for 35.1 km Owerri–Elelele Road Reconstruction",
    description: "The Imo State Government has officially awarded the contract for reconstruction and rehabilitation of the 35.1 km Owerri–Elelele Road to Craneburg Construction Company. Commissioner Ralph Nwosu emphasizes this as a critical milestone aligned with Governor Uzodimma’s infrastructure agenda.",
    date: "28 May 2025",
    image: "/images/flyover.png",
  },
  {
    title: "Owerri Control‑Post Flyover Nearing Completion at Assumpta Cathedral",
    description: "As part of the Owerri–Elelele Road project, the Control‑Post flyover opposite Assumpta Cathedral is nearly finished. Commissioner Nwosu highlights the expected relief from chronic traffic congestion and enhanced safety for motorists and pedestrians.",
    date: "25 May 2025",
    image: "/images/works2.png",
  },
  {
    title: "Ministry to Monitor Quality in Road Upgrade via BEME Standards",
    description: " Hon. Commissioner Ralph Nwosu says the Ministry will supervise construction closely under the Bill of Engineering Measurement & Evaluation (BEME) specifications—ensuring quality delivery and accountability.",
    date: "26 May 2025",
    image: "/images/works4.png",
  },
];


export default function LatestNewsSection() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col w-full max-w-md p-0 overflow-hidden transition hover:shadow-md"
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="400px"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/news">
        <p className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors text-center block">See More</p>
      </Link>
    </section>
  );
} 